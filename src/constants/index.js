import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `Software engineer with a background in data analysis, web development, and generative AI.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable fullstack engineer with a passion for developing innovative, data-driven applications. My experience spans many fields, from data consulting at EY Parthenon, where I created applications for improving data insights for strategic decisions, to startups like Evitado Technologies, where I optimized software for high-fidelity sensor data processing. With skills in Python, React, Next.js, and MongoDB, I bring a blend of data analysis, generative AI, and full-stack development to the table. My curiosity for learning new technologies fuels my commitment to continuous learning, collaboration, and delivering impactful solutions. Outside of coding, I enjoy trying new foods, going to the gym, playing tennis, and speedcubing.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Data Science Intern",
    company: "Ernst and Young Parthenon",
    description: `Advised DKSH Thailand on strategies in Asia Pacific region’s $100B pharmaceutical markets. Applied data cleaning techniques on World Health Organization datasets and improving data accuracy. Utilized pandas and numpy to visualize drug market shares, increasing market revenue by 6.2% across 15+
therapeutic areas. Conducted linear regression to forecast market growth for top pharmaceutical companies and drugs in APAC. Transformed datasets into recommendations for DKSH leading to a 17.8% increase in operational efficiency. Developed application to identify 100+ top pharma companies, influencing $15.2B in investment decisions.`,
    technologies: ["Python", "pandas", "numpy", "think-cell"],
  },
  {
    year: "April 2024 - June 2024",
    role: "Software Engineer Intern",
    company: "Evitado Technologies",
    description: `Developed new features for the Rosbag Interface, enabling advanced querying and filtering of ROS data including IMU and LiDAR data. Utilized Python, SQLite, and ROS libraries to build a dynamic data synchronization and preprocessing pipeline, reducing data processing latency by 30%, thus enabling real-time response in safety-critical scenarios. Collaborated on analyzing high-fidelity sensor data from a rotating LiDAR scanner system, contributing to a 12.8% improvement in the accuracy of aircraft taxiing visualization.`,
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
    description: `UC Berkeley’s web development club that partners with high-growth startups and clubs to take on full-stack projects.`,
    technologies: ["React", "NodeJS", "Express.js", "MongoDB"],
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
    title: "Web Development at Berkeley Club Website",
    image: project2,
    link: "https://www.webatberkeley.org/",
    description:
      "Developed full-stack main website for Web Development at Berkeley. Implemented routes to enable dynamic page navigation. Integrated scalable data storage with RESTful API CRUD operations.",
    technologies: ["React", "NextJS", "Express.js", "Airtable Web API"],
  },
];

export const CONTACT = {
  email: "alexbchow@berkeley.edu",
};
