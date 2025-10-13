const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const axios = require('axios')

// Initialize admin if not already initialized
try {
  admin.initializeApp()
} catch (e) {
  // already initialized
}

const app = express()
app.use(express.json({ limit: '10mb' }))
const multer = require('multer')
const FormData = require('form-data')

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } })

// Optional authentication middleware: when enabled via functions config or env var,
// require a Firebase ID token in Authorization header and verify it.
const REQUIRE_AUTH = (process.env.REQUIRE_AUTH === 'true') || (functions.config().app?.require_auth === 'true')

async function verifyAuthMiddleware(req, res, next) {
  if (!REQUIRE_AUTH) return next()

  const authHeader = req.headers.authorization || ''
  const match = authHeader.match(/Bearer (.*)/)
  if (!match) return res.status(401).json({ error: 'Missing Authorization header (Bearer <idToken>)' })

  const idToken = match[1]
  try {
    const decoded = await admin.auth().verifyIdToken(idToken)
    req.user = decoded
    return next()
  } catch (err) {
    console.error('Auth token verification failed:', err)
    return res.status(401).json({ error: 'Invalid or expired auth token' })
  }
}

app.use(verifyAuthMiddleware)

// Allowed origins can be set via an env var or functions config
// Example: ALLOWED_ORIGINS="https://example.com,https://www.example.com"
const allowedOrigins = (process.env.ALLOWED_ORIGINS || functions.config().app?.allowed_origins || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like curl or server-to-server)
    if (!origin) return callback(null, true)
    if (allowedOrigins.length === 0) return callback(null, true) // permissive if not configured
    if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true)
    return callback(new Error('Origin not allowed by CORS'))
  }
}))

// Read keys from functions config or environment
const OPENAI_KEY = functions.config().openai?.key || process.env.OPENAI_KEY
const GEMINI_KEY = functions.config().gemini?.key || process.env.GEMINI_KEY

if (!OPENAI_KEY && !GEMINI_KEY) {
  console.warn('No API keys configured for OpenAI or Gemini. Please set functions config or environment variables.')
}

// Simple proxy to OpenAI Chat Completions API (text)
app.post('/openai-proxy', async (req, res) => {
  try {
    if (!OPENAI_KEY) return res.status(500).json({ error: 'OpenAI key not configured on server.' })

    // Expect body to contain the payload you want to forward, e.g. { model, messages, temperature }
    const payload = req.body || {}

    const response = await axios.post('https://api.openai.com/v1/chat/completions', payload, {
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 60000
    })

    return res.status(response.status).json(response.data)
  } catch (err) {
    console.error('OpenAI proxy error:', err?.response?.data || err.message || err)
    const status = err?.response?.status || 500
    const data = err?.response?.data || { error: err.message }
    return res.status(status).json(data)
  }
})

// Simple proxy to Google Generative (Gemini) - text generation example using API key
// NOTE: In many setups Gemini requires service account credentials or Google Cloud auth — using an API key for simple projects is possible if enabled.
app.post('/gemini-proxy', async (req, res) => {
  try {
    if (!GEMINI_KEY) return res.status(500).json({ error: 'Gemini key not configured on server.' })

    // Expect body: { model: 'models/text-bison-001', input: 'Hello' }
    const { model = 'models/text-bison-001', input } = req.body || {}
    if (!input) return res.status(400).json({ error: 'Missing input in request body' })

    // Example endpoint for text generation (may vary depending on Google Cloud setup)
    const url = `https://generativeai.googleapis.com/v1beta2/${model}:generate?key=${GEMINI_KEY}`

    const response = await axios.post(url, { prompt: input }, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 60000
    })

    return res.status(response.status).json(response.data)
  } catch (err) {
    console.error('Gemini proxy error:', err?.response?.data || err.message || err)
    const status = err?.response?.status || 500
    const data = err?.response?.data || { error: err.message }
    return res.status(status).json(data)
  }
})

// Whisper audio upload proxy (multipart/form-data)
app.post('/whisper-proxy', upload.single('file'), async (req, res) => {
  try {
    if (!OPENAI_KEY) return res.status(500).json({ error: 'OpenAI key not configured on server.' })

    if (!req.file) return res.status(400).json({ error: 'Missing file in request' })

    const form = new FormData()
    form.append('file', req.file.buffer, { filename: req.file.originalname, contentType: req.file.mimetype })
    form.append('model', 'whisper-1')
    if (req.body.language) form.append('language', req.body.language)
    if (req.body.temperature) form.append('temperature', req.body.temperature)
    if (req.body.response_format) form.append('response_format', req.body.response_format)

    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', form, {
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        ...form.getHeaders()
      },
      maxContentLength: 50 * 1024 * 1024,
      timeout: 120000
    })

    return res.status(response.status).json(response.data)
  } catch (err) {
    console.error('Whisper proxy error:', err?.response?.data || err.message || err)
    const status = err?.response?.status || 500
    const data = err?.response?.data || { error: err.message }
    return res.status(status).json(data)
  }
})

// Health
app.get('/health', (req, res) => {
  res.json({ ok: true })
})

exports.api = functions.https.onRequest(app)
