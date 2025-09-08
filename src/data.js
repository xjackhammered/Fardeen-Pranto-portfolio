import mepic from './assets/me.jpg'
import bg from './assets/pic.jpg'

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroData = {
  name: "Fardeen Ameen Pranto",
  title: "Software Engineer",
  profileImage: mepic,
  backgroundImage: bg,
};

export const aboutData = {
  heading: "About Me",
  description: [
    `I am a passionate software engineer with a love for coding and technology...`,
    `I enjoy solving complex problems and building innovative solutions...`,
    `I'm always eager to collaborate with like-minded individuals...`,
    `Feel free to explore my projects and get in touch!`,
  ],
};

export const projects = [
  {
    id: 1,
    title: "Blockchain-based EHR",
    image: "./blockchain.png",
    description:
      "An Electronic Health Record (EHR) system that uses blockchain technology...",
    link: "https://github.com/xjackhammered/EHR-Besu-Blockchain",
  },
  {
    id: 2,
    title: "Blockchain-based EHR",
    image: "./blockchain.png",
    description:
      "An Electronic Health Record (EHR) system that uses blockchain technology...",
    link: "#",
  },
  {
    id: 3,
    title: "Blockchain-based EHR",
    image: "./blockchain.png",
    description:
      "An Electronic Health Record (EHR) system that uses blockchain technology...",
    link: "#",
  },
];

export const contactInfo = {
  email: "fardeenpranto7@gmail.com",
  phone: "01751810506",
  socials: [
    {
      id: "facebook",
      url: "http://facebook.com/profile.php?id=61571740003631",
      icon: "fab fa-facebook",
    },
    {
      id: "linkedin",
      url: "http://linkedin.com/in/fardeen-pranto-a34214246",
      icon: "fab fa-linkedin",
    },
  ],
  resume:
    "https://drive.google.com/file/d/1v0g3Xk7q5x8r6j9cJm1z4Zl5Gf7Qe8hO/view?usp=sharing",
};
