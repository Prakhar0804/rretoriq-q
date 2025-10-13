import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import type { User as FirebaseUser } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '../lib/firebase'
import { userProfileService } from '../services/userProfileService'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  displayName: string
  photoURL?: string
  emailVerified: boolean
  createdAt: string
  profileCompleted?: boolean
  isNewUser?: boolean
  admin?: boolean // Custom claim for institutional admins
  institutionId?: string // Institution the user belongs to (for students)
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  profileCompleted: boolean
  isNewUser: boolean
}

interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>
  loginWithGoogle: () => Promise<void>
  register: (credentials: RegisterCredentials) => Promise<void>
  logout: () => Promise<void>
  initializeAuth: () => void
  clearError: () => void
  setLoading: (loading: boolean) => void
  checkProfileCompletion: (userId: string) => Promise<boolean>
  completeProfile: (userId: string, profileData: any) => Promise<void>
  markProfileCompleted: () => void
}

type AuthStore = AuthState & AuthActions

// Helper function to convert Firebase user to our User type
const convertFirebaseUser = async (firebaseUser: FirebaseUser, isNewUser: boolean = false): Promise<User> => {
  // Try to get additional user data from Firestore
  const userDocRef = doc(db, 'users', firebaseUser.uid)
  const userDoc = await getDoc(userDocRef)
  
  // Check if user profile is completed
  const userProfile = await userProfileService.getUserProfile(firebaseUser.uid)
  const profileCompleted = userProfile ? checkProfileCompleteness(userProfile) : false
  
  // Get custom claims (admin status) from ID token
  const idTokenResult = await firebaseUser.getIdTokenResult()
  const isAdmin = idTokenResult.claims.admin === true
  
  if (userDoc.exists()) {
    const userData = userDoc.data()
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      displayName: firebaseUser.displayName || `${userData.firstName} ${userData.lastName}`,
      photoURL: firebaseUser.photoURL || undefined,
      emailVerified: firebaseUser.emailVerified,
      createdAt: userData.createdAt || new Date().toISOString(),
      profileCompleted,
      isNewUser,
      admin: isAdmin,
      institutionId: userData.institutionId
    }
  }

  // Fallback to Firebase user data only
  const displayNameParts = firebaseUser.displayName?.split(' ') || ['', '']
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    firstName: displayNameParts[0] || '',
    lastName: displayNameParts.slice(1).join(' ') || '',
    displayName: firebaseUser.displayName || firebaseUser.email || '',
    photoURL: firebaseUser.photoURL || undefined,
    emailVerified: firebaseUser.emailVerified,
    createdAt: new Date().toISOString(),
    profileCompleted,
    isNewUser,
    admin: isAdmin
  }
}

// Helper function to check if profile is complete
const checkProfileCompleteness = (profile: any): boolean => {
  const requiredFields = ['firstName', 'lastName', 'phone', 'location', 'occupation']
  return requiredFields.every(field => profile[field] && profile[field].trim().length > 0)
}

// Helper function to save user data to Firestore
const saveUserToFirestore = async (firebaseUser: FirebaseUser, additionalData?: Partial<User>) => {
  const userDocRef = doc(db, 'users', firebaseUser.uid)
  const userData = {
    id: firebaseUser.uid,
    email: firebaseUser.email,
    firstName: additionalData?.firstName || '',
    lastName: additionalData?.lastName || '',
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    emailVerified: firebaseUser.emailVerified,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...additionalData
  }
  
  await setDoc(userDocRef, userData, { merge: true })
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      profileCompleted: false,
      isNewUser: false,

      // Actions
      login: async (credentials: LoginCredentials) => {
        try {
          set({ isLoading: true, error: null })
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
          const user = await convertFirebaseUser(userCredential.user)
          
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            profileCompleted: user.profileCompleted || false,
            isNewUser: false
          })
        } catch (error: any) {
          const errorMessage = error.code?.replace('auth/', '').replace('-', ' ') || 'Login failed'
          set({ 
            error: errorMessage,
            isLoading: false 
          })
          throw error
        }
      },

      loginWithGoogle: async () => {
        try {
          set({ isLoading: true, error: null })
          const userCredential = await signInWithPopup(auth, googleProvider)
          
          // Check if this is a new user
          const existingProfile = await userProfileService.getUserProfile(userCredential.user.uid)
          const isNewUser = !existingProfile
          
          // Save user data to Firestore
          await saveUserToFirestore(userCredential.user)
          
          // Create profile if new user
          if (isNewUser) {
            const displayNameParts = userCredential.user.displayName?.split(' ') || ['', '']
            await userProfileService.createUserProfile(userCredential.user.uid, userCredential.user.email!, {
              firstName: displayNameParts[0] || '',
              lastName: displayNameParts.slice(1).join(' ') || '',
              displayName: userCredential.user.displayName || ''
            })
          }
          
          const user = await convertFirebaseUser(userCredential.user, isNewUser)
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            profileCompleted: user.profileCompleted || false,
            isNewUser
          })
        } catch (error: any) {
          const errorMessage = error.code?.replace('auth/', '').replace('-', ' ') || 'Google login failed'
          set({ 
            error: errorMessage,
            isLoading: false 
          })
          throw error
        }
      },

      register: async (credentials: RegisterCredentials) => {
        try {
          set({ isLoading: true, error: null })
          const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
          
          // Update the user's display name
          await updateProfile(userCredential.user, {
            displayName: `${credentials.firstName} ${credentials.lastName}`
          })

          // Save additional user data to Firestore
          await saveUserToFirestore(userCredential.user, {
            firstName: credentials.firstName,
            lastName: credentials.lastName
          })

          // Create initial user profile
          await userProfileService.createUserProfile(userCredential.user.uid, userCredential.user.email!, {
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            displayName: `${credentials.firstName} ${credentials.lastName}`
          })

          const user = await convertFirebaseUser(userCredential.user, true)
          set({ 
            user, 
            isAuthenticated: true, 
            isLoading: false,
            profileCompleted: false,
            isNewUser: true
          })
        } catch (error: any) {
          const errorMessage = error.code?.replace('auth/', '').replace('-', ' ') || 'Registration failed'
          set({ 
            error: errorMessage,
            isLoading: false 
          })
          throw error
        }
      },

      logout: async () => {
        try {
          set({ isLoading: true })
          await signOut(auth)
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null,
            profileCompleted: false,
            isNewUser: false
          })
        } catch (error) {
          console.error('Logout error:', error)
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false,
            error: null,
            profileCompleted: false,
            isNewUser: false
          })
        }
      },

      initializeAuth: () => {
        set({ isLoading: true })
        
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          try {
            if (firebaseUser) {
              const user = await convertFirebaseUser(firebaseUser)
              set({ 
                user, 
                isAuthenticated: true, 
                isLoading: false,
                error: null,
                profileCompleted: user.profileCompleted || false,
                isNewUser: user.isNewUser || false
              })
            } else {
              set({ 
                user: null, 
                isAuthenticated: false, 
                isLoading: false,
                error: null,
                profileCompleted: false,
                isNewUser: false
              })
            }
          } catch (error) {
            console.error('Auth state change error:', error)
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false,
              error: error instanceof Error ? error.message : 'Authentication error',
              profileCompleted: false,
              isNewUser: false
            })
          }
        })

        // Return unsubscribe function
        return unsubscribe
      },

      checkProfileCompletion: async (userId: string): Promise<boolean> => {
        try {
          const profile = await userProfileService.getUserProfile(userId)
          if (!profile) return false
          
          const isComplete = checkProfileCompleteness(profile)
          set({ profileCompleted: isComplete })
          return isComplete
        } catch (error) {
          console.error('Error checking profile completion:', error)
          return false
        }
      },

      completeProfile: async (userId: string, profileData: any) => {
        try {
          await userProfileService.updateUserProfile(userId, profileData)
          set({ profileCompleted: true, isNewUser: false })
        } catch (error) {
          console.error('Error completing profile:', error)
          throw error
        }
      },

      markProfileCompleted: () => set({ profileCompleted: true, isNewUser: false }),

      clearError: () => set({ error: null }),

      setLoading: (loading: boolean) => set({ isLoading: loading }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated,
        profileCompleted: state.profileCompleted,
        isNewUser: state.isNewUser
      }),
    }
  )
)

// Initialize auth state on app load
export const initializeAuth = () => {
  const { initializeAuth: initAuth } = useAuthStore.getState()
  return initAuth()
}