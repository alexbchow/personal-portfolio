import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `Software engineer with a background in data analysis, web development, and generative AI.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable fullstack engineer with a passion for developing innovative, data-driven applications. My experience spans many fields, from data consulting at EY Parthenon, where I created applications for improving data insights for strategic decisions, to startups like Evitado Technologies, where I optimized software for high-fidelity sensor data processing. With skills in Python, React, Next.js, and MongoDB, I bring a blend of data analysis, generative AI, and full-stack development to the table. My curiosity for learning new technologies fuels my commitment to continuous learning, collaboration, and delivering impactful solutions. Outside of coding, I enjoy trying new foods, going to the gym, playing tennis, and speedcubing.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Data Science Intern",
    company: "Ernst and Young Parthenon",
    description: `Developed data analytics application for DKSH in strategizing across Asia Pacific’s $100B pharmaceutical markets. Engineered data-cleaning algorithms, streamlining World Health Organization dataset processing, improving data accuracy by 23%. Built automated visualizations with pandas, highlighting drug market shares and revenue growth opportunities. Created a recommendation engine that transformed raw datasets into actionable insights, leading to a 17.8% boost in operational efficiency..`,
    technologies: ["Python", "pandas", "numpy", "think-cell"],
  },
  {
    year: "April 2024 - June 2024",
    role: "Software Engineer Intern",
    company: "Evitado Technologies",
    description: `Developed new features for the Rosbag Interface, enabling advanced querying and filtering of rosbag data. Utilized Python, SQLite, and ROS libraries to build a dynamic data synchronization and preprocessing pipeline, reducing data processing latency by 30%, thus enabling real-time response in safety-critical scenarios. Collaborated on analyzing high-fidelity sensor data from a rotating LiDAR scanner system, contributing to a 12.8% improvement in the accuracy of aircraft taxiing visualization.`,
    technologies: ["Python", "SQLite", "ROS"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Research Assistant",
    company: "UCSB College of Engineering",
    description: `Developed a density of states function, processing over 1 million data points for accurate energy distribution analysis. Implemented partitioning of grids in 3D space, optimizing the extraction of minimum and maximum values by 35%. Developed script in Python to visualize energy distributions, generating histograms for interpolated and input data. Enhanced simulation accuracy through refined boundary conditions and data interpolation techniques.`,
    technologies: ["C++", "MatLab", "CMake"],
  },
  {
    year: "February 2024 - Present",
    role: "Industry Developer",
    company: "Web Development at Berkeley",
    description: `Developed full-stack main website for Web Development at Berkeley in React, NextJS, TypeScript, and Tailwind CSS. Implemented routes for dynamic page navigation and managed server-side rendering with Node.js, and Express.js. Integrated MongoDB for scalable data storage with RESTful API CRUD operations. Utilized React context for global state management.`,
    technologies: ["React", "NodeJS", "Express.js", "MongoDB", "Airtable Web API"],
  },
];

export const PROJECTS = [
  {
    title: "PeptGPT",
    image: project1,
    link: "https://devpost.com/software/protgpt",
    description:
      "Developed PeptGPT leveraging GPT-4 API for automated creation of fusion protein sequences and proprietary 3D structure, awarded Calhacks OpenAI Hackathon Finalist. Eliminated need for a weeks-long literature search, reducing protein generation time to 10 seconds. Implemented algorithms to validate and generate protein sequences using PFAM values and InterPro API data. Integrated ESM2 web API to predict and display accurate 3D structures of generated proteins. Built GUI for user interaction and a command-line interface using Biopython.",
    technologies: ["Python", "OpenAI GPT-4 API", "InterPro API", "ESM2", "Biopython"],
  },
  {
    title: "Posto Social",
    image: project3,    
    description:
      "Developed full-stack and cross-platform social media app tested and used by hundreds of UC Berkeley students. Worked on frontend development for platform regulation.",
    technologies: ["Dart", "Flutter", "TypeScript", "Firebase", "Node.js", "ExpressJS"],
  },
  {
    title: "This Website!",
    image: project2,    
    description:
      "Developed full-stack personal portfolio website. Implemented dynamic routes and component based architecture. Optimized website performance with server-side rendering and lazy loading.",
    technologies: ["React", "NextJS", "Express.js, Tailwind CSS"],
  },
];

export const CONTACT = {
  email: "alexbchow@berkeley.edu",
};
