import { image } from "framer-motion/client";

export const portfolioData = {
  name: "Mo Rehan",
  role: "Full Stack Developer",
  location: "Raipur, Chhattisgarh",
  phone: "+91 7803997187",
  email: "rehanchanija@gmail.com",
  summary:
    "3+ years of experience building modern web and mobile applications using React.js, Next.js, Node.js, NestJS, MongoDB, Prisma, and React Native. Skilled in frontend architecture, backend API development, database design, and scalable product delivery.",
  heroSummary:
    "3+ years experience building web, mobile, government, and enterprise applications",
  resumeLink: "/CV_MO_REHAN_2026.pdf", // User to provide or placeholder
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/mo-rehan-chanija-17121b291/",
    naukri: "https://naukri.com",
  },
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    backend: [
      "Node.js",
      "NestJS",
      "MongoDB",
      "Prisma",
      "GraphQL",
      "AWS S3",
      "Firebase Realtime Database",
    ],
    mobile: ["React Native", "REST API Integration", "Firebase"],
    ai: ["Whisper", "Ollama", "Mistral", "Coqui TTS"],
  },
  experience: [
    {
      company: "NB Digital Technologies",
      role: "Full Stack Developer",
      period: "June 2024 – Present",
      description:
        "Leading the architectural design and end-to-end development of high-impact government platforms like Baster-Nirman, managing everything from complex NestJS backends to responsive Next.js dashboards and field-ready React Native apps.",
    },
    {
      company: "TheTimeStack Technology",
      role: "Frontend Developer",
      period: "April 2022 – May 2024",
      description:
        "Contributed to various projects with a focus on frontend development and full-stack contributions.",
    },
  ],
  projects: [
    {
      slug: "cmo-gallery",
      title: "CMO Gallery (Hamar CM)",
      category: "Government Project",
      description:
        "A high-performance media dissemination platform designed for the Chhattisgarh Government. It serves as a digital hub for citizens, journalists, and government officials to access official media content in real-time.",
      tech: ["React Native", "Redux Toolkit", "YouTube Live", "Localization"],
      image: "/images/CMO1.png",
      images: ["/images/CMO1.png", "/images/CMO2.png"],
      highlight: true,
      layout: "mobile",
      liveLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      sourceLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      details: {
        overview:
          "The CMO Gallery acts as the primary digital asset management system for the Chief Minister's Office. It integrates live broadcasting, multimedia repositories, and interactive gazettes into a single mobile experience.",
        features: [
          {
            title: "Live Event Broadcasting",
            description:
              "Integrates YouTube Live to stream government events and speeches directly to the mobile app.",
          },
          {
            title: "Multimedia Repository",
            description:
              "Houses a massive library of high-resolution photographs and videos categorized by events and departments.",
          },
          {
            title: "Jan Patrika (Citizen Gazetter)",
            description:
              "Provides access to official government newsletters and monthly magazines in PDF format.",
          },
          {
            title: "Interactive Galleries",
            description:
              "Masonry-style photo gallery with advanced filtering (Events with CM vs General Events).",
          },
          {
            title: "Localization System",
            description:
              "Custom translation engine allowing instant switching between Hindi and English.",
          },
        ],
        techStack: [
          {
            component: "Frontend",
            tech: "React Native (v0.79.1)",
            purpose: "Cross-platform mobile development",
          },
          {
            component: "State",
            tech: "Redux Toolkit",
            purpose: "Centralized management for app-wide data",
          },
          {
            component: "Media",
            tech: "react-native-youtube-iframe",
            purpose: "Embedded video playback",
          },
          {
            component: "Animations",
            tech: "Lottie",
            purpose: "Premium vector animations on loaders",
          },
        ],
        workflow: [
          {
            step: "Bootstrap",
            content:
              "On launch, the app verifies connectivity and session state via Redux.",
          },
          {
            step: "API Integration",
            content:
              "Calls tailored backend REST APIs to fetch normalized media data.",
          },
          {
            step: "UX Flow",
            content:
              "Parallel API calls trigger Stories, Notices, and Event Galleries for a seamless experience.",
          },
        ],
      },
    },
    {
      slug: "bastar-nirman",
      title: "Bastar Nirman",
      category: "Government Project",
      description:
        "A comprehensive infrastructure management suite architected and developed by me from scratch, including the robust Backend API, the Web Admin Dashboard, and the Cross-Platform Mobile Application.",
      tech: ["NestJS", "Next.js", "React Native", "MongoDB", "AWS S3"],
      image: "/images/bastar/bastar1.png",
      images: [
        "/images/bastar/bastar1.png",
        "/images/bastar/bastar2.jpeg",
        "/images/bastar/bastar3.jpeg",
        "/images/bastar/bastar4.jpeg",
      ],
      highlight: true,
      layout: "mobile",
      liveLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      sourceLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      details: {
        overview:
          "Baster-Nirman is a full-stack engineering achievement where I handled everything from database architecture and NestJS backend development to the interactive Next.js admin portal and the React Native field reporting app.",
        features: [
          {
            title: "Centralized Engine",
            description:
              "Backend managing relationships between hierarchical master data, contractors, and project stages.",
          },
          {
            title: "Admin Command Center",
            description:
              "Dashboard for monitoring project lifecycles from 'Ongoing Tender' to 'Completed' with visual analytics.",
          },
          {
            title: "Field Tool (App)",
            description:
              "Real-time reporting for engineers with geolocation-tagged attendance and offline photo capturing.",
          },
          {
            title: "Geospatial Tracking",
            description:
              "Map integration (Leaflet/Google Maps) to visualize project distributions across districts.",
          },
        ],
        techStack: [
          {
            component: "Backend",
            tech: "NestJS (TypeScript)",
            purpose: "Robust, scalable API architecture",
          },
          {
            component: "Admin Panel",
            tech: "Next.js (App Router)",
            purpose: "High-performance dashboard with Tailwind & Radix UI",
          },
          {
            component: "Mobile App",
            tech: "React Native",
            purpose: "Cross-platform reporting tool for field staff",
          },
          {
            component: "Database",
            tech: "MongoDB (Mongoose)",
            purpose: "Flexible NoSQL schema for complex project logs",
          },
        ],
        workflow: [
          {
            step: "Initialization",
            content:
              "Admins set up master data (Regions, Work Types, Schemes) in the Admin Panel.",
          },
          {
            step: "Tracking",
            content:
              "Field staff use the app to log progress with photos; updates trigger Stage Trackers in the backend.",
          },
          {
            step: "Audit",
            content:
              "Admins review logs and photos for approval or rejection (for corrections).",
          },
        ],
      },
    },
    {
      slug: "nakoda-tmt",
      title: "Nakoda TMT",
      category: "Enterprise Admin Management System",
      description:
        "A sophisticated enterprise management platform designed to streamline operations, sales tracking, and distribution networks for steel manufacturing units.",
      tech: ["Next.js 15", "Firebase", "Radix UI", "Tailwind 4.0", "Recharts"],
      image: "/images/nakoda.png",
      images: ["/images/nakoda.png"],
      layout: "desktop",
      liveLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      sourceLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      details: {
        overview:
          "The Nakoda TMT admin panel acts as the central hub for overseeing the entire business ecosystem, including dealers, sub-dealers, sales tracking, and field surveys.",
        features: [
          {
            title: "Order Management",
            description:
              "System to manage orders, track fulfillments, and view granular order history.",
          },
          {
            title: "Dealer Network",
            description:
              "Manage the hierarchy of dealers and sub-dealers, including profiles and performance metrics.",
          },
          {
            title: "Live Tracking",
            description:
              "Integration of Google Maps for journey tracking of deliveries or field staff.",
          },
          {
            title: "Field Surveys (ASM)",
            description:
              "Tools for Area Sales Managers to conduct or review feedback from the field.",
          },
        ],
        techStack: [
          {
            component: "Framework",
            tech: "Next.js 15 (App Router)",
            purpose: "Server-side rendering and high performance",
          },
          {
            component: "Backend",
            tech: "Firebase",
            purpose: "Real-time data, auth, and cloud functions",
          },
          {
            component: "Analytics",
            tech: "Recharts",
            purpose: "Interactive business analytics and sales charts",
          },
          {
            component: "UI",
            tech: "Tailwind 4.0 + Radix",
            purpose: "Premium 'v0' design aesthetic with clean components",
          },
        ],
        workflow: [
          {
            step: "Orders",
            content:
              "Dealers place orders which are tracked through various fulfillment stages.",
          },
          {
            step: "Tracking",
            content:
              "Live monitoring of ASM movements and delivery journeys on integrated maps.",
          },
          {
            step: "Reporting",
            content:
              "Data visualization for sales performance and incentive program management.",
          },
        ],
      },
    },
    {
      slug: "kyksrjn",
      title: "KYKSRJN Ticketing Platform",
      category: "Web Platform",
      description:
        "A web-based ticketing platform developed for Khandelwal Yuva Kalyan Samaj Rajnandgaon, focused on easy ticket booking, smooth navigation, secure authentication, and mobile-friendly user experience.",
      tech: ["React.js", "Firebase", "Tailwind CSS"],
      layout: "desktop",
      images: [],

      liveLink: "https://khandelwalyuvamanch.org/",
      sourceLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
    },
    {
      slug: "chhattisgarh-herbal",
      title: "Chhattisgarh Herbal",
      category: "Ecommerce / Business Platform",
      description:
        "A business-oriented web platform developed with responsive frontend architecture and scalable UI modules to support digital product presentation and business operations.",
      tech: ["Next.js", "Tailwind CSS", "Scalable UI"],
      image: "/images/cg herbal.png",
      images: ["/images/cg herbal.png"],
      layout: "desktop",
      liveLink: "https://www.chhattisgarhherbal.com/",
      sourceLink: "https://github.com/nbdigitech/cg-herbal-frontend",
    },
    {
      slug: "ai-automation",
      title: "AI Voice Automation Platform",
      category: "Personal Research Project",
      description:
        "A personal research project focused on building a voice-based AI automation system inspired by Vapi, designed for speech understanding, AI-generated voice responses, and structured order/data processing using low-cost local AI models.",
      tech: [
        "NestJS",
        "Whisper",
        "Ollama",
        "Mistral",
        "PostgreSQL",
        "Prisma",
        "Coqui TTS",
      ],
      images: [],
      layout: "desktop",
      liveLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
      sourceLink:
        "https://github.com/nbdigitech?tab=repositories&q=&type=&language=&sort",
    },
  ],
  aiResearch: {
    title: "AI Voice Automation Platform",
    description:
      "Voice AI platform inspired by Vapi using a low-cost local AI stack.",
    stack: [
      "NestJS",
      "Whisper",
      "Ollama + Mistral",
      "PostgreSQL",
      "Prisma",
      "Coqui TTS",
    ],
  },
};
