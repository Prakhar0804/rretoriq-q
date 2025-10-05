import type { Question } from '../types/questions'

export const allQuestions: Question[] = [
  // ========================
  // HR QUESTIONS (48 total)
  // ========================
  
  // HR Easy Questions (17)
  {
    id: "hr-easy-001",
    text: "Tell me about yourself.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Communication", "Presentation", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Brief background", "Relevant skills/experiences", "Career goals"]
    }
  },
  {
    id: "hr-easy-002",
    text: "Are you willing to relocate?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Flexibility", "Adaptability"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Clear 'Yes' or 'No'", "Honesty about preferences"]
    }
  },
  {
    id: "hr-easy-003",
    text: "What do you know about Infosys/TCS?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Research Skills", "Motivation"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Company domain", "Recent achievements", "Values and culture"]
    }
  },
  {
    id: "hr-easy-004",
    text: "How would your friends describe you?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Self-Awareness", "Interpersonal Skills"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention positive traits", "Provide brief examples"]
    }
  },
  {
    id: "hr-easy-005",
    text: "What motivates you?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Motivation", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Learning new skills", "Solving challenges", "Contributing to team success"]
    }
  },
  {
    id: "hr-easy-006",
    text: "What role do you prefer: leader or follower?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Teamwork", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Acknowledge both are important", "Express flexibility based on situation"]
    }
  },
  {
    id: "hr-easy-007",
    text: "What are your hobbies?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Work-Life Balance"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention a few hobbies", "Connect them to positive traits"]
    }
  },
  {
    id: "hr-easy-008",
    text: "What do you do in free time?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Work-Life Balance"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention productive activities", "Show well-rounded personality"]
    }
  },
  {
    id: "hr-easy-009",
    text: "What is your ideal work environment?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Cultural Fit", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Collaborative and supportive", "Values learning and growth", "Align with company environment"]
    }
  },
  {
    id: "hr-easy-010",
    text: "Have you taken any certification courses?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Proactiveness", "Learning Agility"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["List relevant certifications", "Explain what you learned"]
    }
  },
  {
    id: "hr-easy-011",
    text: "What is your learning style?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Self-Awareness", "Coachability"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Visual, auditory, kinesthetic, or mix", "Show eagerness to learn differently"]
    }
  },
  {
    id: "hr-easy-012",
    text: "What motivates you to improve?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Ambition", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Desire for responsibility", "Feedback from peers", "Achieving goals"]
    }
  },
  {
    id: "hr-easy-013",
    text: "Who is your role model?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Values", "Aspirations"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Name a person", "Explain admirable qualities", "How you incorporate them"]
    }
  },
  {
    id: "hr-easy-014",
    text: "What was your favorite subject?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Interests"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Name the subject", "Explain why you enjoyed it"]
    }
  },
  {
    id: "hr-easy-015",
    text: "Describe your communication style.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Communication", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Clarity and conciseness", "Active listening", "Adaptability to audiences"]
    }
  },
  {
    id: "hr-easy-016",
    text: "What are your expectations from this role?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Motivation", "Career Goals"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Growth opportunities", "Meaningful contribution", "Supportive team environment"]
    }
  },
  {
    id: "hr-easy-017",
    text: "Describe work-life balance.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Time Management", "Professionalism"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Prioritizing tasks", "Being focused at work", "Personal time to recharge"]
    }
  },

  // HR Medium Questions (25)
  {
    id: "hr-medium-001",
    text: "Why do you want to join Infosys/TCS?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Motivation", "Company Interest", "Cultural Fit"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Align career goals with company vision", "Mention specific projects/values", "Show genuine enthusiasm"]
    }
  },
  {
    id: "hr-medium-002",
    text: "What are your strengths and weaknesses?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Honesty", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Relevant strengths with examples", "Genuine weakness and improvement steps"]
    }
  },
  {
    id: "hr-medium-003",
    text: "Where do you see yourself in 5 years?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Ambition", "Career Planning"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Growth within company", "Realistic career goals", "Connect goals to role"]
    }
  },
  {
    id: "hr-medium-004",
    text: "Describe a situation where you showed leadership.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Leadership", "Problem-Solving", "Initiative"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Focus on specific actions and outcome"]
    }
  },
  {
    id: "hr-medium-005",
    text: "How do you handle failure?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Resilience", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Acknowledge failure", "Focus on lessons learned", "Applied learning example"]
    }
  },
  {
    id: "hr-medium-006",
    text: "Give an example of teamwork.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Teamwork", "Collaboration", "Communication"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Highlight specific contribution to team success"]
    }
  },
  {
    id: "hr-medium-007",
    text: "What is your salary expectation?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Negotiation", "Professionalism"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Researched reasonable range", "Express flexibility", "Value overall opportunity"]
    }
  },
  {
    id: "hr-medium-008",
    text: "Describe a challenge you overcame.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Problem-Solving", "Resilience"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Clearly define challenge", "Explain resolution steps"]
    }
  },
  {
    id: "hr-medium-009",
    text: "How do you prioritize tasks?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Time Management", "Organizational Skills"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Mention Eisenhower Matrix", "Communicate with stakeholders for priorities"]
    }
  },
  {
    id: "hr-medium-010",
    text: "Why should we hire you?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Persuasion", "Value Proposition", "Confidence"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Match skills to job description", "Highlight unique strengths", "Show company enthusiasm"]
    }
  },
  {
    id: "hr-medium-011",
    text: "What is your biggest achievement?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Achievement Orientation", "Confidence"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Choose relevant achievement", "Use STAR method to explain"]
    }
  },
  {
    id: "hr-medium-012",
    text: "How do you handle criticism?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Coachability", "Emotional Intelligence"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["View as constructive feedback", "Listen actively", "Example of applying feedback"]
    }
  },
  {
    id: "hr-medium-013",
    text: "How do you handle stress?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Stress Management", "Resilience"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Acknowledge stress happens", "Healthy coping mechanisms", "Prioritization and breaks"]
    }
  },
  {
    id: "hr-medium-014",
    text: "Tell me about a time you managed conflict.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Conflict Resolution", "Interpersonal Skills"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Listen to all sides", "Find mutually agreeable solution"]
    }
  },
  {
    id: "hr-medium-015",
    text: "How do you ensure deadlines are met?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Time Management", "Reliability"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Break down large tasks", "Set personal milestones", "Communicate proactively about delays"]
    }
  },
  {
    id: "hr-medium-016",
    text: "How do you stay updated on technology?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Learning Agility", "Proactiveness"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Tech blogs and courses", "Personal projects", "Show genuine curiosity"]
    }
  },
  {
    id: "hr-medium-017",
    text: "What are your views on diversity?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Teamwork", "Cultural Fit"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Express positive view", "Benefits like different perspectives", "Innovation through diversity"]
    }
  },
  {
    id: "hr-medium-018",
    text: "How do you handle monotonous work?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Discipline", "Attitude"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Focus on task importance", "Find efficiency improvements", "Maintain positive attitude"]
    }
  },
  {
    id: "hr-medium-019",
    text: "Describe your adaptability.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Adaptability", "Flexibility"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Example of adapting to change", "Positive response", "Successful outcome"]
    }
  },
  {
    id: "hr-medium-020",
    text: "How do you deal with changes in project plans?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Adaptability", "Communication"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Stay calm and understand reasons", "Communicate with team to realign", "Show flexible attitude"]
    }
  },
  {
    id: "hr-medium-021",
    text: "How do you evaluate your work?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Quality Orientation"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Compare against requirements", "Seek feedback from peers", "Reflect on lessons learned"]
    }
  },
  {
    id: "hr-medium-022",
    text: "How do you respond to feedback and criticism?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Coachability", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Listen actively", "Thank for feedback", "Ask clarifying questions and improve"]
    }
  },
  {
    id: "hr-medium-023",
    text: "What is your proudest moment?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Achievement Orientation"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Choose specific relevant achievement", "Explain context and why proud"]
    }
  },
  {
    id: "hr-medium-024",
    text: "What skills would you like to improve?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Genuine area for development", "Steps already taking to improve"]
    }
  },
  {
    id: "hr-medium-025",
    text: "What interests you about this job?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Motivation", "Company Interest"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Connect job responsibilities to skills", "How it fits career goals"]
    }
  },

  // HR Hard Questions (6)
  {
    id: "hr-hard-001",
    text: "What would you do if not selected?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Resilience", "Professionalism", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Express disappointment professionally", "Ask for feedback", "Plan to continue improving"]
    }
  },
  {
    id: "hr-hard-002",
    text: "Describe an ethical dilemma you faced.",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Integrity", "Ethics", "Decision Making"],
    metadata: {
      expectedAnswerLength: 240,
      keyPoints: ["Clearly describe situation", "Explain thought process", "Justify action and outcome"]
    }
  },
  {
    id: "hr-hard-003",
    text: "Tell about an unsuccessful project.",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Accountability", "Learning from Failure"],
    metadata: {
      expectedAnswerLength: 200,
      keyPoints: ["Take ownership of role", "Focus on lessons learned", "Avoid blaming others"]
    }
  },
  {
    id: "hr-hard-004",
    text: "What would you change about your education?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Self-Awareness", "Reflection"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Focus on gaining practical experience", "Avoid being overly negative about education"]
    }
  },
  {
    id: "hr-hard-005",
    text: "What will you do if offered a higher salary elsewhere?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Loyalty", "Motivation", "Career Values"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Emphasize non-monetary factors", "Reiterate interest in this company"]
    }
  },
  {
    id: "hr-hard-006",
    text: "What would you do differently in college?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Self-Awareness", "Reflection"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Mention seeking more internships", "Focus on practical projects", "Show continuous improvement mindset"]
    }
  },

  // ================================
  // TECHNICAL QUESTIONS (42 total)
  // ================================
  
  // Technical Easy Questions (42)
  {
    id: "tech-easy-001",
    text: "What is a pointer? How does it differ from a reference variable?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["C++ Fundamentals", "Memory Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Pointer stores memory address", "Reference is alias for variable", "Pointers can be null/reassigned"],
      industry: "Software Development"
    }
  },
  {
    id: "tech-easy-002",
    text: "Explain the difference between array and linked list.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Memory Management"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Array: contiguous memory, O(1) access", "Linked list: non-contiguous, O(n) access", "Array fixed size, linked list dynamic"]
    }
  },
  {
    id: "tech-easy-003",
    text: "What is the difference between stack and heap memory?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Memory Management", "System Architecture"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Stack: automatic allocation, LIFO", "Heap: manual allocation, slower access", "Stack for local variables, heap for dynamic allocation"]
    }
  },
  {
    id: "tech-easy-004",
    text: "Explain the concept of recursion with an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Logic", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Function calling itself", "Base condition to stop", "Example: factorial, fibonacci"]
    }
  },
  {
    id: "tech-easy-005",
    text: "What is the difference between HTTP and HTTPS?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Technologies", "Security"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["HTTP: plain text transmission", "HTTPS: encrypted with SSL/TLS", "HTTPS more secure for sensitive data"]
    }
  },
  {
    id: "tech-easy-006",
    text: "What is an algorithm? Give an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Algorithm Design", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Step-by-step procedure to solve problem", "Example: sorting, searching", "Should be finite and well-defined"]
    }
  },
  {
    id: "tech-easy-007",
    text: "Explain what is Object-Oriented Programming (OOP).",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Paradigms"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Programming paradigm based on objects", "Encapsulation, Inheritance, Polymorphism", "Real-world modeling approach"]
    }
  },
  {
    id: "tech-easy-008",
    text: "What is a database? What are different types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Concepts", "Data Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Organized collection of data", "Relational, NoSQL, Graph databases", "Used for data storage and retrieval"]
    }
  },
  {
    id: "tech-easy-009",
    text: "What is the difference between SQL and NoSQL?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Technologies", "Data Management"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["SQL: structured, ACID properties", "NoSQL: flexible schema, horizontal scaling", "Use cases differ based on requirements"]
    }
  },
  {
    id: "tech-easy-010",
    text: "What is a compiler? How is it different from an interpreter?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["System Software", "Programming Languages"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Compiler: translates entire code to machine code", "Interpreter: executes code line by line", "Compiler faster execution, interpreter easier debugging"]
    }
  },
  {
    id: "tech-easy-011",
    text: "What is a variable? What are different data types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Fundamentals", "Data Types"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Named storage location for data", "int, float, char, boolean", "Different types for different kinds of data"]
    }
  },
  {
    id: "tech-easy-012",
    text: "Explain the concept of loops with examples.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Logic", "Control Structures"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Repeat code block multiple times", "for, while, do-while loops", "Used for iteration and repetitive tasks"]
    }
  },
  {
    id: "tech-easy-013",
    text: "What is an operating system? What are its functions?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Operating Systems", "System Software"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Interface between hardware and software", "Memory management, process scheduling", "File system management, device drivers"]
    }
  },
  {
    id: "tech-easy-014",
    text: "What is the difference between linear and binary search?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Algorithms", "Search Techniques"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Linear: sequential search O(n)", "Binary: divide and conquer O(log n)", "Binary requires sorted array"]
    }
  },
  {
    id: "tech-easy-015",
    text: "What is a function? Why do we use functions?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Concepts", "Code Organization"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Reusable block of code", "Modularity and code reuse", "Parameters and return values"]
    }
  },
  {
    id: "tech-easy-016",
    text: "Explain what is a network? What are its types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Networking Concepts", "Communication"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Connected devices for communication", "LAN, WAN, MAN types", "Enables resource sharing and communication"]
    }
  },
  {
    id: "tech-easy-017",
    text: "What is software testing? Why is it important?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Quality", "Testing Concepts"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Process of evaluating software", "Find bugs and ensure quality", "Prevents defects in production"]
    }
  },
  {
    id: "tech-easy-018",
    text: "What is the difference between hardware and software?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Computer Fundamentals", "System Components"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Hardware: physical components", "Software: programs and instructions", "Both work together for computing"]
    }
  },
  {
    id: "tech-easy-019",
    text: "What is a class and object in programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Fundamentals"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Class: blueprint for objects", "Object: instance of a class", "Class defines properties and methods"]
    }
  },
  {
    id: "tech-easy-020",
    text: "Explain what is encapsulation in OOP.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Principles", "Data Security"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Bundling data and methods together", "Data hiding and access control", "Private, public, protected access modifiers"]
    }
  },
  {
    id: "tech-easy-021",
    text: "What is inheritance in Object-Oriented Programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Code Reusability"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Child class inherits from parent", "Code reusability and hierarchy", "IS-A relationship between classes"]
    }
  },
  {
    id: "tech-easy-022",
    text: "What is polymorphism? Give an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Flexibility"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["One interface, multiple implementations", "Method overloading and overriding", "Runtime and compile-time polymorphism"]
    }
  },
  {
    id: "tech-easy-023",
    text: "What is abstraction in programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Principles", "Design Concepts"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Hiding implementation details", "Focus on what object does, not how", "Abstract classes and interfaces"]
    }
  },
  {
    id: "tech-easy-024",
    text: "What is a constructor? What are its types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Object Initialization"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Special method to initialize objects", "Default, parameterized, copy constructors", "Called automatically when object created"]
    }
  },
  {
    id: "tech-easy-025",
    text: "What is the difference between method overloading and overriding?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Polymorphism"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Overloading: same name, different parameters", "Overriding: same signature in child class", "Overloading compile-time, overriding runtime"]
    }
  },
  {
    id: "tech-easy-026",
    text: "What is a data structure? Name some common ones.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Way to organize and store data", "Array, stack, queue, tree, graph", "Choose based on operation requirements"]
    }
  },
  {
    id: "tech-easy-027",
    text: "Explain what is a stack data structure.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "LIFO Operations"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Last In First Out (LIFO)", "Push and pop operations", "Used in function calls, expression evaluation"]
    }
  },
  {
    id: "tech-easy-028",
    text: "What is a queue data structure?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "FIFO Operations"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["First In First Out (FIFO)", "Enqueue and dequeue operations", "Used in scheduling, breadth-first search"]
    }
  },
  {
    id: "tech-easy-029",
    text: "What is the difference between linear and non-linear data structures?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Organization Concepts"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Linear: sequential arrangement", "Non-linear: hierarchical arrangement", "Examples: array vs tree"]
    }
  },
  {
    id: "tech-easy-030",
    text: "What is a binary tree?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Tree Structures", "Hierarchical Data"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Tree with at most 2 children per node", "Left and right child nodes", "Used for searching and sorting"]
    }
  },
  {
    id: "tech-easy-031",
    text: "What is the difference between primary key and foreign key?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Concepts", "Data Integrity"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Primary key: unique identifier", "Foreign key: reference to another table", "Primary key cannot be null"]
    }
  },
  {
    id: "tech-easy-032",
    text: "What is normalization in databases?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Design", "Data Organization"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Process to reduce data redundancy", "Organize data into tables", "1NF, 2NF, 3NF normal forms"]
    }
  },
  {
    id: "tech-easy-033",
    text: "What is HTML? What does it stand for?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Markup Languages"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["HyperText Markup Language", "Structure and content of web pages", "Uses tags to define elements"]
    }
  },
  {
    id: "tech-easy-034",
    text: "What is CSS? What is its purpose?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Styling"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Cascading Style Sheets", "Controls appearance and layout", "Separates content from presentation"]
    }
  },
  {
    id: "tech-easy-035",
    text: "What is JavaScript? What can you do with it?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Programming Languages"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Client-side scripting language", "Interactive web pages", "Now used for server-side too (Node.js)"]
    }
  },
  {
    id: "tech-easy-036",
    text: "What is the difference between GET and POST methods?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "HTTP Methods"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["GET: retrieve data, visible in URL", "POST: send data, hidden in body", "GET idempotent, POST not idempotent"]
    }
  },
  {
    id: "tech-easy-037",
    text: "What is an IP address?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Networking", "Internet Protocols"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Unique identifier for devices", "IPv4 and IPv6 versions", "Used for network communication"]
    }
  },
  {
    id: "tech-easy-038",
    text: "What is cloud computing?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Cloud Technologies", "Modern Computing"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["On-demand computing resources", "IaaS, PaaS, SaaS models", "Scalability and cost-effectiveness"]
    }
  },
  {
    id: "tech-easy-039",
    text: "What is machine learning?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["AI/ML Concepts", "Data Analysis"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Algorithms learn from data", "Supervised, unsupervised learning", "Pattern recognition and prediction"]
    }
  },
  {
    id: "tech-easy-040",
    text: "What is artificial intelligence?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["AI Concepts", "Technology Trends"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Machines performing intelligent tasks", "Problem solving and decision making", "ML, NLP, computer vision applications"]
    }
  },
  {
    id: "tech-easy-041",
    text: "What is version control? Why is it important?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Development", "Code Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Track changes in code", "Collaboration and backup", "Git, SVN are popular tools"]
    }
  },
  {
    id: "tech-easy-042",
    text: "What is an API? How is it used?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Integration", "Communication Protocols"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Application Programming Interface", "Allows software communication", "REST, GraphQL are common types"]
    }
  },

  // ================================
  // APTITUDE QUESTIONS (67 total)
  // ================================
  
  // Aptitude Easy Questions (25)
  {
    id: "apt-easy-001",
    text: "If 20% of a number is 60, what is the number?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Quantitative Analysis", "Percentages"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Equation: 0.20 * x = 60", "Solve for x", "Answer: 300"]
    }
  },
  {
    id: "apt-easy-002",
    text: "In a class, 35% are girls, rest boys. If there are 21 girls, how many students?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Problem-Solving"],
    metadata: {
      expectedAnswerLength: 45,
      keyPoints: ["Equation: 0.35 * Total = 21", "Solve for Total", "Answer: 60"]
    }
  },
  {
    id: "apt-easy-003",
    text: "Find the simple interest on Rs. 5000 at 8% per annum for 3 years.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Simple Interest", "Mathematical Calculations"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Formula: SI = PRT/100", "SI = 5000 × 8 × 3 / 100", "Answer: Rs. 1200"]
    }
  },
  {
    id: "apt-easy-004",
    text: "A train travels 240 km in 3 hours. What is its speed?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Speed Time Distance", "Basic Calculations"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Formula: Speed = Distance/Time", "Speed = 240/3", "Answer: 80 km/h"]
    }
  },
  {
    id: "apt-easy-005",
    text: "If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Ratios", "Proportions"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Ratio 3:2 means 3x boys, 2x girls", "3x = 15, so x = 5", "Girls = 2x = 10"]
    }
  },
  {
    id: "apt-easy-006",
    text: "What is 25% of 80?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Mental Math"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["25% = 1/4", "25% of 80 = 80/4", "Answer: 20"]
    }
  },
  {
    id: "apt-easy-007",
    text: "Find the average of 12, 18, 24, 30.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Averages", "Arithmetic"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Sum = 12 + 18 + 24 + 30 = 84", "Average = Sum/Count = 84/4", "Answer: 21"]
    }
  },
  {
    id: "apt-easy-008",
    text: "If a product costs Rs. 100 and is sold at 20% profit, what is the selling price?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Profit Loss", "Percentages"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Profit = 20% of 100 = 20", "Selling Price = Cost + Profit", "Answer: Rs. 120"]
    }
  },
  {
    id: "apt-easy-009",
    text: "Complete the series: 2, 4, 8, 16, __?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Number Series", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Each term is double the previous", "Pattern: ×2", "Answer: 32"]
    }
  },
  {
    id: "apt-easy-010",
    text: "If today is Wednesday, what day will it be after 10 days?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Calendar", "Logical Reasoning"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["10 days = 1 week + 3 days", "Wednesday + 3 days", "Answer: Saturday"]
    }
  },
  {
    id: "apt-easy-011",
    text: "Find the next number: 5, 10, 15, 20, __?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Arithmetic Progression", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Common difference = 5", "Add 5 to last term", "Answer: 25"]
    }
  },
  {
    id: "apt-easy-012",
    text: "What is 15% of 200?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Mental Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["15% = 15/100", "15% of 200 = (15/100) × 200", "Answer: 30"]
    }
  },
  {
    id: "apt-easy-013",
    text: "If 5 pens cost Rs. 50, what is the cost of 8 pens?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Unitary Method", "Proportions"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Cost of 1 pen = 50/5 = 10", "Cost of 8 pens = 8 × 10", "Answer: Rs. 80"]
    }
  },
  {
    id: "apt-easy-014",
    text: "Find the area of a rectangle with length 8 cm and breadth 5 cm.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Geometry", "Area Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Area = length × breadth", "Area = 8 × 5", "Answer: 40 cm²"]
    }
  },
  {
    id: "apt-easy-015",
    text: "What is the perimeter of a square with side 6 cm?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Geometry", "Perimeter"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Perimeter = 4 × side", "Perimeter = 4 × 6", "Answer: 24 cm"]
    }
  },
  {
    id: "apt-easy-016",
    text: "If x + 5 = 12, find the value of x.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Algebra", "Equation Solving"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["x + 5 = 12", "x = 12 - 5", "Answer: x = 7"]
    }
  },
  {
    id: "apt-easy-017",
    text: "Convert 0.75 to a fraction.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Fractions", "Decimal Conversion"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["0.75 = 75/100", "Simplify by dividing by 25", "Answer: 3/4"]
    }
  },
  {
    id: "apt-easy-018",
    text: "What is 2³ (2 to the power 3)?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Exponents", "Powers"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["2³ = 2 × 2 × 2", "Calculate step by step", "Answer: 8"]
    }
  },
  {
    id: "apt-easy-019",
    text: "Find the LCM of 4 and 6.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["LCM", "Number Theory"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Multiples of 4: 4, 8, 12, 16...", "Multiples of 6: 6, 12, 18...", "Answer: 12"]
    }
  },
  {
    id: "apt-easy-020",
    text: "Find the HCF of 12 and 18.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["HCF", "Number Theory"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Factors of 12: 1, 2, 3, 4, 6, 12", "Factors of 18: 1, 2, 3, 6, 9, 18", "Answer: 6"]
    }
  },
  {
    id: "apt-easy-021",
    text: "If a = 3 and b = 4, find a² + b².",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Algebra", "Substitution"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["a² = 3² = 9", "b² = 4² = 16", "Answer: 9 + 16 = 25"]
    }
  },
  {
    id: "apt-easy-022",
    text: "What is 1/2 + 1/4?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Fractions", "Addition"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Convert to common denominator", "1/2 = 2/4", "2/4 + 1/4 = 3/4"]
    }
  },
  {
    id: "apt-easy-023",
    text: "Round 47.6 to the nearest whole number.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Rounding", "Approximation"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["Decimal part is 0.6", "0.6 > 0.5, so round up", "Answer: 48"]
    }
  },
  {
    id: "apt-easy-024",
    text: "If 12 apples cost Rs. 36, what is the cost per apple?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Unit Rate", "Division"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Cost per apple = Total cost / Number", "Cost = 36/12", "Answer: Rs. 3"]
    }
  },
  {
    id: "apt-easy-025",
    text: "What is 60% of 150?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["60% = 60/100 = 0.6", "60% of 150 = 0.6 × 150", "Answer: 90"]
    }
  },

  // Aptitude Medium Questions (31)
  {
    id: "apt-medium-001",
    text: "A man buys an article for Rs. 80 and sells it for Rs. 100. Find his profit percentage.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Profit Loss", "Percentage Calculation"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Profit = SP - CP = 100 - 80 = 20", "Profit% = (Profit/CP) × 100", "Answer: 25%"]
    }
  },
  {
    id: "apt-medium-002",
    text: "Find the compound interest on Rs. 10,000 at 10% per annum for 2 years.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Compound Interest", "Financial Mathematics"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Amount = P(1 + R/100)^n", "A = 10000(1.1)² = 12100", "CI = A - P = 2100"]
    }
  },
  {
    id: "apt-medium-003",
    text: "Two pipes can fill a tank in 6 and 8 hours respectively. How long to fill together?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Time and Work", "Rate Problems"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Rate 1 = 1/6 tank/hour", "Rate 2 = 1/8 tank/hour", "Combined = 1/6 + 1/8 = 7/24", "Time = 24/7 hours"]
    }
  },
  {
    id: "apt-medium-004",
    text: "A car travels first 100 km at 50 km/h and next 100 km at 40 km/h. Find average speed.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Average Speed", "Time Distance"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Time1 = 100/50 = 2 hours", "Time2 = 100/40 = 2.5 hours", "Avg speed = 200/4.5 = 44.44 km/h"]
    }
  },
  {
    id: "apt-medium-005",
    text: "Find the next term in the series: 2, 6, 18, 54, __?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometric Series", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Each term is multiplied by 3", "Pattern: ×3", "54 × 3 = 162"]
    }
  },
  {
    id: "apt-medium-006",
    text: "In what ratio should tea at Rs. 60/kg be mixed with tea at Rs. 80/kg to get mixture at Rs. 70/kg?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Mixture and Alligation", "Ratio Problems"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Use alligation method", "Difference from mean: 10 and 10", "Ratio = 10:10 = 1:1"]
    }
  },
  {
    id: "apt-medium-007",
    text: "A sum becomes Rs. 1320 in 2 years and Rs. 1392 in 3 years at simple interest. Find the principal.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Simple Interest", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["SI for 1 year = 1392 - 1320 = 72", "SI for 2 years = 144", "Principal = 1320 - 144 = 1176"]
    }
  },
  {
    id: "apt-medium-008",
    text: "If the price of sugar increases by 25%, by what percent should consumption be reduced to keep expenditure same?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Percentage Changes", "Inverse Variation"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["New price = 125% of original", "Reduction = (25/125) × 100", "Answer: 20%"]
    }
  },
  {
    id: "apt-medium-009",
    text: "A clock gains 2 minutes every hour. If it shows 10:00 AM when the correct time is 9:00 AM, what will it show when the correct time is 2:00 PM?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Clock Problems", "Time Calculation"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Clock is 1 hour fast initially", "From 9 AM to 2 PM = 5 hours", "Gains 2×5 = 10 more minutes", "Shows 3:10 PM"]
    }
  },
  {
    id: "apt-medium-010",
    text: "Find the number of ways to arrange the letters of the word MATHEMATICS.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Permutations", "Combinatorics"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Total letters = 11", "M appears 2 times, A appears 2 times, T appears 2 times", "Answer: 11!/(2!×2!×2!) = 4,989,600"]
    }
  },
  {
    id: "apt-medium-011",
    text: "In how many ways can 5 people be seated in a row if 2 particular people must sit together?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Permutations", "Conditional Arrangements"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Treat 2 people as 1 unit", "4 units can be arranged in 4! ways", "2 people in unit can be arranged in 2! ways", "Answer: 4! × 2! = 48"]
    }
  },
  {
    id: "apt-medium-012",
    text: "A boat takes 2 hours to go 8 km downstream and 4 hours to go 8 km upstream. Find the speed of the boat in still water.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Boats and Streams", "Relative Speed"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Downstream speed = 8/2 = 4 km/h", "Upstream speed = 8/4 = 2 km/h", "Boat speed = (4+2)/2 = 3 km/h"]
    }
  },
  {
    id: "apt-medium-013",
    text: "If log₂ 8 = x, find the value of x.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Logarithms", "Exponentials"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["log₂ 8 = x means 2ˣ = 8", "2³ = 8", "Therefore x = 3"]
    }
  },
  {
    id: "apt-medium-014",
    text: "Find the sum of first 20 natural numbers.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Arithmetic Series", "Sum Formula"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Sum = n(n+1)/2", "Sum = 20(21)/2", "Answer: 210"]
    }
  },
  {
    id: "apt-medium-015",
    text: "A person invests Rs. 5000 at 8% simple interest and Rs. 3000 at 10% simple interest. Find total interest after 2 years.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Simple Interest", "Multiple Investments"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["SI₁ = 5000×8×2/100 = 800", "SI₂ = 3000×10×2/100 = 600", "Total = 800 + 600 = 1400"]
    }
  },
  {
    id: "apt-medium-016",
    text: "Find the area of a triangle with sides 3, 4, and 5 cm.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometry", "Heron's Formula"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["This is a right triangle (3²+4²=5²)", "Area = (1/2) × base × height", "Area = (1/2) × 3 × 4 = 6 cm²"]
    }
  },
  {
    id: "apt-medium-017",
    text: "If sin θ = 3/5, find cos θ.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Trigonometry", "Pythagorean Identity"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Use sin²θ + cos²θ = 1", "(3/5)² + cos²θ = 1", "cos²θ = 16/25, so cos θ = ±4/5"]
    }
  },
  {
    id: "hr-easy-001",
    text: "Tell me about yourself.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Communication", "Presentation", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Brief background", "Relevant skills/experiences", "Career goals"]
    }
  },
  {
    id: "hr-easy-002",
    text: "Are you willing to relocate?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Flexibility", "Adaptability"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Clear 'Yes' or 'No'", "Honesty about preferences"]
    }
  },
  {
    id: "hr-easy-003",
    text: "What do you know about Infosys/TCS?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Research Skills", "Motivation"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Company domain", "Recent achievements", "Values and culture"]
    }
  },
  {
    id: "hr-easy-004",
    text: "How would your friends describe you?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Self-Awareness", "Interpersonal Skills"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention positive traits", "Provide brief examples"]
    }
  },
  {
    id: "hr-easy-005",
    text: "What motivates you?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Motivation", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Learning new skills", "Solving challenges", "Contributing to team success"]
    }
  },
  {
    id: "hr-easy-006",
    text: "What role do you prefer: leader or follower?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Teamwork", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Acknowledge both are important", "Express flexibility based on situation"]
    }
  },
  {
    id: "hr-easy-007",
    text: "What are your hobbies?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Work-Life Balance"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention a few hobbies", "Connect them to positive traits"]
    }
  },
  {
    id: "hr-easy-008",
    text: "What do you do in free time?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Work-Life Balance"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Mention productive activities", "Show well-rounded personality"]
    }
  },
  {
    id: "hr-easy-009",
    text: "What is your ideal work environment?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Cultural Fit", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Collaborative and supportive", "Values learning and growth", "Align with company environment"]
    }
  },
  {
    id: "hr-easy-010",
    text: "Have you taken any certification courses?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Proactiveness", "Learning Agility"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["List relevant certifications", "Explain what you learned"]
    }
  },
  {
    id: "hr-easy-011",
    text: "What is your learning style?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Self-Awareness", "Coachability"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Visual, auditory, kinesthetic, or mix", "Show eagerness to learn differently"]
    }
  },
  {
    id: "hr-easy-012",
    text: "What motivates you to improve?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Ambition", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Desire for responsibility", "Feedback from peers", "Achieving goals"]
    }
  },
  {
    id: "hr-easy-013",
    text: "Who is your role model?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Values", "Aspirations"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Name a person", "Explain admirable qualities", "How you incorporate them"]
    }
  },
  {
    id: "hr-easy-014",
    text: "What was your favorite subject?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Personality", "Interests"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Name the subject", "Explain why you enjoyed it"]
    }
  },
  {
    id: "hr-easy-015",
    text: "Describe your communication style.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Communication", "Self-Awareness"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Clarity and conciseness", "Active listening", "Adaptability to audiences"]
    }
  },
  {
    id: "hr-easy-016",
    text: "What are your expectations from this role?",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Motivation", "Career Goals"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Growth opportunities", "Meaningful contribution", "Supportive team environment"]
    }
  },
  {
    id: "hr-easy-017",
    text: "Describe work-life balance.",
    type: "HR",
    difficulty: "Easy",
    skillsEvaluated: ["Time Management", "Professionalism"],
    metadata: {
      expectedAnswerLength: 75,
      keyPoints: ["Prioritizing tasks", "Being focused at work", "Personal time to recharge"]
    }
  },

  // HR Medium Questions (25)
  {
    id: "hr-medium-001",
    text: "Why do you want to join Infosys/TCS?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Motivation", "Company Interest", "Cultural Fit"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Align career goals with company vision", "Mention specific projects/values", "Show genuine enthusiasm"]
    }
  },
  {
    id: "hr-medium-002",
    text: "What are your strengths and weaknesses?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Honesty", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Relevant strengths with examples", "Genuine weakness and improvement steps"]
    }
  },
  {
    id: "hr-medium-003",
    text: "Where do you see yourself in 5 years?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Ambition", "Career Planning"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Growth within company", "Realistic career goals", "Connect goals to role"]
    }
  },
  {
    id: "hr-medium-004",
    text: "Describe a situation where you showed leadership.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Leadership", "Problem-Solving", "Initiative"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Focus on specific actions and outcome"]
    }
  },
  {
    id: "hr-medium-005",
    text: "How do you handle failure?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Resilience", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Acknowledge failure", "Focus on lessons learned", "Applied learning example"]
    }
  },
  {
    id: "hr-medium-006",
    text: "Give an example of teamwork.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Teamwork", "Collaboration", "Communication"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Highlight specific contribution to team success"]
    }
  },
  {
    id: "hr-medium-007",
    text: "What is your salary expectation?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Negotiation", "Professionalism"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Researched reasonable range", "Express flexibility", "Value overall opportunity"]
    }
  },
  {
    id: "hr-medium-008",
    text: "Describe a challenge you overcame.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Problem-Solving", "Resilience"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Clearly define challenge", "Explain resolution steps"]
    }
  },
  {
    id: "hr-medium-009",
    text: "How do you prioritize tasks?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Time Management", "Organizational Skills"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Mention Eisenhower Matrix", "Communicate with stakeholders for priorities"]
    }
  },
  {
    id: "hr-medium-010",
    text: "Why should we hire you?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Persuasion", "Value Proposition", "Confidence"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Match skills to job description", "Highlight unique strengths", "Show company enthusiasm"]
    }
  },
  {
    id: "hr-medium-011",
    text: "What is your biggest achievement?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Achievement Orientation", "Confidence"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Choose relevant achievement", "Use STAR method to explain"]
    }
  },
  {
    id: "hr-medium-012",
    text: "How do you handle criticism?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Coachability", "Emotional Intelligence"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["View as constructive feedback", "Listen actively", "Example of applying feedback"]
    }
  },
  {
    id: "hr-medium-013",
    text: "How do you handle stress?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Stress Management", "Resilience"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Acknowledge stress happens", "Healthy coping mechanisms", "Prioritization and breaks"]
    }
  },
  {
    id: "hr-medium-014",
    text: "Tell me about a time you managed conflict.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Conflict Resolution", "Interpersonal Skills"],
    metadata: {
      expectedAnswerLength: 180,
      keyPoints: ["Use STAR method", "Listen to all sides", "Find mutually agreeable solution"]
    }
  },
  {
    id: "hr-medium-015",
    text: "How do you ensure deadlines are met?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Time Management", "Reliability"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Break down large tasks", "Set personal milestones", "Communicate proactively about delays"]
    }
  },
  {
    id: "hr-medium-016",
    text: "How do you stay updated on technology?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Learning Agility", "Proactiveness"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Tech blogs and courses", "Personal projects", "Show genuine curiosity"]
    }
  },
  {
    id: "hr-medium-017",
    text: "What are your views on diversity?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Teamwork", "Cultural Fit"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Express positive view", "Benefits like different perspectives", "Innovation through diversity"]
    }
  },
  {
    id: "hr-medium-018",
    text: "How do you handle monotonous work?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Discipline", "Attitude"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Focus on task importance", "Find efficiency improvements", "Maintain positive attitude"]
    }
  },
  {
    id: "hr-medium-019",
    text: "Describe your adaptability.",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Adaptability", "Flexibility"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Example of adapting to change", "Positive response", "Successful outcome"]
    }
  },
  {
    id: "hr-medium-020",
    text: "How do you deal with changes in project plans?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Adaptability", "Communication"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Stay calm and understand reasons", "Communicate with team to realign", "Show flexible attitude"]
    }
  },
  {
    id: "hr-medium-021",
    text: "How do you evaluate your work?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Quality Orientation"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Compare against requirements", "Seek feedback from peers", "Reflect on lessons learned"]
    }
  },
  {
    id: "hr-medium-022",
    text: "How do you respond to feedback and criticism?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Coachability", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Listen actively", "Thank for feedback", "Ask clarifying questions and improve"]
    }
  },
  {
    id: "hr-medium-023",
    text: "What is your proudest moment?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Achievement Orientation"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Choose specific relevant achievement", "Explain context and why proud"]
    }
  },
  {
    id: "hr-medium-024",
    text: "What skills would you like to improve?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Self-Awareness", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Genuine area for development", "Steps already taking to improve"]
    }
  },
  {
    id: "hr-medium-025",
    text: "What interests you about this job?",
    type: "HR",
    difficulty: "Medium",
    skillsEvaluated: ["Motivation", "Company Interest"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Connect job responsibilities to skills", "How it fits career goals"]
    }
  },

  // HR Hard Questions (6)
  {
    id: "hr-hard-001",
    text: "What would you do if not selected?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Resilience", "Professionalism", "Growth Mindset"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Express disappointment professionally", "Ask for feedback", "Plan to continue improving"]
    }
  },
  {
    id: "hr-hard-002",
    text: "Describe an ethical dilemma you faced.",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Integrity", "Ethics", "Decision Making"],
    metadata: {
      expectedAnswerLength: 240,
      keyPoints: ["Clearly describe situation", "Explain thought process", "Justify action and outcome"]
    }
  },
  {
    id: "hr-hard-003",
    text: "Tell about an unsuccessful project.",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Accountability", "Learning from Failure"],
    metadata: {
      expectedAnswerLength: 200,
      keyPoints: ["Take ownership of role", "Focus on lessons learned", "Avoid blaming others"]
    }
  },
  {
    id: "hr-hard-004",
    text: "What would you change about your education?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Self-Awareness", "Reflection"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Focus on gaining practical experience", "Avoid being overly negative about education"]
    }
  },
  {
    id: "hr-hard-005",
    text: "What will you do if offered a higher salary elsewhere?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Loyalty", "Motivation", "Career Values"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Emphasize non-monetary factors", "Reiterate interest in this company"]
    }
  },
  {
    id: "hr-hard-006",
    text: "What would you do differently in college?",
    type: "HR",
    difficulty: "Hard",
    skillsEvaluated: ["Self-Awareness", "Reflection"],
    metadata: {
      expectedAnswerLength: 150,
      keyPoints: ["Mention seeking more internships", "Focus on practical projects", "Show continuous improvement mindset"]
    }
  },

  // ================================
  // TECHNICAL QUESTIONS (42 total)
  // ================================
  
  // Technical Easy Questions (42)
  {
    id: "tech-easy-001",
    text: "What is a pointer? How does it differ from a reference variable?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["C++ Fundamentals", "Memory Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Pointer stores memory address", "Reference is alias for variable", "Pointers can be null/reassigned"],
      industry: "Software Development"
    }
  },
  {
    id: "tech-easy-002",
    text: "Explain the difference between array and linked list.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Memory Management"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Array: contiguous memory, O(1) access", "Linked list: non-contiguous, O(n) access", "Array fixed size, linked list dynamic"]
    }
  },
  {
    id: "tech-easy-003",
    text: "What is the difference between stack and heap memory?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Memory Management", "System Architecture"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Stack: automatic allocation, LIFO", "Heap: manual allocation, slower access", "Stack for local variables, heap for dynamic allocation"]
    }
  },
  {
    id: "tech-easy-004",
    text: "Explain the concept of recursion with an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Logic", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Function calling itself", "Base condition to stop", "Example: factorial, fibonacci"]
    }
  },
  {
    id: "tech-easy-005",
    text: "What is the difference between HTTP and HTTPS?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Technologies", "Security"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["HTTP: plain text transmission", "HTTPS: encrypted with SSL/TLS", "HTTPS more secure for sensitive data"]
    }
  },
  {
    id: "tech-easy-006",
    text: "What is an algorithm? Give an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Algorithm Design", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Step-by-step procedure to solve problem", "Example: sorting, searching", "Should be finite and well-defined"]
    }
  },
  {
    id: "tech-easy-007",
    text: "Explain what is Object-Oriented Programming (OOP).",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Paradigms"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Programming paradigm based on objects", "Encapsulation, Inheritance, Polymorphism", "Real-world modeling approach"]
    }
  },
  {
    id: "tech-easy-008",
    text: "What is a database? What are different types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Concepts", "Data Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Organized collection of data", "Relational, NoSQL, Graph databases", "Used for data storage and retrieval"]
    }
  },
  {
    id: "tech-easy-009",
    text: "What is the difference between SQL and NoSQL?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Technologies", "Data Management"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["SQL: structured, ACID properties", "NoSQL: flexible schema, horizontal scaling", "Use cases differ based on requirements"]
    }
  },
  {
    id: "tech-easy-010",
    text: "What is a compiler? How is it different from an interpreter?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["System Software", "Programming Languages"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Compiler: translates entire code to machine code", "Interpreter: executes code line by line", "Compiler faster execution, interpreter easier debugging"]
    }
  },
  {
    id: "tech-easy-011",
    text: "What is a variable? What are different data types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Fundamentals", "Data Types"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Named storage location for data", "int, float, char, boolean", "Different types for different kinds of data"]
    }
  },
  {
    id: "tech-easy-012",
    text: "Explain the concept of loops with examples.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Logic", "Control Structures"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Repeat code block multiple times", "for, while, do-while loops", "Used for iteration and repetitive tasks"]
    }
  },
  {
    id: "tech-easy-013",
    text: "What is an operating system? What are its functions?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Operating Systems", "System Software"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Interface between hardware and software", "Memory management, process scheduling", "File system management, device drivers"]
    }
  },
  {
    id: "tech-easy-014",
    text: "What is the difference between linear and binary search?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Algorithms", "Search Techniques"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Linear: sequential search O(n)", "Binary: divide and conquer O(log n)", "Binary requires sorted array"]
    }
  },
  {
    id: "tech-easy-015",
    text: "What is a function? Why do we use functions?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Programming Concepts", "Code Organization"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Reusable block of code", "Modularity and code reuse", "Parameters and return values"]
    }
  },
  {
    id: "tech-easy-016",
    text: "Explain what is a network? What are its types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Networking Concepts", "Communication"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Connected devices for communication", "LAN, WAN, MAN types", "Enables resource sharing and communication"]
    }
  },
  {
    id: "tech-easy-017",
    text: "What is software testing? Why is it important?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Quality", "Testing Concepts"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Process of evaluating software", "Find bugs and ensure quality", "Prevents defects in production"]
    }
  },
  {
    id: "tech-easy-018",
    text: "What is the difference between hardware and software?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Computer Fundamentals", "System Components"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Hardware: physical components", "Software: programs and instructions", "Both work together for computing"]
    }
  },
  {
    id: "tech-easy-019",
    text: "What is a class and object in programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Fundamentals"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Class: blueprint for objects", "Object: instance of a class", "Class defines properties and methods"]
    }
  },
  {
    id: "tech-easy-020",
    text: "Explain what is encapsulation in OOP.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Principles", "Data Security"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Bundling data and methods together", "Data hiding and access control", "Private, public, protected access modifiers"]
    }
  },
  {
    id: "tech-easy-021",
    text: "What is inheritance in Object-Oriented Programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Code Reusability"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Child class inherits from parent", "Code reusability and hierarchy", "IS-A relationship between classes"]
    }
  },
  {
    id: "tech-easy-022",
    text: "What is polymorphism? Give an example.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Programming Flexibility"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["One interface, multiple implementations", "Method overloading and overriding", "Runtime and compile-time polymorphism"]
    }
  },
  {
    id: "tech-easy-023",
    text: "What is abstraction in programming?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Principles", "Design Concepts"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Hiding implementation details", "Focus on what object does, not how", "Abstract classes and interfaces"]
    }
  },
  {
    id: "tech-easy-024",
    text: "What is a constructor? What are its types?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Object Initialization"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Special method to initialize objects", "Default, parameterized, copy constructors", "Called automatically when object created"]
    }
  },
  {
    id: "tech-easy-025",
    text: "What is the difference between method overloading and overriding?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["OOP Concepts", "Polymorphism"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Overloading: same name, different parameters", "Overriding: same signature in child class", "Overloading compile-time, overriding runtime"]
    }
  },
  {
    id: "tech-easy-026",
    text: "What is a data structure? Name some common ones.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Way to organize and store data", "Array, stack, queue, tree, graph", "Choose based on operation requirements"]
    }
  },
  {
    id: "tech-easy-027",
    text: "Explain what is a stack data structure.",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "LIFO Operations"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Last In First Out (LIFO)", "Push and pop operations", "Used in function calls, expression evaluation"]
    }
  },
  {
    id: "tech-easy-028",
    text: "What is a queue data structure?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "FIFO Operations"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["First In First Out (FIFO)", "Enqueue and dequeue operations", "Used in scheduling, breadth-first search"]
    }
  },
  {
    id: "tech-easy-029",
    text: "What is the difference between linear and non-linear data structures?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Data Structures", "Organization Concepts"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Linear: sequential arrangement", "Non-linear: hierarchical arrangement", "Examples: array vs tree"]
    }
  },
  {
    id: "tech-easy-030",
    text: "What is a binary tree?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Tree Structures", "Hierarchical Data"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Tree with at most 2 children per node", "Left and right child nodes", "Used for searching and sorting"]
    }
  },
  {
    id: "tech-easy-031",
    text: "What is the difference between primary key and foreign key?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Concepts", "Data Integrity"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Primary key: unique identifier", "Foreign key: reference to another table", "Primary key cannot be null"]
    }
  },
  {
    id: "tech-easy-032",
    text: "What is normalization in databases?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Database Design", "Data Organization"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Process to reduce data redundancy", "Organize data into tables", "1NF, 2NF, 3NF normal forms"]
    }
  },
  {
    id: "tech-easy-033",
    text: "What is HTML? What does it stand for?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Markup Languages"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["HyperText Markup Language", "Structure and content of web pages", "Uses tags to define elements"]
    }
  },
  {
    id: "tech-easy-034",
    text: "What is CSS? What is its purpose?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Styling"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Cascading Style Sheets", "Controls appearance and layout", "Separates content from presentation"]
    }
  },
  {
    id: "tech-easy-035",
    text: "What is JavaScript? What can you do with it?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "Programming Languages"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Client-side scripting language", "Interactive web pages", "Now used for server-side too (Node.js)"]
    }
  },
  {
    id: "tech-easy-036",
    text: "What is the difference between GET and POST methods?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Web Development", "HTTP Methods"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["GET: retrieve data, visible in URL", "POST: send data, hidden in body", "GET idempotent, POST not idempotent"]
    }
  },
  {
    id: "tech-easy-037",
    text: "What is an IP address?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Networking", "Internet Protocols"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Unique identifier for devices", "IPv4 and IPv6 versions", "Used for network communication"]
    }
  },
  {
    id: "tech-easy-038",
    text: "What is cloud computing?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Cloud Technologies", "Modern Computing"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["On-demand computing resources", "IaaS, PaaS, SaaS models", "Scalability and cost-effectiveness"]
    }
  },
  {
    id: "tech-easy-039",
    text: "What is machine learning?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["AI/ML Concepts", "Data Analysis"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Algorithms learn from data", "Supervised, unsupervised learning", "Pattern recognition and prediction"]
    }
  },
  {
    id: "tech-easy-040",
    text: "What is artificial intelligence?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["AI Concepts", "Technology Trends"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Machines performing intelligent tasks", "Problem solving and decision making", "ML, NLP, computer vision applications"]
    }
  },
  {
    id: "tech-easy-041",
    text: "What is version control? Why is it important?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Development", "Code Management"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Track changes in code", "Collaboration and backup", "Git, SVN are popular tools"]
    }
  },
  {
    id: "tech-easy-042",
    text: "What is an API? How is it used?",
    type: "Technical",
    difficulty: "Easy",
    skillsEvaluated: ["Software Integration", "Communication Protocols"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Application Programming Interface", "Allows software communication", "REST, GraphQL are common types"]
    }
  },

  // ================================
  // APTITUDE QUESTIONS (67 total)
  // ================================
  
  // Aptitude Easy Questions (25)
  {
    id: "apt-easy-001",
    text: "If 20% of a number is 60, what is the number?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Quantitative Analysis", "Percentages"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Equation: 0.20 * x = 60", "Solve for x", "Answer: 300"]
    }
  },
  {
    id: "apt-easy-002",
    text: "In a class, 35% are girls, rest boys. If there are 21 girls, how many students?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Problem-Solving"],
    metadata: {
      expectedAnswerLength: 45,
      keyPoints: ["Equation: 0.35 * Total = 21", "Solve for Total", "Answer: 60"]
    }
  },
  {
    id: "apt-easy-003",
    text: "Find the simple interest on Rs. 5000 at 8% per annum for 3 years.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Simple Interest", "Mathematical Calculations"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Formula: SI = PRT/100", "SI = 5000 × 8 × 3 / 100", "Answer: Rs. 1200"]
    }
  },
  {
    id: "apt-easy-004",
    text: "A train travels 240 km in 3 hours. What is its speed?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Speed Time Distance", "Basic Calculations"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Formula: Speed = Distance/Time", "Speed = 240/3", "Answer: 80 km/h"]
    }
  },
  {
    id: "apt-easy-005",
    text: "If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Ratios", "Proportions"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Ratio 3:2 means 3x boys, 2x girls", "3x = 15, so x = 5", "Girls = 2x = 10"]
    }
  },
  {
    id: "apt-easy-006",
    text: "What is 25% of 80?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Mental Math"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["25% = 1/4", "25% of 80 = 80/4", "Answer: 20"]
    }
  },
  {
    id: "apt-easy-007",
    text: "Find the average of 12, 18, 24, 30.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Averages", "Arithmetic"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Sum = 12 + 18 + 24 + 30 = 84", "Average = Sum/Count = 84/4", "Answer: 21"]
    }
  },
  {
    id: "apt-easy-008",
    text: "If a product costs Rs. 100 and is sold at 20% profit, what is the selling price?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Profit Loss", "Percentages"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Profit = 20% of 100 = 20", "Selling Price = Cost + Profit", "Answer: Rs. 120"]
    }
  },
  {
    id: "apt-easy-009",
    text: "Complete the series: 2, 4, 8, 16, __?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Number Series", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Each term is double the previous", "Pattern: ×2", "Answer: 32"]
    }
  },
  {
    id: "apt-easy-010",
    text: "If today is Wednesday, what day will it be after 10 days?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Calendar", "Logical Reasoning"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["10 days = 1 week + 3 days", "Wednesday + 3 days", "Answer: Saturday"]
    }
  },
  {
    id: "apt-easy-011",
    text: "Find the next number: 5, 10, 15, 20, __?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Arithmetic Progression", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Common difference = 5", "Add 5 to last term", "Answer: 25"]
    }
  },
  {
    id: "apt-easy-012",
    text: "What is 15% of 200?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Mental Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["15% = 15/100", "15% of 200 = (15/100) × 200", "Answer: 30"]
    }
  },
  {
    id: "apt-easy-013",
    text: "If 5 pens cost Rs. 50, what is the cost of 8 pens?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Unitary Method", "Proportions"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Cost of 1 pen = 50/5 = 10", "Cost of 8 pens = 8 × 10", "Answer: Rs. 80"]
    }
  },
  {
    id: "apt-easy-014",
    text: "Find the area of a rectangle with length 8 cm and breadth 5 cm.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Geometry", "Area Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Area = length × breadth", "Area = 8 × 5", "Answer: 40 cm²"]
    }
  },
  {
    id: "apt-easy-015",
    text: "What is the perimeter of a square with side 6 cm?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Geometry", "Perimeter"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Perimeter = 4 × side", "Perimeter = 4 × 6", "Answer: 24 cm"]
    }
  },
  {
    id: "apt-easy-016",
    text: "If x + 5 = 12, find the value of x.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Algebra", "Equation Solving"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["x + 5 = 12", "x = 12 - 5", "Answer: x = 7"]
    }
  },
  {
    id: "apt-easy-017",
    text: "Convert 0.75 to a fraction.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Fractions", "Decimal Conversion"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["0.75 = 75/100", "Simplify by dividing by 25", "Answer: 3/4"]
    }
  },
  {
    id: "apt-easy-018",
    text: "What is 2³ (2 to the power 3)?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Exponents", "Powers"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["2³ = 2 × 2 × 2", "Calculate step by step", "Answer: 8"]
    }
  },
  {
    id: "apt-easy-019",
    text: "Find the LCM of 4 and 6.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["LCM", "Number Theory"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Multiples of 4: 4, 8, 12, 16...", "Multiples of 6: 6, 12, 18...", "Answer: 12"]
    }
  },
  {
    id: "apt-easy-020",
    text: "Find the HCF of 12 and 18.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["HCF", "Number Theory"],
    metadata: {
      expectedAnswerLength: 35,
      keyPoints: ["Factors of 12: 1, 2, 3, 4, 6, 12", "Factors of 18: 1, 2, 3, 6, 9, 18", "Answer: 6"]
    }
  },
  {
    id: "apt-easy-021",
    text: "If a = 3 and b = 4, find a² + b².",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Algebra", "Substitution"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["a² = 3² = 9", "b² = 4² = 16", "Answer: 9 + 16 = 25"]
    }
  },
  {
    id: "apt-easy-022",
    text: "What is 1/2 + 1/4?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Fractions", "Addition"],
    metadata: {
      expectedAnswerLength: 30,
      keyPoints: ["Convert to common denominator", "1/2 = 2/4", "2/4 + 1/4 = 3/4"]
    }
  },
  {
    id: "apt-easy-023",
    text: "Round 47.6 to the nearest whole number.",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Rounding", "Approximation"],
    metadata: {
      expectedAnswerLength: 20,
      keyPoints: ["Decimal part is 0.6", "0.6 > 0.5, so round up", "Answer: 48"]
    }
  },
  {
    id: "apt-easy-024",
    text: "If 12 apples cost Rs. 36, what is the cost per apple?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Unit Rate", "Division"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["Cost per apple = Total cost / Number", "Cost = 36/12", "Answer: Rs. 3"]
    }
  },
  {
    id: "apt-easy-025",
    text: "What is 60% of 150?",
    type: "Aptitude",
    difficulty: "Easy",
    skillsEvaluated: ["Percentages", "Calculation"],
    metadata: {
      expectedAnswerLength: 25,
      keyPoints: ["60% = 60/100 = 0.6", "60% of 150 = 0.6 × 150", "Answer: 90"]
    }
  },

  // Aptitude Medium Questions (31)
  {
    id: "apt-medium-001",
    text: "A man buys an article for Rs. 80 and sells it for Rs. 100. Find his profit percentage.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Profit Loss", "Percentage Calculation"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Profit = SP - CP = 100 - 80 = 20", "Profit% = (Profit/CP) × 100", "Answer: 25%"]
    }
  },
  {
    id: "apt-medium-002",
    text: "Find the compound interest on Rs. 10,000 at 10% per annum for 2 years.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Compound Interest", "Financial Mathematics"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Amount = P(1 + R/100)^n", "A = 10000(1.1)² = 12100", "CI = A - P = 2100"]
    }
  },
  {
    id: "apt-medium-003",
    text: "Two pipes can fill a tank in 6 and 8 hours respectively. How long to fill together?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Time and Work", "Rate Problems"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Rate 1 = 1/6 tank/hour", "Rate 2 = 1/8 tank/hour", "Combined = 1/6 + 1/8 = 7/24", "Time = 24/7 hours"]
    }
  },
  {
    id: "apt-medium-004",
    text: "A car travels first 100 km at 50 km/h and next 100 km at 40 km/h. Find average speed.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Average Speed", "Time Distance"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Time1 = 100/50 = 2 hours", "Time2 = 100/40 = 2.5 hours", "Avg speed = 200/4.5 = 44.44 km/h"]
    }
  },
  {
    id: "apt-medium-005",
    text: "Find the next term in the series: 2, 6, 18, 54, __?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometric Series", "Pattern Recognition"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Each term is multiplied by 3", "Pattern: ×3", "54 × 3 = 162"]
    }
  },
  {
    id: "apt-medium-006",
    text: "In what ratio should tea at Rs. 60/kg be mixed with tea at Rs. 80/kg to get mixture at Rs. 70/kg?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Mixture and Alligation", "Ratio Problems"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Use alligation method", "Difference from mean: 10 and 10", "Ratio = 10:10 = 1:1"]
    }
  },
  {
    id: "apt-medium-007",
    text: "A sum becomes Rs. 1320 in 2 years and Rs. 1392 in 3 years at simple interest. Find the principal.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Simple Interest", "Problem Solving"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["SI for 1 year = 1392 - 1320 = 72", "SI for 2 years = 144", "Principal = 1320 - 144 = 1176"]
    }
  },
  {
    id: "apt-medium-008",
    text: "If the price of sugar increases by 25%, by what percent should consumption be reduced to keep expenditure same?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Percentage Changes", "Inverse Variation"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["New price = 125% of original", "Reduction = (25/125) × 100", "Answer: 20%"]
    }
  },
  {
    id: "apt-medium-009",
    text: "A clock gains 2 minutes every hour. If it shows 10:00 AM when the correct time is 9:00 AM, what will it show when the correct time is 2:00 PM?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Clock Problems", "Time Calculation"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Clock is 1 hour fast initially", "From 9 AM to 2 PM = 5 hours", "Gains 2×5 = 10 more minutes", "Shows 3:10 PM"]
    }
  },
  {
    id: "apt-medium-010",
    text: "Find the number of ways to arrange the letters of the word MATHEMATICS.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Permutations", "Combinatorics"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Total letters = 11", "M appears 2 times, A appears 2 times, T appears 2 times", "Answer: 11!/(2!×2!×2!) = 4,989,600"]
    }
  },
  {
    id: "apt-medium-011",
    text: "In how many ways can 5 people be seated in a row if 2 particular people must sit together?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Permutations", "Conditional Arrangements"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Treat 2 people as 1 unit", "4 units can be arranged in 4! ways", "2 people in unit can be arranged in 2! ways", "Answer: 4! × 2! = 48"]
    }
  },
  {
    id: "apt-medium-012",
    text: "A boat takes 2 hours to go 8 km downstream and 4 hours to go 8 km upstream. Find the speed of the boat in still water.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Boats and Streams", "Relative Speed"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Downstream speed = 8/2 = 4 km/h", "Upstream speed = 8/4 = 2 km/h", "Boat speed = (4+2)/2 = 3 km/h"]
    }
  },
  {
    id: "apt-medium-013",
    text: "If log₂ 8 = x, find the value of x.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Logarithms", "Exponentials"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["log₂ 8 = x means 2ˣ = 8", "2³ = 8", "Therefore x = 3"]
    }
  },
  {
    id: "apt-medium-014",
    text: "Find the sum of first 20 natural numbers.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Arithmetic Series", "Sum Formula"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Sum = n(n+1)/2", "Sum = 20(21)/2", "Answer: 210"]
    }
  },
  {
    id: "apt-medium-015",
    text: "A person invests Rs. 5000 at 8% simple interest and Rs. 3000 at 10% simple interest. Find total interest after 2 years.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Simple Interest", "Multiple Investments"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["SI₁ = 5000×8×2/100 = 800", "SI₂ = 3000×10×2/100 = 600", "Total = 800 + 600 = 1400"]
    }
  },
  {
    id: "apt-medium-016",
    text: "Find the area of a triangle with sides 3, 4, and 5 cm.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometry", "Heron's Formula"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["This is a right triangle (3²+4²=5²)", "Area = (1/2) × base × height", "Area = (1/2) × 3 × 4 = 6 cm²"]
    }
  },
    {
    id: "apt-medium-017",
    text: "If sin θ = 3/5, find cos θ.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Trigonometry", "Pythagorean Identity"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Use sin²θ + cos²θ = 1", "(3/5)² + cos²θ = 1", "cos²θ = 16/25, so cos θ = ±4/5"]
    }
  },
  {
    id: "apt-medium-018",
    text: "A shopkeeper marks his goods 40% above cost price but gives 20% discount. Find his profit percentage.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Profit Loss", "Discount Problems"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Marked Price = 140% of CP", "Selling Price = 80% of MP = 112% of CP", "Profit% = 12%"]
    }
  },
  {
    id: "apt-medium-019",
    text: "Find the probability of getting a sum of 8 when two dice are thrown.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Probability", "Combinatorics"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Favorable outcomes: (2,6), (3,5), (4,4), (5,3), (6,2)", "Total favorable = 5", "Probability = 5/36"]
    }
  },
  {
    id: "apt-medium-020",
    text: "A train 150m long crosses a platform 250m long in 20 seconds. Find the speed of the train.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Speed Distance Time", "Relative Motion"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Total distance = 150 + 250 = 400m", "Speed = 400/20 = 20 m/s", "Convert to km/h = 72 km/h"]
    }
  },
  {
    id: "apt-medium-021",
    text: "If 15 men can complete a work in 12 days, in how many days can 20 men complete the same work?",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Time and Work", "Inverse Proportion"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Total work = 15 × 12 = 180 man-days", "Time for 20 men = 180/20 = 9 days"]
    }
  },
  {
    id: "apt-medium-022",
    text: "Find the curved surface area of a cylinder with radius 7 cm and height 10 cm.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometry", "Surface Area"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Formula: 2πrh", "CSA = 2 × (22/7) × 7 × 10", "Answer: 440 cm²"]
    }
  },
  {
    id: "apt-medium-023",
    text: "A bag contains 5 red, 3 blue, and 2 green balls. Find probability of drawing a red ball.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Probability", "Basic Statistics"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["Total balls = 5 + 3 + 2 = 10", "Red balls = 5", "Probability = 5/10 = 1/2"]
    }
  },
  {
    id: "apt-medium-024",
    text: "If the diagonal of a square is 10√2 cm, find its area.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Geometry", "Square Properties"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Diagonal = side × √2", "10√2 = side × √2", "Side = 10 cm", "Area = 100 cm²"]
    }
  },
  {
    id: "apt-medium-025",
    text: "Find the value of x if 2^(x+1) = 32.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Exponentials", "Equation Solving"],
    metadata: {
      expectedAnswerLength: 40,
      keyPoints: ["32 = 2⁵", "2^(x+1) = 2⁵", "x + 1 = 5", "x = 4"]
    }
  },
  {
    id: "apt-medium-026",
    text: "A mixture contains milk and water in ratio 3:2. If 5 liters of water is added, the ratio becomes 3:3. Find initial quantity of mixture.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Mixture Problems", "Ratio Proportion"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Initial ratio 3:2, let quantities be 3x and 2x", "After adding water: 3x:(2x+5) = 3:3", "Solving: x = 5", "Initial mixture = 25 liters"]
    }
  },
  {
    id: "apt-medium-027",
    text: "Find the smallest number which when divided by 12, 15, 20 leaves remainder 3 in each case.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["LCM", "Number Theory"],
    metadata: {
      expectedAnswerLength: 70,
      keyPoints: ["Find LCM of 12, 15, 20", "LCM = 60", "Required number = 60 + 3 = 63"]
    }
  },
  {
    id: "apt-medium-028",
    text: "If cos A = 4/5, find the value of tan A.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Trigonometry", "Trigonometric Ratios"],
    metadata: {
      expectedAnswerLength: 60,
      keyPoints: ["Use sin²A + cos²A = 1", "sin A = 3/5 (taking positive value)", "tan A = sin A/cos A = 3/4"]
    }
  },
  {
    id: "apt-medium-029",
    text: "A person walks 15 km north, then 8 km east. Find his distance from starting point.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Coordinate Geometry", "Distance Formula"],
    metadata: {
      expectedAnswerLength: 50,
      keyPoints: ["Forms a right triangle", "Distance = √(15² + 8²)", "Distance = √(225 + 64) = √289 = 17 km"]
    }
  },
  {
    id: "apt-medium-030",
    text: "Find the sum of all two-digit numbers divisible by 3.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Arithmetic Progression", "Series Sum"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["First term a = 12, last term l = 99", "Common difference d = 3", "Number of terms n = 30", "Sum = n/2(a + l) = 1665"]
    }
  },
  {
    id: "apt-medium-031",
    text: "A retailer buys goods worth Rs. 1000 and sells 3/4 of it at 20% profit and remaining at 10% loss. Find overall profit or loss percentage.",
    type: "Aptitude",
    difficulty: "Medium",
    skillsEvaluated: ["Profit Loss", "Weighted Average"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["3/4 sold at 20% profit = 750 × 1.2 = 900", "1/4 sold at 10% loss = 250 × 0.9 = 225", "Total SP = 1125, CP = 1000", "Profit% = 12.5%"]
    }
  },

  // Aptitude Hard Questions (11)
  {
    id: "apt-hard-001",
    text: "A person borrowed Rs. 5000 at 12% compound interest. After 2 years he paid back Rs. 2500. What amount should he pay after 2 more years to clear the debt?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Compound Interest", "Partial Payments"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Amount after 2 years = 5000(1.12)² = 6272", "Remaining debt = 6272 - 2500 = 3772", "Amount after 2 more years = 3772(1.12)² = 4729.34"]
    }
  },
  {
    id: "apt-hard-002",
    text: "In a race of 1000m, A beats B by 100m and B beats C by 100m. By how much distance does A beat C?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Speed Ratios", "Relative Motion"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["When A covers 1000m, B covers 900m", "When B covers 1000m, C covers 900m", "When A covers 1000m, C covers (900×900)/1000 = 810m", "A beats C by 190m"]
    }
  },
  {
    id: "apt-hard-003",
    text: "A number when divided by 899 gives remainder 63. What remainder will same number give when divided by 29?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Number Theory", "Modular Arithmetic"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["Let number = 899k + 63", "899 = 31 × 29, so 899k ≡ 0 (mod 29)", "63 = 2 × 29 + 5", "Remainder when divided by 29 = 5"]
    }
  },
  {
    id: "apt-hard-004",
    text: "Three pipes A, B, C can fill a tank in 6, 8, 12 hours respectively. All are opened together but after 2 hours, C is closed. In how much more time will the tank be filled?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Time and Work", "Multiple Rates"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Combined rate of A,B,C = 1/6 + 1/8 + 1/12 = 9/24", "In 2 hours, work done = 2 × 9/24 = 3/4", "Remaining work = 1/4", "Rate of A+B = 1/6 + 1/8 = 7/24", "Time = (1/4)/(7/24) = 6/7 hours"]
    }
  },
  {
    id: "apt-hard-005",
    text: "A seller has 3 varieties of rice costing Rs. 20, Rs. 24, Rs. 30 per kg. In what ratio should he mix them to get a mixture worth Rs. 25 per kg?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Mixture and Alligation", "Three Components"],
    metadata: {
      expectedAnswerLength: 130,
      keyPoints: ["Let ratio be x:y:z for Rs.20, Rs.24, Rs.30 varieties", "20x + 24y + 30z = 25(x+y+z)", "Solving: x:y:z = 1:5:0 or other combinations", "One solution: 1:5:0 (mix Rs.20 and Rs.24 in ratio 1:5)"]
    }
  },
  {
    id: "apt-hard-006",
    text: "Find the number of rectangles that can be formed in a chessboard (8×8 grid).",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Combinatorics", "Grid Problems"],
    metadata: {
      expectedAnswerLength: 80,
      keyPoints: ["Choose 2 horizontal lines from 9 = C(9,2)", "Choose 2 vertical lines from 9 = C(9,2)", "Total rectangles = C(9,2) × C(9,2) = 36 × 36 = 1296"]
    }
  },
  {
    id: "apt-hard-007",
    text: "A hollow cylinder has external radius 10 cm, internal radius 6 cm and height 14 cm. Find its curved surface area.",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Mensuration", "Hollow Solids"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["External CSA = 2π(10)(14) = 280π", "Internal CSA = 2π(6)(14) = 168π", "Total CSA = 280π + 168π = 448π = 1408 cm²"]
    }
  },
  {
    id: "apt-hard-008",
    text: "In how many ways can the word ENGINEERING be arranged such that all E's come together?",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Permutations", "Conditional Arrangements"],
    metadata: {
      expectedAnswerLength: 110,
      keyPoints: ["ENGINEERING has 11 letters: E(3), N(3), G(2), I(1), R(1)", "Treat 3 E's as one unit", "9 units to arrange with N(3), G(2) repetitions", "Arrangements = 9!/(3!×2!) × 3! = 181440"]
    }
  },
  {
    id: "apt-hard-009",
    text: "A sum of money at compound interest amounts to Rs. 4624 in 2 years and Rs. 4913 in 3 years. Find the rate of interest.",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Compound Interest", "Rate Finding"],
    metadata: {
      expectedAnswerLength: 90,
      keyPoints: ["CI for 3rd year = 4913 - 4624 = 289", "Rate = (289/4624) × 100 = 6.25%", "Verify: P(1.0625)² = 4624"]
    }
  },
  {
    id: "apt-hard-010",
    text: "A person covers 1/3 of journey at 20 km/h, 1/3 at 30 km/h, and remaining at 60 km/h. Find average speed for entire journey.",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Average Speed", "Weighted Harmonic Mean"],
    metadata: {
      expectedAnswerLength: 100,
      keyPoints: ["Let total distance = 3d", "Time₁ = d/20, Time₂ = d/30, Time₃ = d/60", "Total time = d(1/20 + 1/30 + 1/60) = d(6/60) = d/10", "Average speed = 3d/(d/10) = 30 km/h"]
    }
  },
  {
    id: "apt-hard-011",
    text: "Find the largest number of 4 digits which when divided by 15, 25, 40 leaves remainders 7, 17, 32 respectively.",
    type: "Aptitude",
    difficulty: "Hard",
    skillsEvaluated: ["Number Theory", "Chinese Remainder Theorem"],
    metadata: {
      expectedAnswerLength: 120,
      keyPoints: ["Observe: remainder = divisor - 8 in each case", "Number = LCM(15,25,40) × k - 8", "LCM = 600", "Largest 4-digit number = 600×16 - 8 = 9592"]
    }
  }
]