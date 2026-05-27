const RESUME_LINK = "https://drive.google.com/file/d/1pjeUmDnmbd19CA9L_s6kzm5sQBdfbDe_/view?usp=sharing";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg", id: 1 },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: 2 },
  { text: "Designs", imgPath: "/images/designs.svg", id: 3 },
  { text: "Code", imgPath: "/images/code.svg", id: 4 },
  { text: "Ideas", imgPath: "/images/ideas.svg", id: 5 },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: 6 },
  { text: "Designs", imgPath: "/images/designs.svg", id: 7 },
  { text: "Code", imgPath: "/images/code.svg", id: 8 },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    title: "Engineering Instinct",
    desc: "I build systems that are not only functional but thoughtfully designed with modularity and scalability at their core.",
  },
  {
    title: "End-to-End Problem Solving",
    desc: "From infrastructure to APIs, I take full ownership of my projects and ensure each component integrates cleanly and efficiently.",
  },
  {
    title: "Projects with a Purpose",
    desc: "Whether it is a small utility or a full-featured application, I focus on solving real problems and turning everyday friction into practical, well-built tools while continuously expanding my skill set.",
  },
];

// Maps logo filename to a human-readable tech name for alt text
const techNameMap = {
  "react.png": "React",
  "tailwind.png": "Tailwind CSS",
  "javascript.png": "JavaScript",
  "vite.png": "Vite",
  "node.png": "Node.js",
  "npm.png": "npm",
  "express.png": "Express.js",
  "ejs.png": "EJS",
  "fastapi.png": "FastAPI",
  "aws.png": "AWS",
  "docker.png": "Docker",
  "sqlite.png": "SQLite",
  "postgresSQL.png": "PostgreSQL",
  "git.png": "Git",
  "github.png": "GitHub",
  "go.png": "Go",
  "postman.png": "Postman",
  "c++.webp": "C++",
};

const techStackImgs = [
  {
    name: "Frontend Developer",
    technologies: [
      "/images/logos/react.png",
      "/images/logos/tailwind.png",
      "/images/logos/javascript.png",
      "/images/logos/vite.png",
    ]
  },
  {
    name: "Backend Developer",
    technologies: [
      "/images/logos/node.png",
      "/images/logos/npm.png",
      "/images/logos/express.png",
      "/images/logos/ejs.png",
      "/images/logos/fastapi.png",
    ]
  },
  {
    name: "DevOps & Database",
    technologies: [
      "/images/logos/aws.png",
      "/images/logos/docker.png",
      "/images/logos/sqlite.png",
      "/images/logos/postgresSQL.png",
    ]
  },
  {
    name: "Miscellaneous",
    technologies: [
      "/images/logos/git.png",
      "/images/logos/github.png",
      "/images/logos/go.png",
      "/images/logos/postman.png",
      "/images/logos/c++.webp",
    ]
  },
];

const journeyCards = [
  {
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/IITKGP.png",
    title: "B.Tech in Mining Engineering",
    date: "August 2022 - 2026",
    story: "My journey started with cracking JEE on my second attempt, which taught me discipline and pressure management. I am currently pursuing my B.Tech (Hons.) in Mining Engineering at IIT Kharagpur.",
    journey: [
      "Secured admission into IIT Kharagpur for Mining Engineering in my second attempt.",
      "Learned discipline, focus, and how to push through mental fatigue.",
      "Exploring the intersection of engineering principles and software development.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/IITKGP.png",
    title: "Student Member, Students' Alumni Cell",
    date: "Nov 2023 - Apr 2024",
    story: "Worked across three main fronts: event management, sponsorship, and networking. My primary portfolio was Corporate and Media Relations.",
    journey: [
      "Led sponsorship, event management, and networking initiatives to support Students' Alumni Cell operations.",
      "Organized IIT Kharagpur's 20th Annual Alumni Meet, managing 15+ events and coordinating 200+ alumni.",
      "Spearheaded My Imprint Class Gift Campaign with the Institute Development Team, managing a budget of INR 33 Lakhs.",
      "Directed Institute Yearbook production, overseeing compilation and publication for 2600+ graduating students.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/node.png",
    title: "Software Development Intern | Inflection Zone Lab",
    date: "May 2025 - Jun 2025",
    story: "Worked on building secure and scalable RESTful APIs for healthcare entities with a focus on advanced search features and data integrity.",
    journey: [
      "Built modular API services for healthcare entities with separation of validation, authorization, business logic, and routing.",
      "Engineered secure multi-tenant RESTful search APIs for enrollment data using Express.js with layered architecture.",
      "Developed advanced search with dynamic filtering, pagination, and sorting to efficiently query and manage large datasets.",
      "Implemented comprehensive server-side validation using Joi schemas to ensure data integrity for incoming query parameters.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/javascript.png",
    title: "Software Developer Intern",
    date: "May 2026 - Present",
    story: "Currently working on medical simulation development projects related to our medical and science education simulation platforms.",
    journey: [
      "Developing features for medical and science education simulation platforms.",
      "Collaborating on interactive educational tools for science and medicine.",
      "Enhancing the core simulation platform for better user experience.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/docker.png",
    title: "Newbie at DevOps",
    date: "Present",
    story: "A networking course pulled me into systems thinking — and from there, I fell down the DevOps rabbit hole. Infrastructure as Code, Docker, and scalability changed how I saw code: not just something you write, but something that lives and runs",
    journey: [
      "Built my first IaC setup using Pulumi to automate an EC2 web server.",
      "Dockerized projects for fast deployment and consistent environments.",
      "Started mapping out architecture diagrams and scalability principles for future apps.",
    ],
  }
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

const projects = [
  {
    title: "Multiplayer Chess Platform",
    image: "/images/chess.png",
    techStack: "Node.js, Socket.IO, WebRTC",
    description:
      "Built a real-time multiplayer chess platform using Node.js & Socket.IO with <100ms move synchronization. Implemented WebRTC signaling and in-memory session recovery for seamless reconnects.",
    github: "https://github.com/harshborude/Chess_website",
  },
  {
    title: "Project Management Platform API",
    image: "/images/projectmanagement.webp",
    techStack: "Node.js, Express, MongoDB, JWT",
    description:
      "Architected a modular RESTful API using Node.js, Express & MongoDB with multi-tier RBAC. Implemented dual-token JWT authentication and optimized queries using aggregation pipelines.",
    github: "https://github.com/harshborude/Project_management_platform",
  },
  {
    title: "Rubik's Cube Scanner & Solver",
    image: "/images/rubiks.webp",
    techStack: "C++, OpenCV, IDA*",
    description:
      "Engineered a high-performance C++ Rubiks Cube solver using IDA* search expanding 5M+ nodes/sec. Integrated OpenCV-based real-time cube scanning with >99.5% color accuracy.",
    github: "https://github.com/harshborude/Rubiks_Cube_Solver",
  },
  {
    title: "URL Shortening Service",
    image: "/images/urlshortner.png",
    techStack: "Node.js, PostgreSQL, JWT, Docker",
    description:
      "Developed a secure URL shortening platform with Node.js & PostgreSQL. Implemented JWT authentication, NanoID-based short codes, and Dockerized deployment with <10ms redirects.",
    github: "https://github.com/harshborude/url_shortener",
  },
  {
    title: "Whiteboard App",
    image: "/images/whiteboard.png",
    techStack: "Node.js, Express, MongoDB, Joi",
    description:
      "Built a secure multi-tenant RESTful search API with advanced filtering, pagination and Joi-based validation. Designed layered architecture separating authorization and business logic.",
    github: "https://github.com/harshborude/Whiteboard-app",
  },
  {
    title: "Real-time Auction Platform",
    image: "/images/auction.webp",
    techStack: "Go, Gin, PostgreSQL, GORM, Gorilla WebSocket, JWT, Docker",
    description: "A real-time auction platform with credit-based bidding, WebSocket-powered live updates, and automated auction lifecycle management using background workers.",
    github: "https://github.com/harshborude/Auction_Backend",
  },
  {
    title: "KaiMhantOS",
    image: "/images/arch.png",
    techStack: "C, x86 Assembly (NASM)",
    description: "A 32-bit protected mode Operating System built from scratch with a custom VGA driver, real-time PS/2 keyboard support, and an interactive command shell.",
    github: "https://github.com/harshborude/KaiMhantOS",
  }
];

export {
  RESUME_LINK,
  words,
  abilities,
  counterItems,
  journeyCards,
  socialImgs,
  techStackImgs,
  techNameMap,
  navLinks,
  projects,
};