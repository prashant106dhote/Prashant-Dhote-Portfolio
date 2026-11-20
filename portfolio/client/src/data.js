import {
  Coffee, Braces, FileCode2, Palette, Atom, Wind, Server, Network, Webhook,
  Database, Table2, GitBranch, Github, Send, Terminal,
} from "lucide-react";

// Empty strings ("") are placeholders. Fill them in; the UI shows "coming soon" states until then.

export const profile = {
  name: "Prashant Dhote",
  title: "Full Stack Developer",
  subtitle: "Aspiring Full Stack Developer",
  location: "Betul, Madhya Pradesh, India",
  intro:
    "I build modern, responsive web applications with React, Node.js and MongoDB, turning ideas into clean interfaces and reliable back ends.",
  roles: ["Full Stack Developer", "React.js Developer", "JavaScript Developer"],
  github: "https://github.com/prashant106dhote",
  linkedin: "https://www.linkedin.com/in/prashant-dhote-4a3367256/",
  resume: "/Prashant_Dhote_Resume.pdf", // put your PDF in client/public with this name
  email: "pdhote106@gmail.com", // TODO: shown in the footer/contact text
};

export const about = {
  paragraphs: [
    "I’m a B.Tech student in Computer Engineering and Information Technology at SIRT Bhopal (graduating in 2027), with a diploma in Computer Science from Government Polytechnic College Betul.",
    "I enjoy building full stack applications with the MERN stack. My internship experience at NeithFlow Technology and CodSoft gave me hands-on practice with real development workflows.",
    "I like breaking problems down step by step, learning new tools quickly, and building real-world applications that people can actually use. My goal is to grow into a skilled software developer.",
  ],
  facts: [
    ["Location", "Betul, Madhya Pradesh"],
    ["Education", "B.Tech, SIRT Bhopal (2027)"],
    ["Focus", "Full Stack Web Development"],
    ["Status", "Fresher with internship experience"],
  ],
  traits: ["Problem solving", "Eager to learn", "Builds real-world apps"],
};

export const skillGroups = [
  { title: "Programming", skills: [["Java", Coffee], ["JavaScript", Braces]] },
  { title: "Frontend", skills: [["HTML", FileCode2], ["CSS", Palette], ["React.js", Atom], ["Tailwind CSS", Wind]] },
  { title: "Backend", skills: [["Node.js", Server], ["Express.js", Network], ["REST APIs", Webhook]] },
  { title: "Database", skills: [["MongoDB", Database], ["MySQL", Table2]] },
  { title: "Tools", skills: [["Git", GitBranch], ["GitHub", Github], ["Postman", Send], ["VS Code", Terminal]] },
];

// TODO: confirm each project's tech tags, then add github/live URLs and screenshots (image: "/projects/name.png").
export const projects = [
  {
    name: "College Management System",
    desc: "A web application for managing college-related information and operations.",
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/prashant106dhote", live: "", image: "accets/college.png",
  },
  {
    name: "QuickGPT",
    desc: "An AI-based application.",
    tags: ["React.js", "Node.js", "AI"],
    github: "https://github.com/prashant106dhote", live: "https://ai-dra-chatbot-online-offline-gx9a-git-main-super8.vercel.app/", image: "accets/gpt.png",
  },
  {
    name: "Wanderlust",
    desc: "A web application for exploring and managing travel listings.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/prashant106dhote", live: "https://major-project-3-bap1.onrender.com/listings", image: "accets/traval.png",
  },
  {
    name: "Smart Food Donation System",
    desc: "A food donation platform connecting donors with NGOs.",
    contribution: "My contribution: frontend, including the donor dashboard, donation creation and donation status tracking.",
    tags: ["React.js", "Frontend"],
    github: "https://github.com/prashant106dhote", live: "", image: "accets/food.png",
  },
];

export const experience = [
  {
    role: "Software Engineering Apprentice (MERN Stack)",
    org: "NeithFlow Technology",
    when: "Jul 2026 – Aug 2026",
    points: ["Worked on web development using the MERN stack as a Software Engineering Apprentice."], // TODO: add specific responsibilities
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    role: "Full Stack Developer (Virtual Internship)",
    org: "CodSoft",
    when: "May 2026 – Jun 2026",
    points: ["Completed full stack development tasks as part of a virtual internship."], // TODO: add specific tasks
    tech: [], // TODO: add technologies used
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Engineering and Information Technology",
    school: "SIRT Bhopal",
    when: "2024-2027",
    branch: "Computer Engineering and Information Technology",
    cgpa: "8.33/10", // TODO
  },
  {
    degree: "Diploma in Computer Science",
    school: "Government Polytechnic College Betul",
    when: "2021-2024", // TODO: years
    branch: "Computer Science & Engineering",
    cgpa: "8.28/10", // TODO
  },
];

export const certificates = [
  { title: "Java Programming", issuer: "NPTEL", detail: "Gold Certificate, 93%", image: "accets/java.png", verify: "accets/java.png" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL", detail: "Course certificate", image: "accets/ml.png", verify: "accets/ml.png" },
  { title: "Career Edge", issuer: "TCS iON", detail: "Career readiness program", image: "accets/tcs.png", verify: "accets/tcs.png" },
  { title: "Prompt Engineering and GitHub Copilot", issuer: "Microsoft", detail: "Course certificate", image: "accets/promt eng.-github copilot.png", verify: "accets/promt eng.-github copilot.png" },
];
