export interface Project {
  id: string;
  number: string;
  title: string;
  tags: string[];
  stack: string[];
  github?: string;
  githubNote?: string;
  live?: string;
  bullets: string[];
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeFile: string;
  summary: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  period: string;
}

export interface Certification {
  title: string;
  platform: string;
  date: string;
  instructor: string;
  details: string;
}

export interface FeatureService {
  number: string;
  title: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Nitin Kumar Patwa",
    role: "Full-stack web developer",
    location: "Uttar Pradesh, India",
    email: "nitiniiitr@gmail.com",
    github: "https://github.com/lobby11",
    linkedin: "https://www.linkedin.com/in/nitin-kumar-patwa-a310a9329/",
    resumeFile: "/Nitin-Kumar-Patwa-Resume.pdf",
    summary:
      "Full-stack web developer with production-grade experience across backend systems and responsive frontend applications. Built and deployed projects on AWS (ECS, Fargate, ECR) and Vercel. Proficient in reviewing, debugging, and optimizing code across the entire web stack, from React.js UIs to Node.js REST APIs and cloud infrastructure.",
  } as Profile,

  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.IO",
        "RabbitMQ",
        "JWT Authentication",
        "Microservices",
        "WebSockets",
        "CRDT (Yjs)",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQL"],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Docker",
        "CI/CD",
        "AWS ECS (Fargate)",
        "ECR",
        "IAM",
        "VPC",
        "Application Load Balancer",
        "Vercel",
      ],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "API Testing", "Linux"],
    },
  ] as SkillCategory[],

  orbitSkills: [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "EXPRESS",
    "SOCKET.IO",
    "RABBITMQ",
    "MONGODB",
    "POSTGRESQL",
    "DOCKER",
    "AWS ECS",
    "YJS",
    "GSAP",
    "TAILWIND",
  ],

  projects: [
    {
      id: "proj-1",
      number: "01",
      title: "Multi-User Collaborative Code Editor",
      tags: ["BACKEND", "CLOUD"],
      stack: ["Node.js", "Express", "Socket.IO", "Yjs", "Docker", "AWS ECS"],
      github: "https://github.com/lobby11/multi_user_code_Editor",
      bullets: [
        "Built a real-time collaborative code editor using Node.js, Express.js, and Socket.IO, enabling simultaneous multi-user editing in isolated room-based sessions with zero data loss.",
        "Integrated Yjs (CRDT) for automatic conflict resolution across all connected clients, guaranteeing consistent document state regardless of concurrent edit order.",
        "Built CI/CD pipeline with multi-stage Dockerfiles, Docker Buildx (Linux/amd64), and automated image versioning pushed to AWS ECR private registry.",
        "Deployed to AWS ECS (Fargate) with custom VPC, Security Group rules, and ALB; enforced least-privilege IAM policies scoped to ECR and ECS only.",
      ],
      featured: true,
    },
    {
      id: "proj-2",
      number: "02",
      title: "Rapido Working System: Ride-Hailing Microservices Backend",
      tags: ["BACKEND"],
      stack: ["Node.js", "Express", "RabbitMQ", "API Gateway"],
      github: "https://github.com/lobby11/rapido-working-system-",
      bullets: [
        "Architected a 4-service microservices platform (Gateway, User, Ride, Captain) with 13 independently tested REST API routes verified through structured Postman testing.",
        "Implemented API Gateway as a single client entry point, decoupling clients from internal services and centralizing routing and authentication logic.",
        "Integrated RabbitMQ as an async message broker replacing direct HTTP coupling with event-driven communication, improving fault tolerance and enabling independent service scaling.",
      ],
    },
    {
      id: "proj-3",
      number: "03",
      title: "Zentry Website Clone",
      tags: ["FRONTEND"],
      stack: ["React.js", "GSAP", "Tailwind CSS"],
      github: "https://github.com/lobby11",
      githubNote: "VERIFY REPO URL",
      live: "https://zentryclonewinner.vercel.app/",
      bullets: [
        "Built a fully responsive animated website clone using React.js, GSAP, and Tailwind CSS with advanced scroll-triggered animations and premium interactive UI interactions.",
        "Implemented reusable component architecture and optimized rendering performance for fast load times across desktop and mobile; deployed on Vercel.",
      ],
    },
    {
      id: "proj-4",
      number: "04",
      title: "CineQuest: Movie Discovery Platform",
      tags: ["FRONTEND"],
      stack: ["React.js", "Vite", "Appwrite", "TMDb API"],
      github: "https://github.com/lobby11",
      githubNote: "VERIFY REPO URL",
      live: "https://reco-movie.vercel.app/",
      bullets: [
        "Developed a responsive movie discovery app with real-time search, dynamic data fetching via TMDb API, and API caching to reduce redundant requests and improve UX.",
        "Built reusable UI sections and responsive layouts for consistent cross-device performance; deployed on Vercel.",
      ],
    },
  ] as Project[],

  education: {
    institution: "Indian Institute of Information Technology Ranchi",
    location: "Ranchi, Jharkhand",
    degree: "B.Tech in Electronics and Communication Engineering",
    cgpa: "8.51",
    period: "2024 to 2028 (expected)",
  } as Education,

  certification: {
    title: "Complete Web Development Course",
    platform: "Udemy",
    date: "Oct 2025",
    instructor: "Hitesh Choudhary",
    details: "120+ hrs: MERN stack, React.js, Next.js, REST APIs, deployment workflows.",
  } as Certification,

  whatIDo: [
    {
      number: "01",
      title: "REAL-TIME SYSTEMS",
      description: "Socket.IO rooms and Yjs (CRDT) conflict-free editing",
    },
    {
      number: "02",
      title: "MICROSERVICES",
      description: "API gateway, RabbitMQ event-driven services, tested REST APIs",
    },
    {
      number: "03",
      title: "CLOUD & DEVOPS",
      description: "Docker, ECR, ECS Fargate, VPC, ALB, least-privilege IAM",
    },
    {
      number: "04",
      title: "ANIMATED FRONTENDS",
      description: "React, Next.js, GSAP, Tailwind, responsive and fast",
    },
  ] as FeatureService[],

  stats: [
    { value: "4", label: "PROJECTS DEPLOYED", outline: false },
    { value: "13", label: "REST API ROUTES TESTED", outline: true },
    { value: "8.51", label: "CGPA (IIIT RANCHI)", outline: false },
  ],

  inquiryCategories: [
    "JOB OPPORTUNITY",
    "FREELANCE PROJECT",
    "COLLABORATION",
    "GENERAL INQUIRY",
  ],

  timelineOptions: [
    "Immediate (Within 1 week)",
    "1 - 4 weeks",
    "1 - 3 months",
    "Flexible",
  ],

  interestChips: [
    "FULL-STACK",
    "FRONTEND",
    "BACKEND",
    "CLOUD & DEVOPS",
    "REAL-TIME SYSTEMS",
  ],
};
