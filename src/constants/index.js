import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  django,
  pandas,
  matplot,
  numpy,
  mysql,
  canva,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  webapi,
  figma,
  docker,
  python,
  knrr,
  vjc,
  zp,
  carrent,
  jobit,
  gym,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },


  {
    id: "project",
    title: "Project",
  },

  {
    id: "work",
    title: "Education",
  },

  {
    id: "achievement",
    title: "Achievements",
  },



  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },


  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "webapi",
    icon: webapi,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "bootstrap",
    icon: numpy,
  },
  
];

const experiences = [
  {
    title: "Bachelor of Technology (B.Tech) ",
    company_name: "(Kasireddy Narayan Reddy College of Engineering and Research)",
    icon: knrr,  // Placeholder for the icon representing the college
    iconBg: "#383E56",
    date: "April 2020 - July 2024",
    
    points: [
      "Specilization in Computer Science and Engineering",
      "Gratuated in 2024 July",
      "percentage 72%",
      "Address Abdulapurmet ,Near to Ramoji film city,Rangareddy(dist) 501510",
     
    ],
  },
  {
    title: "Intermediate",
    company_name: "Vaagdevi junior Collage",
    icon: vjc,
    iconBg: "#E6DEDD",
    date: "April 2018 - 2020March",
    points: [
      "Specilization in MPC",
      "Graduated in 2020 March",
      "Percentage 70%",
      "Address jangidipuram colony Wanaparthy 509103.",
    ],
  },
  {
    title: "SSC",
    company_name: "ZP High School",
    icon: zp,
    iconBg: "#383E56",
    date: "March 2018",
    points: [
      "Passed out Year 2018 March",
      "Grade 7.5",
      "Adress Srirangapur Wanaparthy (dist) 509104",
    ],
  },
 


  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Python 101 for Data Science",
    designation: "Provided By IBM",
    company: "2024 Sep",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Project Management Job Simulation",
    designation: "By Accenture",
    company: "DEF Corp",
    image: "",

  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "advanced Software Engineering Job Simulation",
    designation: "By Walmart",
    company: "456 Enterprises",
       image:"" 
       },
];

const projects = [
  {
    name: "Z-Mart E-Commerce Project",
    description:
      "Full-stack web development experience using Django, React.js, and e-commerce concepts. Highlights real-world problem-solving in building dynamic applications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "WebPack",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GurkaDakesh4232/Z-mart-Ecommerce",
  },
  {
    name: "Black Bucket Biryani(online booking)",
    description:
      "The Black Bucket Biryani project provides a unique online platform for customers to order a flavorful,featuring a diverse menu, secure transactions, and real-time order tracking..",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql,django",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/GurkaDakesh4232/Black-Bucket-biryani-website",
  },
  {
    name: "Gemini Clone",
    description:
      
       "The Gemini Clone App is a modern web application that replicates the core features of Gemini, enabling users to connect, share, and discover content seamlessly.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GurkaDakesh4232/Gemini-clone",
  },


  {
    name: "GYM Management",
    description:
      
       "The Gym Management App is a platform designed to streamline gym operations, enabling easy membership management,performance tracking ,trainers..",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Pythob",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/GurkaDakesh4232/GYM-project-02-sep-2024",
  },
];









export { services, technologies, experiences, testimonials, projects };
