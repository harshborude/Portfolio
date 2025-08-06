import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Journey",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

 const footerLinks = [
  {
    name: "facebook",
    link: "https://www.facebook.com/harsh.borude",
    icon: FaFacebook 
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/harsh.borude",
    icon: FaInstagram
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/harshborude/",
    icon: FaLinkedin
  },
  {
    name: "github",
    link: "https://github.com/harshborude",
    icon: FaGithub
  }
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
  { value: 1, suffix: "", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/build.png",
    title: "Engineering Instinct",
    desc: "I build systems that aren’t just functional—they’re thoughtfully designed with modularity and scalability in mind.",
  },
  {
    imgPath: "/images/problem.png",
    title: "End-to-End Problem Solving",
    desc: "From infrastructure to APIs, I enjoy taking full ownership of my projects and making sure every part fits cleanly.",
  },
  {
    imgPath: "/images/curiosity.png",
    title: "Projects with a Purpose",
    desc: "Whether it's an emoji picker for quick texting or a script to clean my Downloads folder, I love turning everyday friction into useful tools, picking up new skills and experience.",
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
  // {
  //   name: "Python Developer",
  //   technologies: [
  //     "/images/logos/python.png",
  //     "/images/logos/redis.png",
  //     "/images/logos/qt.png",
  //     "/images/logos/selenium.png",
  //     "/images/logos/pandas.png",
  //     "/images/logos/numpy.png"
  //   ]
  // },
  {
    name: " Backend Developer",
    technologies: [
      //  "/images/logos/react.png",
      //   "/images/logos/tailwind.png",
      // "/images/logos/javascript.png",
      // "/images/logos/vite.png",
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
      // "/images/logos/go.png",
      // "/images/logos/bash.png",
      // "/images/logos/arch.png",
      "/images/logos/postman.png",
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
    story: "I focused fully on cracking JEE, and it taught me discipline, consistency, and pressure management. I made it to IIT Kharagpur on my second attempt.",
    journey: [
      "Learned discipline, focus, and how to push through mental fatigue.",
      "Faced the common challenge of sacrificing passion to chase a bigger goal.",
      "Secured admission into IIT KGP (Mining) in my second attempt securing 99.1%ile in JEE Mains",
    ],
  },
   {
    imgPath: "/images/exp2.png",
    logoPath: "/images/logos/IITKGP.png",
    title: "Technology Secretary, Rajendra Prasad Hall of Residence",
    date: "Aug 2023 - Mar 2024",
    story: "As Technology Secretary, I organized events such as OpenSoft (a software competition among 23 halls) and Hardware Modelling, while managing over 20 captains across all competitions. I also served as Vice Captain for Illumination, an inter-hall competition, and was honored with the Best Fresher award for my contributions.",
    journey: [
      "Conducted and managed teams for 10 events in the General Championship Technology",
      "Vice-captain of Illumination",
      "Awarded Best Fresher for my contibutions",
    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/SAC.svg",
    title: "Student Member, Students' Alumni Cell",
    date: "Nov 2023 - May 2024",
    story: "i joined SAC in November 2023, where I contributed to networking, sponsorship, and event management, gaining valuable experience in teamwork and time management. Leading a team of 23 associate members, I successfully coordinated various initiatives and, along with three teammates, managed corporate and media relations for the Annual Alumni Meet 2024",
    journey: [
      "Joined SAC, Student body in IIT Kharagpur.Under the Aegis of the Dean, Alumni Affairs.",
      "Worked in a team of 11 Student Members.",
      "Organized Annual Alumni Meet 2024, managing corporate and media relations",
      "Contributed to sponsorship, networking and event management",

    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logos/node.png",
    title: "Full Stack Developer",
    date: "Jan 2025 - Present",
    story: "Frontend started as a way to give my backend projects a face — and quickly became something I often worked on. React unlocked a new kind of creativity, and soon I was building full-stack apps that felt usable, not just functional.",
    journey: [
      "Built my first single-page app during a society interview task.",
      "Used React, Express, and MongoDB to build tools like a whiteboard app.",
      "Started thinking about design, user flow, and how frontend and backend fit together.",
    ],
  },
  // {
  //   imgPath: "/images/exp4.png",
  //   logoPath: "/images/logos/docker.png",
  //   title: "Newbie at DevOps",
  //   date: "May 2025 - Present",
  //   story: "A networking course pulled me into systems thinking — and from there, I fell down the DevOps rabbit hole. Infrastructure as Code, Docker, and scalability changed how I saw code: not just something you write, but something that lives and runs",
  //   journey: [
  //     "Built my first IaC setup using Pulumi to automate an EC2 web server.",
  //     "Dockerized projects for fast deployment and consistent environments.",
  //     "Started mapping out architecture diagrams and scalability principles for future apps.",
  //   ],
  // }

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

export {
  words,
  abilities,
  counterItems,
  journeyCards,
  socialImgs,
  techStackImgs,
  navLinks,
  footerLinks
};