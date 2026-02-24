/**
 * Portfolio content — professional, ATS-friendly copy for a mid-level frontend developer.
 */

export const hero = {
  greeting: "Hi, I'm",
  name: "Nischal Shrestha",
  headline: "Frontend Developer",
  subline: "React · TypeScript · Scalable UIs",
  intro:
    "I build responsive, production-ready web applications with React and TypeScript. Focused on clean architecture, API integration, and delivering features that ship.",
  ctaPrimary: "View my work",
  ctaSecondary: "Get in touch",
  ctaResume: "Resume",
  /** PDF in public folder: use path from root, e.g. /filename.pdf */
  resumeUrl: "/nischal-shresth-resume.pdf",
} as const;

export const about = {
  title: "About Me",
  bio: "I'm a frontend developer with a year of hands-on experience building web applications for international clients and product teams. I work across the full frontend stack—from component design and state management to API integration and cross-team collaboration.",
  careerStory:
    "After completing internships in Lalitpur and joining a research-focused product company in Kathmandu, I moved into contract work for a Canadian client, building a property management system used by multiple apartment organizations. I'm currently finishing my BCA at Madan Bhandari Memorial College while shipping production code remotely.",
  strengths: [
    "Turning designs and requirements into maintainable React applications",
    "Integrating REST APIs with clear error handling and loading states",
    "Working closely with designers and backend developers in agile setups",
    "Writing readable, reusable code with TypeScript and modern JavaScript",
  ],
} as const;

export const skills = {
  title: "Skills",
  groups: [
    {
      label: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      label: "State & data",
      items: ["React Hooks", "Context API", "REST APIs"],
    },
    {
      label: "Tools & backend",
      items: ["Git & GitHub", "Postman", "Express.js (basic)", "PostgreSQL"],
    },
  ],
} as const;

export const experience = {
  title: "Experience",
  jobs: [
    {
      role: "React Frontend Developer (Contract)",
      company: "International Client (Canada)",
      project: "Strata Management System",
      period: "Oct 2025 – Present",
      location: "Remote",
      bullets: [
        "Built a property management platform supporting multiple apartment buildings and resident workflows.",
        "Implemented resident profiles, vehicle management, and amenities booking with clear UX.",
        "Developed drag-and-drop task management UI and integrated with backend APIs.",
        "Managed application state and collaborated with stakeholders to deliver production-ready features.",
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Center of Research and Development Pvt. Ltd",
      location: "Kathmandu",
      period: "Dec 2024 – Jan 2026",
      bullets: [
        "Developed production-level React applications using JavaScript and TypeScript.",
        "Built reusable UI components and maintained consistent design patterns.",
        "Integrated REST APIs with structured error handling and loading states.",
        "Used React Hooks and Context API for state management; collaborated with designers and backend team.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Info Developers Pvt. Ltd",
      location: "Lalitpur",
      period: "Jul 2024 – Oct 2024",
      bullets: [
        "Contributed to frontend features and learned production development practices.",
        "Gained experience with React, version control, and team workflows.",
      ],
    },
  ],
} as const;

export const education = {
  title: "Education",
  items: [
    { degree: "Bachelor of Computer Applications (BCA)", school: "Madan Bhandari Memorial College, Kathmandu", status: "Currently studying" },
    { degree: "+2 Science", school: "Manakamana Higher Secondary School, Kathmandu", status: "" },
  ],
} as const;

export const projects = {
  title: "Selected Projects",
  list: [
    {
      name: "Strata Management System",
      client: "Canada (International Client)",
      description:
        "Property management platform for apartment organizations: resident and vehicle management, amenities booking, and drag-and-drop task boards. Built with React and integrated with backend APIs.",
      impact: "Supports multiple buildings and streamlines day-to-day operations for property managers.",
      tags: ["React", "TypeScript", "REST API", "State management"],
      link: null,
    },
    {
      name: "Skin Clinic Management System",
      client: null,
      description:
        "Full workflow for clinic operations: appointment booking, patient records, and treatment tracking. Designed for clarity and quick access for staff.",
      impact: "Centralizes scheduling and patient data in one interface.",
      tags: ["React", "JavaScript", "UI/UX"],
      link: null,
    },
    {
      name: "Remittance Management System",
      client: "Multi-tenant",
      description:
        "Tenant-based financial tracking system with role-aware access and reporting. Handles multiple organizations on a single platform.",
      impact: "Enables secure, organized remittance tracking per tenant.",
      tags: ["React", "Multi-tenant", "REST API"],
      link: null,
    },
    {
      name: "Inventory Management System",
      client: null,
      description:
        "Stock tracking, role-based access, and reporting for inventory control. College project demonstrating full-stack capabilities.",
      impact: "Demonstrates end-to-end feature delivery with clear separation of concerns.",
      tags: ["React", "Express", "PostgreSQL"],
      link: "https://github.com/Nischll/college-project.git",
    },
  ],
} as const;

export const contact = {
  title: "Get in touch",
  message:
    "I'm open to frontend roles and contract work. If you have a project or role in mind, reach out—I'll get back to you quickly.",
  email: "mailto:nnischal9156@gmail.com",
  emailLabel: "Email me",
  linkedInUrl: "https://www.linkedin.com/in/nischal-shrestha-career",
  linkedInLabel: "LinkedIn",
  githubUrl: "https://github.com/Nischll",
  githubLabel: "GitHub",
  /** Same as hero.resumeUrl — PDF in public folder, path from root */
  resumeUrl: "/nischal-shresth-resume.pdf",
  resumeLabel: "Resume",
  /** WhatsApp: wa.me/ + country code + number (no + or spaces) */
  whatsappUrl: "https://wa.me/9779823744524",
  whatsappLabel: "WhatsApp",
} as const;
