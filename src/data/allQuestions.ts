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

  // ===================================
// APTITUDE QUESTIONS (100 total)
// ===================================

// ===================================
// BEGINNER LEVEL (EASY & WARM-UP) - 20 Questions
// ===================================
{
  id: "apt-easy-001",
  text: "If it’s raining, what logical conclusions can you make about people carrying umbrellas?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Logical Reasoning", "Deductive Reasoning"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["High probability they are using it for rain", "Correlation, not causation", "Could be for sun or fashion"]
  }
},
{
  id: "apt-easy-002",
  text: "Why can’t a coin ever land with both heads up?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Logical Reasoning", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 50,
    keyPoints: ["A coin has two distinct and opposite sides", "Heads and tails are mutually exclusive"]
  }
},
{
  id: "apt-easy-003",
  text: "You see a cup half-filled with water. Is it half full or half empty?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Perspective Taking", "Communication"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Both are factually correct", "Reveals an optimistic ('half full') or pessimistic ('half empty') perspective"]
  }
},
{
  id: "apt-easy-004",
  text: "If all apples are fruits and all fruits grow on trees, do all apples grow on trees?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Logical Reasoning", "Syllogism"],
  metadata: {
    expectedAnswerLength: 40,
    keyPoints: ["Yes", "This is a valid conclusion based on transitive logic"]
  }
},
{
  id: "apt-easy-005",
  text: "If A is taller than B and B is taller than C, who is the shortest?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Logical Reasoning", "Comparative Analysis"],
  metadata: {
    expectedAnswerLength: 20,
    keyPoints: ["C is the shortest", "Simple ordering and transitive relation"]
  }
},
{
  id: "apt-easy-006",
  text: "Why can’t a square be a circle?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Geometric Reasoning", "Definitional Logic"],
  metadata: {
    expectedAnswerLength: 60,
    keyPoints: ["They have fundamentally different properties", "Square has 4 straight sides and corners; a circle has none"]
  }
},
{
  id: "apt-easy-007",
  text: "If everyone in a room shakes hands with everyone else, how many handshakes occur when there are only 3 people?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Problem Solving", "Combinatorics"],
  metadata: {
    expectedAnswerLength: 50,
    keyPoints: ["Person 1 shakes 2 hands", "Person 2 shakes 1 remaining hand", "Total is 2 + 1 = 3 handshakes"]
  }
},
{
  id: "apt-easy-008",
  text: "If the sun rises in the east, can we conclude it will always rise there? Why or why not?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Inductive Reasoning", "Scientific Literacy"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Based on consistent past observation (inductive reasoning), yes", "Scientific reason: Earth's consistent rotation"]
  }
},
{
  id: "apt-easy-009",
  text: "Why is zero neither positive nor negative?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Mathematical Concepts", "Definitional Logic"],
  metadata: {
    expectedAnswerLength: 60,
    keyPoints: ["Zero is the origin point on the number line", "It separates positive and negative numbers"]
  }
},
{
  id: "apt-easy-010",
  text: "If 5 cats catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Rate Problems", "Logical Reasoning"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["One cat catches one mouse in 5 minutes", "So, one cat catches 20 mice in 100 minutes", "To catch 100 mice, you need 100/20 = 5 cats"]
  }
},
{
  id: "apt-easy-011",
  text: "If you flip a coin 100 times and get heads every time, what will the 101st flip most likely be?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Probability", "Gambler's Fallacy"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["The probability is still 50/50 for heads or tails", "Each coin flip is an independent event"]
  }
},
{
  id: "apt-easy-012",
  text: "Why do we say “All squares are rectangles, but not all rectangles are squares”?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Geometric Reasoning", "Logical Hierarchy"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["A square meets all rectangle criteria (4 right angles, opposite sides equal)", "A rectangle does not always meet the square's criteria (all 4 sides equal)"]
  }
},
{
  id: "apt-easy-013",
  text: "What does “Actions speak louder than words” mean in professional life?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Verbal Reasoning", "Professional Acumen"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["What you do is more important than what you say", "Demonstrating competence and reliability matters more than promises"]
  }
},
{
  id: "apt-easy-014",
  text: "“Practice makes perfect” — do you agree for communication skills too?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Interpretative Skills", "Personal Development"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Yes, consistent practice in speaking, listening, and writing improves communication", "Feedback is crucial for improvement"]
  }
},
{
  id: "apt-easy-015",
  text: "Explain “Honesty is the best policy” with an example from real life.",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Ethical Reasoning", "Communication"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Being truthful builds trust and long-term credibility", "Example: Admitting a mistake at work allows for a quick fix and shows accountability"]
  }
},
{
  id: "apt-easy-016",
  text: "“The early bird catches the worm” — what’s your interpretation?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Verbal Reasoning", "Proactivity"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Those who act early or are proactive have the best chance of success", "Seizing opportunities promptly"]
  }
},
{
  id: "apt-easy-017",
  text: "“Appearances can be deceptive.” How?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Critical Thinking", "Social Awareness"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Initial impressions are not always accurate", "A simple-looking problem can be complex; a confident person might be incompetent"]
  }
},
{
  id: "apt-easy-018",
  text: "“Failure is the stepping stone to success.” Do you agree?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Growth Mindset", "Resilience"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["Yes, failures provide valuable learning experiences", "Understanding what went wrong helps in future attempts"]
  }
},
{
  id: "apt-easy-019",
  text: "What’s the difference between hearing and listening?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Communication", "Active Listening"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["Hearing is a passive physical act of perceiving sound", "Listening is an active mental process of understanding and interpreting"]
  }
},
{
  id: "apt-easy-020",
  text: "Explain “Too many cooks spoil the broth.”",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Verbal Reasoning", "Teamwork"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Too many people working on one task without clear roles can lead to confusion, inefficiency, and a poor outcome"]
  }
},

// ===============================================
// INTERMEDIATE LEVEL (LOGICAL + INTERPRETATIVE) - 20 Questions
// ===============================================
{
  id: "apt-medium-001",
  text: "A man says, “Brothers and sisters, I have none, but that man’s father is my father’s son.” Who is “that man”?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Logical Reasoning", "Riddle Solving"],
  metadata: {
    expectedAnswerLength: 60,
    keyPoints: ["'My father's son' is the speaker himself", "So, 'that man's father' is the speaker", "That man is the speaker's son"]
  }
},
{
  id: "apt-medium-002",
  text: "A farmer has to cross a river with a wolf, a goat, and a cabbage. He has a boat that can only carry himself and one other item. The wolf cannot be left alone with the goat, and the goat cannot be left alone with the cabbage. How can he do it safely?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Problem Solving", "Algorithmic Thinking"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Take goat across", "Return alone", "Take wolf across", "Return with goat", "Take cabbage across", "Return alone", "Take goat across"]
  }
},
{
  id: "apt-medium-003",
  text: "You’re in a dark room with one match and a candle, a lamp, and a gas stove. What do you light first?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Lateral Thinking", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 30,
    keyPoints: ["You light the match first"]
  }
},
{
  id: "apt-medium-004",
  text: "You’re shown three switches outside a room and one bulb inside. You can only enter the room once. How will you find which switch controls the bulb?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Problem Solving", "Logical Deduction"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Turn switch 1 on for a minute, then turn it off", "Turn switch 2 on", "Enter the room", "If light is on, it's switch 2; if off but bulb is warm, it's switch 1; if off and cold, it's switch 3"]
  }
},
{
  id: "apt-medium-005",
  text: "A truck driver goes the wrong way on a one-way street but doesn’t break any law. How?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Lateral Thinking", "Riddle Solving"],
  metadata: {
    expectedAnswerLength: 30,
    keyPoints: ["The truck driver was walking, not driving"]
  }
},
{
  id: "apt-medium-006",
  text: "Two fathers and two sons went fishing. They caught three fish, yet each person took home one fish. How is that possible?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Lateral Thinking", "Riddle Solving"],
  metadata: {
    expectedAnswerLength: 60,
    keyPoints: ["There were only three people", "A grandfather (father), his son (father & son), and his grandson (son)"]
  }
},
{
  id: "apt-medium-007",
  text: "You have two ropes that each take 60 minutes to burn, but burn unevenly. How can you measure exactly 45 minutes?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Lateral Thinking", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Light Rope 1 at both ends and Rope 2 at one end", "Rope 1 burns out in 30 mins", "At that moment, light the other end of Rope 2", "Rope 2 will burn out in 15 more minutes (30+15=45)"]
  }
},
{
  id: "apt-medium-008",
  text: "There are 100 doors, all closed. In a series of passes, you visit every door, then every 2nd door, then every 3rd door, etc., toggling them. Which doors remain open at the end?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Mathematical Reasoning", "Pattern Recognition"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Doors that are toggled an odd number of times remain open", "Only perfect squares (1, 4, 9, 16...) have an odd number of factors"]
  }
},
{
  id: "apt-medium-009",
  text: "How can you make 6 by using three 2s?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Mathematical Creativity", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 20,
    keyPoints: ["2 + 2 + 2 = 6"]
  }
},
{
  id: "apt-medium-010",
  text: "A rooster lays an egg on a slanted roof. Which side will it roll down?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Attention to Detail", "Lateral Thinking"],
  metadata: {
    expectedAnswerLength: 30,
    keyPoints: ["Neither. Roosters don't lay eggs."]
  }
},
{
  id: "apt-medium-011",
  text: "There are 12 fish in a tank. 5 drown, 3 swim away, 4 remain. How many fish are left?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Lateral Thinking", "Attention to Detail"],
  metadata: {
    expectedAnswerLength: 60,
    keyPoints: ["12 fish are left. Fish can't drown, and they can't swim away from a tank."]
  }
},
{
  id: "apt-medium-012",
  text: "If you rearrange the letters in “LISTEN,” you get “SILENT.” What does that suggest about communication?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Interpretative Skills", "Communication"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["It suggests that listening is a silent, yet essential, part of effective communication"]
  }
},
{
  id: "apt-medium-013",
  text: "Interpret this statement: “If opportunity doesn’t knock, build a door.”",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Proactivity", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Don't wait passively for chances to come", "Be proactive and create your own opportunities"]
  }
},
{
  id: "apt-medium-014",
  text: "How is being proactive different from being reactive?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Behavioral Concepts", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Proactive is anticipating and acting in advance", "Reactive is waiting for something to happen and then responding", "Proactive creates control; reactive responds to circumstances"]
  }
},
{
  id: "apt-medium-015",
  text: "Explain the difference between efficiency and effectiveness with an example.",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Business Acumen", "Analytical Skills"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Effectiveness is doing the right thing (achieving the goal)", "Efficiency is doing things right (using minimum resources)", "Example: Building a flawless but unwanted product is efficient but not effective"]
  }
},
{
  id: "apt-medium-016",
  text: "“Time is money.” Do you agree or disagree? Why?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Critical Thinking", "Prioritization"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Agree in a professional context", "Time is a finite resource that can be used to generate value", "Wasted time is a wasted opportunity to be productive"]
  }
},
{
  id: "apt-medium-017",
  text: "“Where there’s a will, there’s a way.” Give an example.",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Motivation", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["If you are determined enough, you can find a solution to challenges", "Example: Someone learning a new skill online to switch careers despite having no formal degree"]
  }
},
{
  id: "apt-medium-018",
  text: "What’s your take on “Too much analysis leads to paralysis”?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Decision Making", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Overthinking a decision can prevent you from ever taking action", "It's important to gather enough data but also to know when to make a decision and move forward"]
  }
},
{
  id: "apt-medium-019",
  text: "Is luck more important than hard work? Why or why not?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Critical Thinking", "Growth Mindset"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Hard work is more important", "Hard work creates opportunities and prepares you to capitalize on luck when it appears", "Luck is unreliable; hard work is controllable"]
  }
},
{
  id: "apt-medium-020",
  text: "Can failure ever be considered progress?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Resilience", "Analytical Skills"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Yes, if you learn from it", "Failure provides data on what doesn't work, which is a key step toward finding what does", "It's progress in learning"]
  }
},

// ===============================================
// ADVANCED LEVEL (CRITICAL, ANALYTICAL & ETHICAL) - 20 Questions
// ===============================================
{
  id: "apt-hard-001",
  text: "You’re leading a team and two members disagree. How do you handle it?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Conflict Resolution", "Leadership", "Communication"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["Facilitate a discussion to understand both viewpoints", "Identify the root cause and focus on common goals", "Mediate a compromise or make a data-driven decision", "Ensure professionalism is maintained"]
  }
},
{
  id: "apt-hard-002",
  text: "You’re given a tight deadline and your teammate isn’t contributing. What’s your approach?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Problem Solving", "Teamwork", "Communication"],
  metadata: {
    expectedAnswerLength: 160,
    keyPoints: ["Communicate privately to understand the issue (e.g., confusion, overload)", "Offer support or clarify expectations", "If unresolved, escalate to the manager with facts, focusing on project risk"]
  }
},
{
  id: "apt-hard-003",
  text: "You’re asked a question in an interview you don’t know. What should you do?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Honesty", "Problem Solving", "Communication"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Be honest about not knowing the exact answer", "Explain your logical approach to finding the answer", "Mention related knowledge you do have", "Show enthusiasm to learn"]
  }
},
{
  id: "apt-hard-004",
  text: "A project you worked hard on fails. How do you explain it to your manager?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Accountability", "Analytical Skills", "Communication"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["Take ownership of the outcome", "Present a factual analysis of what went wrong", "Highlight key learnings", "Propose concrete steps to prevent similar failures in the future"]
  }
},
{
  id: "apt-hard-005",
  text: "You’re offered two jobs — one with high pay and one with better learning. Which do you choose and why?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Decision Making", "Career Planning", "Self-Awareness"],
  metadata: {
    expectedAnswerLength: 160,
    keyPoints: ["Depends on career stage and personal priorities", "Early career might favor learning for long-term growth", "Later career or financial needs might favor high pay", "Justify the choice based on a logical plan"]
  }
},
{
  id: "apt-hard-006",
  text: "How would you convince your teammate to accept your idea logically?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Persuasion", "Communication", "Logical Reasoning"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Present the idea with clear data and evidence", "Align the idea with team goals and objectives", "Address their potential concerns proactively", "Listen to their feedback openly"]
  }
},
{
  id: "apt-hard-007",
  text: "How do you plan your day when you have multiple priorities?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Time Management", "Prioritization", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Use a framework like the Eisenhower Matrix (Urgent/Important)", "Tackle high-impact tasks first", "Break large tasks into smaller steps", "Block out time for focused work"]
  }
},
{
  id: "apt-hard-008",
  text: "You’re asked to give feedback to a senior. How will you do it politely?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Professionalism", "Tact"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["Ask for permission to share feedback", "Be specific and fact-based, not personal", "Frame it constructively, focusing on positive outcomes", "Deliver it in a private setting"]
  }
},
{
  id: "apt-hard-009",
  text: "How would you explain a technical concept to a non-technical person?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Empathy", "Simplification"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Use simple analogies and relatable examples", "Avoid jargon", "Focus on the 'why' and the benefits, not just the 'how'", "Check for understanding as you go"]
  }
},
{
  id: "apt-hard-010",
  text: "If you were organizing an event and the speaker canceled last minute, what would you do?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Problem Solving", "Crisis Management", "Adaptability"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["Inform stakeholders immediately", "Activate a backup plan (e.g., another speaker, panel discussion)", "Communicate transparently with the audience", "Focus on delivering value despite the setback"]
  }
},
{
  id: "apt-hard-011",
  text: "You notice a mistake in your report just before submission. What’s your response?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Integrity", "Accountability", "Time Management"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["Immediately inform your manager about the mistake and the potential delay", "Correct the error as quickly as possible", "Prioritize accuracy over meeting the exact deadline if necessary"]
  }
},
{
  id: "apt-hard-012",
  text: "How would you handle criticism in a meeting?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Emotional Intelligence", "Professionalism", "Resilience"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["Listen without becoming defensive", "Thank the person for their perspective", "Ask clarifying questions to understand the feedback", "If valid, acknowledge it and commit to improvement"]
  }
},
{
  id: "apt-hard-013",
  text: "You’re assigned a topic you know nothing about. How will you prepare quickly?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Research Skills", "Adaptability", "Learning Agility"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Identify credible sources for foundational knowledge", "Consult with subject matter experts", "Focus on understanding the key concepts and objectives first", "Use the 80/20 rule to learn the most important parts quickly"]
  }
},
{
  id: "apt-hard-014",
  text: "How would you explain a complex idea simply?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Simplification", "Clarity"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Start with the core message", "Use an analogy or metaphor", "Break it down into 3 key parts", "Avoid jargon and unnecessary details"]
  }
},
{
  id: "apt-hard-015",
  text: "If two team members both want to lead a task, how do you decide?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Leadership", "Decision Making", "Team Management"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Assess their skills and experience against the task's needs", "Consider who would benefit more from the development opportunity", "Explore a co-leadership possibility if feasible", "Communicate the decision and rationale clearly"]
  }
},
{
  id: "apt-hard-016",
  text: "You find your colleague spreading false information. How do you address it?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Integrity", "Conflict Resolution", "Communication"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["Address the colleague privately and non-confrontationally", "Present the correct information with evidence", "Assume positive intent first (they may be misinformed)", "If behavior persists or is malicious, escalate to management"]
  }
},
{
  id: "apt-hard-017",
  text: "If your opinion is ignored in a group, what’s your next step?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Assertiveness", "Communication", "Resilience"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Re-evaluate how the opinion was presented", "Try to rephrase and support it with data", "Find an ally to support the point", "If it's a critical issue, follow up after the meeting"]
  }
},
{
  id: "apt-hard-018",
  text: "How do you ensure you make logical decisions under pressure?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Decision Making", "Emotional Intelligence", "Stress Management"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Pause and take a brief moment to think", "Focus on the objective and rely on pre-established principles or data", "Break the problem down into smaller parts", "Avoid emotional reactions"]
  }
},
{
  id: "apt-hard-019",
  text: "How do you balance being logical and being empathetic in communication?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Emotional Intelligence", "Communication", "Interpersonal Skills"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Use empathy to understand the audience's perspective first", "Acknowledge their feelings or concerns", "Then, present your logical points in a way that resonates with their context", "It's about 'how' you deliver the logic"]
  }
},
{
  id: "apt-hard-020",
  text: "How would you define “professionalism” in one minute?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Professional Acumen", "Self-Awareness"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["It's about competence, reliability, and respect", "It means taking accountability, communicating effectively, maintaining integrity, and showing consideration for others, regardless of the situation"]
  }
},

// ===============================================
// BONUS LOGICAL & VERBAL COMBO (MIXED LEVEL) - 40 Questions
// ===============================================
{
  id: "apt-bonus-001",
  text: "Why do we say “The pen is mightier than the sword”?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Verbal Reasoning", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Ideas, communication, and diplomacy can have a more lasting impact than violence or force"]
  }
},
{
  id: "apt-bonus-002",
  text: "What’s the difference between intelligence and attitude?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Behavioral Concepts", "Self-Awareness"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Intelligence is the ability to learn and apply knowledge", "Attitude is the mindset or perspective you apply to situations; one is ability, the other is choice"]
  }
},
{
  id: "apt-bonus-003",
  text: "What’s the meaning of “Think outside the box”? Give an example.",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Creativity", "Problem Solving"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Approaching problems in unconventional and innovative ways", "Example: Airbnb thinking of homes as hotels"]
  }
},
{
  id: "apt-bonus-004",
  text: "Why do people say “Don’t judge a book by its cover”?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Critical Thinking", "Social Awareness"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["The external appearance does not determine the internal value or content", "Applies to people, ideas, and things"]
  }
},
{
  id: "apt-bonus-005",
  text: "What’s your interpretation of “Knowledge is power”?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Critical Thinking", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Having information and skills gives you the ability to make better decisions, influence others, and control your own destiny"]
  }
},
{
  id: "apt-bonus-006",
  text: "What’s the difference between confidence and arrogance?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Self-Awareness", "Emotional Intelligence"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Confidence is a quiet belief in your own abilities", "Arrogance is a loud need to prove you are better than others, often masking insecurity"]
  }
},
{
  id: "apt-bonus-007",
  text: "“Mistakes are proof that you are trying.” Explain.",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Growth Mindset", "Resilience"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["Making mistakes is an inevitable part of taking on new challenges and learning", "A lack of mistakes may indicate a lack of effort or ambition"]
  }
},
{
  id: "apt-bonus-008",
  text: "What do you understand by “Teamwork divides the task and multiplies the success”?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Teamwork", "Collaboration"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Collaboration allows for sharing the workload while synergy from different skills and perspectives leads to a much better outcome than one person could achieve"]
  }
},
{
  id: "apt-bonus-009",
  text: "“Change is the only constant.” Do you agree?",
  type: "Aptitude",
  difficulty: "Easy",
  skillsEvaluated: ["Adaptability", "Philosophical Reasoning"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Yes, the world, technology, and circumstances are always evolving", "Adaptability is a key skill for survival and success"]
  }
},
{
  id: "apt-bonus-010",
  text: "Why is integrity important in professional life?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Ethics", "Professionalism"],
  metadata: {
    expectedAnswerLength: 80,
    keyPoints: ["It's the foundation of trust", "Integrity ensures reliability, honesty, and ethical behavior, which are crucial for long-term relationships and reputation"]
  }
},
{
  id: "apt-bonus-011",
  text: "What’s more important — creativity or discipline?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Critical Thinking", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Both are crucial and symbiotic", "Creativity generates ideas, but discipline is needed to execute them and bring them to life"]
  }
},
{
  id: "apt-bonus-012",
  text: "Should companies prioritize employee happiness or productivity?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Business Acumen", "Ethical Reasoning"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["They are not mutually exclusive; they are linked", "Happy and engaged employees are generally more productive", "A focus on well-being is a long-term strategy for sustainable productivity"]
  }
},
{
  id: "apt-bonus-013",
  text: "What’s the difference between logical thinking and emotional thinking?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Analytical Skills", "Emotional Intelligence"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Logical thinking is based on facts, data, and rational analysis", "Emotional thinking is based on feelings, intuition, and personal biases"]
  }
},
{
  id: "apt-bonus-014",
  text: "How can one become a better listener?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Active Listening", "Communication"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Practice active listening: pay full attention, avoid interrupting, ask clarifying questions, and summarize to confirm understanding"]
  }
},
{
  id: "apt-bonus-015",
  text: "If someone disagrees strongly with you in a meeting, how do you respond?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Conflict Resolution", "Communication"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["Stay calm and professional", "Acknowledge their perspective and ask questions to understand their reasoning", "Look for common ground or data to resolve the disagreement"]
  }
},
{
  id: "apt-bonus-016",
  text: "Why is “first impression” so important in interviews?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Professional Acumen", "Social Awareness"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["It creates a confirmation bias", "A positive first impression sets a positive tone for the rest of the interaction", "It's a quick indicator of professionalism and interpersonal skills"]
  }
},
{
  id: "apt-bonus-017",
  text: "If everyone thought the same way, what would happen to innovation?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Creativity", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 70,
    keyPoints: ["Innovation would cease to exist", "It thrives on diverse perspectives, challenges to the status quo, and new ideas"]
  }
},
{
  id: "apt-bonus-018",
  text: "Should success be measured by money or satisfaction?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Self-Awareness", "Values Assessment"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Success is subjective and personal", "A balanced view is often best: money provides security, but satisfaction provides fulfillment", "The answer depends on individual values"]
  }
},
{
  id: "apt-bonus-019",
  text: "Is it okay to take shortcuts if the result is good?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Ethical Reasoning", "Risk Assessment"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["It depends on the shortcut", "If it's an efficiency gain without compromising quality or ethics, yes", "If it compromises integrity, quality, or creates future problems, no"]
  }
},
{
  id: "apt-bonus-020",
  text: "What’s more important in a discussion — logic or presentation?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Both are essential", "Strong logic without good presentation may not be understood or accepted", "Good presentation without logic is hollow and unpersuasive"]
  }
},
{
  id: "apt-bonus-021",
  text: "Is it ethical to use AI-generated content without credit?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Ethics", "Digital Literacy", "Integrity"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["Depends on the context", "For creative or academic work, it's often considered plagiarism", "For simple tasks, it's a tool, but transparency is always best to avoid misrepresentation"]
  }
},
{
  id: "apt-bonus-022",
  text: "Can rules limit creativity? Explain.",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Creativity", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Yes, but constraints can also foster creativity", "Working within rules can force innovative solutions that might not have been considered otherwise"]
  }
},
{
  id: "apt-bonus-023",
  text: "If your boss takes credit for your idea, how do you handle it?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Conflict Resolution", "Assertiveness", "Professionalism"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["Assess the situation and frequency", "Discuss it privately with the boss, focusing on your desire for visibility and teamwork ('we' language)", "Document your contributions for future reference"]
  }
},
{
  id: "apt-bonus-024",
  text: "Is it better to be a generalist or a specialist in your career?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Career Planning", "Strategic Thinking"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["Both have advantages", "Specialists have deep expertise", "Generalists are adaptable and see the big picture", "A 'T-shaped' professional (deep expertise in one area, broad knowledge in others) is often ideal"]
  }
},
{
  id: "apt-bonus-025",
  text: "What’s the difference between leadership and management?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Leadership", "Business Acumen"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Management is about controlling complexity and executing a plan (doing things right)", "Leadership is about inspiring a vision and driving change (doing the right things)"]
  }
},
{
  id: "apt-bonus-026",
  text: "Can someone be successful without good communication skills?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Communication", "Career Planning"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["It's possible to a certain level, but significant success, especially in leadership, is nearly impossible without effective communication to share ideas and inspire others"]
  }
},
{
  id: "apt-bonus-027",
  text: "Is multitasking really effective?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Productivity", "Time Management"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Generally no", "Research shows it's usually rapid 'task-switching' which reduces efficiency and increases errors", "Deep focus on one task is more effective"]
  }
},
{
  id: "apt-bonus-028",
  text: "How does body language influence communication?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Communication", "Social Awareness"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["It's a major part of non-verbal communication", "It can reinforce, contradict, or substitute verbal messages", "Conveys confidence, interest, and emotion"]
  }
},
{
  id: "apt-bonus-029",
  text: "How do you differentiate between facts and opinions while speaking?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Analytical Skills", "Communication", "Critical Thinking"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Clearly state when something is data-driven ('The data shows...') vs. a personal belief ('In my opinion...' or 'I believe...')", "Facts are verifiable; opinions are subjective"]
  }
},
{
  id: "apt-bonus-030",
  text: "Is silence ever a good communication strategy?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Communication", "Emotional Intelligence"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Yes, a strategic pause can add emphasis, allow others to think, or de-escalate a tense situation", "It's a powerful tool when used intentionally"]
  }
},
{
  id: "apt-bonus-031",
  text: "How does one handle stage fright logically?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Problem Solving", "Stress Management"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["Reframe it as excitement", "Prepare and practice thoroughly to build confidence", "Focus on the message, not the fear", "Use breathing techniques to calm the nervous system"]
  }
},
{
  id: "apt-bonus-032",
  text: "If you had to explain India’s startup culture to a foreigner, what would you say?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Communication", "Business Acumen", "Cultural Awareness"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["It's a dynamic and rapidly growing ecosystem", "Focuses on solving local problems with technology (e.g., fintech, e-commerce)", "Characterized by innovation, young talent, and a large domestic market"]
  }
},
{
  id: "apt-bonus-033",
  text: "Should technology be used in interviews for evaluating communication?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Critical Thinking", "Technology Acumen"],
  metadata: {
    expectedAnswerLength: 130,
    keyPoints: ["It can be a useful tool for initial screening (e.g., analyzing clarity, vocabulary)", "However, it can't fully replace human judgment of nuance, empathy, and context"]
  }
},
{
  id: "apt-bonus-034",
  text: "Why is humility an underrated quality in professionals?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Emotional Intelligence", "Leadership"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["It fosters a willingness to learn from others, admit mistakes, and collaborate effectively", "Humble leaders often build more loyal and successful teams"]
  }
},
{
  id: "apt-bonus-035",
  text: "What role does curiosity play in problem-solving?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Problem Solving", "Creativity"],
  metadata: {
    expectedAnswerLength: 90,
    keyPoints: ["It's fundamental", "Curiosity drives you to ask 'why' and explore the root cause of a problem, leading to more robust and innovative solutions"]
  }
},
{
  id: "apt-bonus-036",
  text: "If everyone were logical all the time, would emotions lose value?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Philosophical Reasoning", "Emotional Intelligence"],
  metadata: {
    expectedAnswerLength: 120,
    keyPoints: ["No, emotions provide context, motivation, and meaning", "They are essential for empathy, creativity, and human connection, which logic alone cannot provide"]
  }
},
{
  id: "apt-bonus-037",
  text: "How would you convince a stubborn teammate to accept data-driven reasoning?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Persuasion", "Communication", "Conflict Resolution"],
  metadata: {
    expectedAnswerLength: 140,
    keyPoints: ["First, listen to understand the source of their stubbornness", "Visually present the data in a clear and simple way", "Connect the data directly to their goals or the team's objectives"]
  }
},
{
  id: "apt-bonus-038",
  text: "Why do people sometimes ignore facts and follow emotions?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Emotional Intelligence", "Behavioral Psychology"],
  metadata: {
    expectedAnswerLength: 110,
    keyPoints: ["Emotions are powerful motivators and can create strong biases (confirmation bias)", "Decisions are often made emotionally and justified logically afterward"]
  }
},
{
  id: "apt-bonus-039",
  text: "What’s the smartest decision you’ve seen someone take under pressure?",
  type: "Aptitude",
  difficulty: "Hard",
  skillsEvaluated: ["Analytical Skills", "Decision Making"],
  metadata: {
    expectedAnswerLength: 150,
    keyPoints: ["The answer should highlight a decision to pause and gather information, simplify the problem, or deliberately de-escalate a situation rather than reacting impulsively"]
  }
},
{
  id: "apt-bonus-040",
  text: "“Great communication is less about speaking more, and more about being understood.” What’s your view?",
  type: "Aptitude",
  difficulty: "Medium",
  skillsEvaluated: ["Communication", "Active Listening"],
  metadata: {
    expectedAnswerLength: 100,
    keyPoints: ["Strongly agree", "The goal of communication is not transmission but reception of the message", "Clarity, brevity, and listening are more important than verbosity"]
  }
}
]