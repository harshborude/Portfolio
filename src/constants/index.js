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
    title: "JEE Aspirant",
    date: "January 2021 - August 2022",
    story: "It taught me discipline, consistency, and pressure management — and I made it to IIT Kharagpur on my second attempt.",
    journey: [
      "Learned discipline, focus, and how to push through mental fatigue.",
      "Faced the common challenge of chasing a big goal.",
      "Secured admission into IIT KGP in my second attempt.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/KOSS.svg",
    title: "Advisor, KOSS (Kharagpur Open Source Society)",
    date: "June 2023 - Present",
    story: "Getting into KOSS was a turning point — it gave me my first real dev community. I discovered Linux, fell in love with scripting and customization, and found myself going deeper into systems, servers, and open source",
    journey: [
      "Joined KOSS, a core open-source community at IIT Kharagpur.",
      "Discovered Arch Linux and started customizing my dev workflow.",
      "Organized KWoC (a student-led version of GSoC).",
      "Built scripts, learned about bash, database systems, servers.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/node.png",
    title: "Full Stack Developer",
    date: "June 2024 - Present",
    story: "Frontend started as a way to give my backend projects a face — and quickly became something I often worked on. React unlocked a new kind of creativity, and soon I was building full-stack apps that felt usable, not just functional.",
    journey: [
      "Built my first single-page app during a society interview task.",
      "Used React, Express, and Postgres to build tools like a markdown note-taking app.",
      "Started thinking about design, user flow, and how frontend and backend fit together.",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/docker.png",
    title: "Newbie at DevOps",
    date: "May 2025 - Present",
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
    image: "/images/auction.png",
    techStack: "Go, Gin, PostgreSQL, GORM, Gorilla WebSocket, JWT, Docker",
    description: "A real-time auction platform with credit-based bidding, WebSocket-powered live updates, and automated auction lifecycle management using background workers.",
    github: "https://github.com/harshborude/Auction_Backend",
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