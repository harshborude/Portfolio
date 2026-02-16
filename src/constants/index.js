const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  // {
  //   name: "Journey",
  //   link: "#experience",
  // },
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
    // imgPath: "/images/build.png",
    title: "Engineering Instinct",
  desc: "I build systems that are not only functional but thoughtfully designed with modularity and scalability at their core.",
  },
  {
    // imgPath: "/images/problem.png",
    title: "End-to-End Problem Solving",
    desc: "From infrastructure to APIs, I take full ownership of my projects and ensure each component integrates cleanly and efficiently.",
  },
  {
    // imgPath: "/images/curiosity.png",
    title: "Projects with a Purpose",
  desc: "Whether it is a small utility or a full-featured application, I focus on solving real problems and turning everyday friction into practical, well-built tools while continuously expanding my skill set.",
  },
  // {
  //   imgPath: "/images/arch.png",
  //   title: "I Use Arch BTW",
  //   desc: "As an Arch Linux user, I value control, transparency, and customization. My workflow isn’t just configured—it’s engineered to fit how I think, build, and learn.",
  // },
];

const techStackImgs = [
  {
    name: "Frontend Developer",
    technologies: [
      "/images/logos/react.png",
      // "/images/logos/three.png",
      "/images/logos/tailwind.png",
      "/images/logos/javascript.png",
      "/images/logos/vite.png",
      // "/images/logos/figma.png"
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
      // "/images/logos/flask.png",
    ]
  },
  {
    name: "DevOps & Database",
    technologies: [
      "/images/logos/aws.png",
      "/images/logos/docker.png",
      // "/images/logos/pulumi.png",
      // "/images/logos/vim.png",
      "/images/logos/sqlite.png",
      "/images/logos/postgresSQL.png",
    ]
  },
  {
    name: "Micellaneous",
    technologies: [
      "/images/logos/git.png",
      "/images/logos/github.png",
      "/images/logos/go.png",
      // "/images/logos/bash.png",
      // "/images/logos/arch.png",
      "/images/logos/postman.png",
      "/images/logos/c++.webp",
      
    ]
  },
];

const journeyCards = [
  // {
  //   imgPath: "/images/exp1.png",
  //   logoPath: "/images/logos/python.png",
  //   title: "Python Developer",
  //   date: "January 2021 - Present",
  //   story: "My first real project was a school management system in Class 12 using Python and MySQL. I didn’t know much then — but I kept chipping away with help from Stack Overflow and YouTube. That project taught me how addictive building something that works can be.",
  //   journey: [
  //     "Built utility tools like an emoji picker, snake games, bots, scrapers etc.",
  //     "Discovered APIs and web concepts via Python (requests, FAST API etc).",
  //     "Explored data workflows with Pandas/Numpy, and later AI/LLMs.",
  //   ],
  // },
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

// const expLogos = [
//   {
//     name: "logo1",
//     imgPath: "/images/logo1.png",
//   },
//   {
//     name: "logo2",
//     imgPath: "/images/logo2.png",
//   },
//   {
//     name: "logo3",
//     imgPath: "/images/logo3.png",
//   },
// ];

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
];



export {
  words,
  abilities,
  counterItems,
  journeyCards,
  socialImgs,
  techStackImgs,
  navLinks,
  projects,
};