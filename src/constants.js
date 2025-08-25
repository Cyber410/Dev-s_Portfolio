// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import jiraLogo from './assets/tech_logo/jira.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import intellijLogo from './assets/tech_logo/intellij.png';
import eclipseLogo from './assets/tech_logo/eclipse.png';

// Experience Section Logo's, Education Section Logo's
import sheridanLogo from './assets/company_logo/sheridan.png';




// Project Section Logo's
import ecommerceLogo from './assets/work_logo/ecommerce.png';
import albummanagerLogo from './assets/work_logo/albumManager.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo }

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jira', logo: jiraLogo },
      { name: 'IntelliJ', logo: intellijLogo},
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Eclipse', logo: eclipseLogo },
      
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: sheridanLogo, // Import or define the logo for Sheridan College
    role: "IT Support & Classroom Technician (Internship)",
    company: "Sheridan College – Brampton, ON",
    date: "Jan 2025 – Apr 2025",
    desc: "Provided technical support for classroom equipment, including projectors, computers, and networking devices, ensuring smooth operation during lectures and labs. Assisted faculty and students in troubleshooting software, hardware, and connectivity issues to improve overall classroom efficiency. Installed and configured operating systems, applications, and updates on Windows and Linux-based systems. Collaborated with the IT team to maintain and monitor campus systems while documenting issues and resolutions for future reference. Delivered clear communication and training to non-technical users, enhancing problem-solving and interpersonal skills.",
    skills: [
      "Windows",
      "Linux",
      "Networking",
      "Troubleshooting",
      "System Configuration",
      "Technical Support",
      "Communication Skills",
    ],
  },
];

  
  export const education = [
  {
    id: 0,
    img: sheridanLogo, 
    school: "Sheridan College - Oakville, ON",
    date: "September 2023 - December 2026",
    grade: "3.58/4.0 GPA", 
    desc: "Currently pursuing a Advance diploma in Computer Systems Technology - Analysis and Design at Sheridan College, Oakville. The program equips me with advanced knowledge in system design, enterprise application development, and modern programming methodologies. Gaining hands-on experience with technologies including Java (Spring Boot), web programming, and mobile web app development, while improving problem-solving and technical communication skills.",
    degree: "Computer Systems Technology - Analysis and Design",
    coursework: [
      "Enterprise Java Development (Spring Boot)",
      "Web Programming",
      "Software Design",
      "Mobile Web App Development",
      "Technical Communication",
    ],
  },
];

  
  export const projects = [
  {
    id: 0,
    title: "E-Commerce Platform – Full-Stack (Java + React)",
    description:
      "A full-featured e-commerce web application built with Java (Spring Boot) for backend APIs and React for the frontend. The platform provides a seamless shopping experience with modern UI and robust backend architecture. Key features include product management, secure authentication & authorization, shopping cart & checkout, payment integration, order management, and real-time search & filters. Designed with responsive layouts and strong security measures.(Working on FrontEnd)",
    image: ecommerceLogo, // Add or import a logo/image for your project
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Spring Security",
      "JWT",
      "MySQL/MongoDB",
      "Tailwind CSS / Bootstrap",
      "Axios",
      "Redux / Context API",
      "Stripe / PayPal",
    ],
    github: "https://github.com/Cyber410/Ecom-Java",
    webapp: "", // add deployed link if available
  },
  {
    id: 1,
    title: "Album Manager – Full Stack Web App",
    description:
      "A full-featured photo album management application built with Spring Boot (backend) and React (frontend). Users can securely sign up, log in, and perform CRUD operations on albums and photos. Key features include JWT & OAuth2 authentication, album & photo management, image upload, API documentation with Swagger UI, and a clean monorepo-style structure ready for deployment.",
    image: albummanagerLogo, // Add or import a logo/image for this project
    tags: [
      "Spring Boot",
      "React",
      "Spring Security",
      "OAuth2",
      "JWT",
      "JPA/Hibernate",
      "MySQL / H2",
      "Axios",
      "React Router",
      "Bootstrap / CSS Modules",
    ],
    github: "https://github.com/Cyber410/Album-Manager-Fullstack",
    webapp: "", // add deployed link if available
  },
];
