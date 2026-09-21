// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "NexaChat - Real-Time Social Platform",
    status: "Live",
    category: "Full Stack",
    description:
      "A production-deployed real-time social platform built with Django 6, Django Channels, and WebSockets. Features public chat rooms, direct messages, friend system, posts, 24-hour stories, live notifications, global search, admin analytics, and a REST API. Uses PostgreSQL and Redis for multi-process WebSocket broadcast, Dockerized with CI/CD via GitHub Actions, and deployed on Render.",
    technologies: [
      "Django 6",
      "Python 3.13",
      "Django Channels",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Django REST Framework",
      "Render",
      "GitHub Actions"
    ],
    github: "https://github.com/mxolisi78/NexaChat",
    liveDemo: "https://nexachat-9cfg.onrender.com"
  },
  {
    id: 2,
    title: "MediCare Pro - Hospital Management System",
    status: "Full Stack",
    category: "Full Stack",
    description:
      "A modern, enterprise-grade hospital management platform built with ASP.NET Core 9 and React 19. Features patient management, appointment scheduling, medical records, pharmacy, laboratory, billing, and real-time analytics with JWT authentication and role-based access control.",
    technologies: [
      "ASP.NET Core 9",
      "C#",
      "React 19",
      "MySQL",
      "EF Core",
      "JWT",
      "Chart.js",
      "Bootstrap"
    ],
    github: "https://github.com/mxolisi78/medicare-pro",
    liveDemo: null
  },
  {
    id: 3,
    title: "Taste Haven RMS - Restaurant Management System",
    status: "Java Application",
    category: "Java",
    description:
      "A complete restaurant management system with 4 user roles (Manager, Waiter, Chef, Customer), 20+ screens, and 12 database tables. Features secure multi-role login, order management, kitchen display, inventory tracking, sales reports, analytics, and customer self-service ordering.",
    technologies: ["Java", "Swing", "NetBeans", "MySQL", "JDBC", "XAMPP"],
    github: "https://github.com/mxolisi78/TasteHavenRMS",
    liveDemo: null
  },
  {
    id: 4,
    title: "Smart Face Attendance System",
    status: "In Development",
    category: "Python",
    description:
      "A Django-based employee attendance management system designed to automate attendance using face detection technology.",
    technologies: ["Django", "Python", "OpenCV", "SQLite"],
    github: "https://github.com/mxolisi78/smart-face-attendance-system",
    liveDemo: null
  },
  {
    id: 5,
    title: "Payroll Management System",
    status: "Completed",
    category: "Python",
    description:
      "A web-based payroll management platform for managing employees, departments, attendance, leave, and payroll processes.",
    technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
    github: "https://github.com/mxolisi78/payroll-system",
    liveDemo: null
  },
  {
    id: 6,
    title: "ShopSphere",
    status: "Full Stack",
    category: "Full Stack",
    description:
      "A full-stack e-commerce application featuring a REST API, authentication, product management, and a modern React frontend.",
    technologies: ["ASP.NET Core", "C#", "React", "SQL Server", "JWT"],
    github: "https://github.com/mxolisi78/ShopSphere",
    liveDemo: null
  },
  {
    id: 7,
    title: "CCAMS",
    status: "Java Application",
    category: "Java",
    description:
      "A Java-based campus management application developed with NetBeans and MySQL database integration.",
    technologies: ["Java", "NetBeans", "MySQL", "JDBC"],
    github: "https://github.com/mxolisi78/CCAMS",
    liveDemo: null
  },
  {
    id: 8,
    title: "Banking Management System",
    status: "Completed",
    category: "Java",
    description:
      "A Java desktop banking application designed to manage customer accounts, transactions, and banking operations using MySQL.",
    technologies: ["Java", "MySQL", "JDBC", "NetBeans"],
    github: "https://github.com/mxolisi78/banking-management-system",
    liveDemo: null
  },
  {
    id: 9,
    title: "South Africa Employment Analysis",
    status: "Data Analysis",
    category: "Data Analysis",
    description:
      "A Python data analysis project investigating the relationship between tertiary education enrolment and unemployment in South Africa.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel"],
    github: "https://github.com/mxolisi78/south-africa-employment-analysis",
    liveDemo: null
  },
  {
    id: 10,
    title: "Task Management System",
    status: "Web Application",
    category: "Full Stack",
    description:
      "Task management application with CRUD operations, user authentication, and task tracking capabilities.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/mxolisi78/TaskManagementSystem",
    liveDemo: null
  },
  {
    id: 11,
    title: "Student Management System",
    status: "Web Application",
    category: "Java",
    description:
      "Student information system for managing student records, grades, and academic progress.",
    technologies: ["Java", "MySQL", "JDBC", "NetBeans"],
    github: "https://github.com/mxolisi78/StudentManagementSystem",
    liveDemo: null
  },
  {
    id: 12,
    title: "Tracker Services",
    status: "Web Application",
    category: "Full Stack",
    description:
      "Service tracking and management system for monitoring project progress and resource allocation.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/mxolisi78/tracker-services",
    liveDemo: null
  },
  {
    id: 13,
    title: "Gert Sibande Municipality System",
    status: "Web Application",
    category: "Full Stack",
    description:
      "Municipal service management system for local government operations and citizen services.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/mxolisi78/Gert-Sibande-Municipality",
    liveDemo: null
  }
];

export default projects;