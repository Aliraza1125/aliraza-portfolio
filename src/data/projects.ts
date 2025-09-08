import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "LSAT Goats",
    href: "https://lsatgoats.com/",
    tags: ["Nextjs", "Tailwindcss", "typescript", "lsatprep", "MongoDB"],
    description: "Master the LSAT (Law School Admission Test) with Ease",
    image: {
      LIGHT: "/images/projects/lsatgoatslight.png",
      DARK: "/images/projects/lsatgoatsdark.png",
    },
  },
  {
    index: 1,
    title: "LUTBuilder.ai",
    href: "https://www.lutbuilder.ai/",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "NextAuth",
      "MongoDB",
      "AI/ML",
      "Python",
      "Nodejs",
    ],
    description: "AI-powered LUT generation and Color Grading",
    image: {
      LIGHT: "/images/projects/lutbuilderlight.png",
      DARK: "/images/projects/lutbuilderlight.png",
    },
  },
  {
    index: 2,
    title: "Nuriy Jewelry",
    href: "https://nuriy-jewelry-frontend.vercel.app/",
    tags: [
      "Reactjs",
      "Vite",
      "Tailwindcss",
      "Vercel",
      "Redux",
      "Nodejs",
      "Postgress",
    ],
    description: "Elegant Jewelry E-commerce Experience",
    image: {
      LIGHT: "/images/projects/nuriylight.png",
      DARK: "/images/projects/nuriylight.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "LSAT Goats",
    favicon: "/images/projects/lsatlogo.png",
    imageUrl: [
      "/images/projects/lsatgoats1.png",
      "/images/projects/lsatgoatslight.png",
      "/images/projects/lsatgoats2.png",
      "/images/projects/lsatgoats3.png",
      "/images/projects/lsatgoats4.png",
    ],
    description:
      "Full-stack LSAT prep platform with multi-mode practice (full tests, sections, drills), real-time analytics, smart filtering, and performance tracking. Developed with Next.js 14, MongoDB, Tailwind CSS, and NextAuth.js, featuring responsive UI, admin panel, and role-based access with 20+ data models and 40+ API endpoints.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://lsatgoats.com/",
  },
  {
    name: "LUTBuilder.ai",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/11.png",
      "/images/projects/22.png",
      "/images/projects/33.png",
      "/images/projects/44.png",
      "/images/projects/55.png",
    ],
    description:
      "AI-powered platform for filmmakers and editors to generate professional LUTs by uploading reference images or choosing presets. Built a sleek, responsive web app with real-time previews and export options (.cube/.3dl). Supports camera-specific LUTs (ARRI, Sony, RED) using ML models for cinematic accuracy. Developed with Next.js, Tailwind CSS, MongoDB, NextAuth.js, Node.js & Python.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.lutbuilder.ai/",
  },
  {
    name: "Nuriy Jewelry",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/nuriylight.png",
      "/images/projects/nuriy1.png",
      "/images/projects/nuriy2.png",
      "/images/projects/nuriy3.png",
      "/images/projects/nuriy4.png",
    ],
    description:
      "Full-stack multi-vendor jewelry e-commerce platform with secure payment processing, inventory management, and vendor dashboard. Built with React.js, Vite, Tailwind CSS, Redux, Node.js/Express, and PostgreSQL. Features user authentication, order tracking, and responsive design.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://nuriy-jewelry-frontend.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio1.png",
      "/images/projects/portfoliolight.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/Aliraza1125/aliraza-portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Still Collab",
    favicon: "/images/projects/logo-icon-stillcolab.png",
    imageUrl: [
      "/images/projects/stillcolllab1.png",
      "/images/projects/stillcolllab2.png",
      "/images/projects/stillcolllab3.png",
    ],
    description:
      "StillCollab is a creator-focused collaboration tool that helps teams organize, tag, and search creative assets like videos, photos, and designs for smoother workflows.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.stillcollab.com/",
  },
  {
    name: "Hybrid Writer",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/hybrid2.png",
      "/images/projects/hybrid3.png",
      "/images/projects/hybrid1.png",
    ],
    description:
      "Hybrid Writer is a service where real human writers edit your AI-generated text to make it sound natural and avoid detection—just paste your content, and they polish it for you.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://hybrid-writer-next.vercel.app/",
  },
  {
    name: "iMe.life",
    favicon: "/images/projects/faviconime.ico",
    imageUrl: [
      "/images/projects/ime1.png",
      "/images/projects/ime2.png",
      "/images/projects/ime3.png",
    ],
    description:
      "iMe is an AI-powered well-being platform designed for workplaces. It provides employees with personalized insights, private coaching, and tools to improve focus, mental health, and productivity—helping teams stay healthier and perform better.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://ime.life/",
  },
  {
    name: "Wolf of Arches",
    favicon: "/images/projects/faviconime.ico",
    imageUrl: [
      "/images/projects/autarxia1.png",
      "/images/projects/autarxia2.png",
      "/images/projects/autarxia3.png",
    ],
    description:
      "Wolf of Arches is a dental clinic support service that ensures potential patients are promptly engaged—offering real-time, personalized responses, 24/7 appointment scheduling, and proactive lead tracking. Their human-trained agents handle inquiries swiftly and personally, ensuring no appointment opportunity is missed while keeping your clinic's calendar full.The platform is built with React, Redux, Node.js, Express, and PostgreSQL for speed, scalability, and reliability.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://portal.wolfofarches.com/",
  },
  {
    name: "Autarxia",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/autarxia1.png",
      "/images/projects/autarxia2.png",
      "/images/projects/autarxia3.png",
    ],
    description:
      "Autarxia is a comprehensive renewable energy management platform that empowers users to achieve complete energy independence through intelligent hybrid power systems. The application seamlessly integrates solar panels, energy storage units, mini power plants, and heat pumps with advanced automation algorithms for optimal energy distribution. Built with modern web technologies, it features real-time monitoring dashboards, automated grid switching capabilities, and modular system configuration tools that support both residential and commercial energy solutions.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://autarxia.vercel.app/",
  },
  {
    name: "Monchain",
    favicon: "/images/projects/favicon.ico",
    imageUrl: ["/images/projects/monchain1.png"],
    description:
      "Monchain is an AI-powered cryptocurrency security platform designed to protect digital assets through advanced machine learning algorithms. The application provides comprehensive security monitoring, threat detection, and risk assessment tools for crypto investors and traders. Built with modern web technologies, it features real-time portfolio protection, intelligent fraud detection systems, and automated security alerts that help users safeguard their cryptocurrency investments against potential threats and vulnerabilities.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://monchain.vercel.app/",
  },
  {
    name: "Jawwid",
    favicon: "/images/projects/favicon-jawwid.ico",
    imageUrl: ["/images/projects/jawwid1.png", "/images/projects/jawwid2.png"],
    description:
      "Jawwid is a comprehensive Islamic online academy platform that connects students with professional Quran tutors for personalized learning experiences. The application features video and audio streaming capabilities, interactive whiteboards, real-time text chat, and progress tracking systems. Built with React.js frontend, Node.js/Express backend, and SQL database, it supports multilingual instruction, automated progress reports, and structured curricula including Noorani Qaida methodology for beginners and advanced Tajweed courses for proper Quranic recitation.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://user.jawwid.com/",
  },
  {
    name: "Asyncware",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/asyncware1.png",
      "/images/projects/asyncware2.png",
      "/images/projects/asyncware3.png",
    ],
    description:
      "Asyncware is a professional software engineering consultancy platform that connects global enterprises with elite development talent. The application showcases comprehensive software engineering solutions and services, featuring modern web design, responsive layouts, and streamlined client engagement workflows. Built with Next.js and modern web technologies, it emphasizes talent acquisition, team building, and delivering innovative software solutions for enterprise clients seeking top-tier development expertise.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://asyncware.vercel.app/",
  },
  {
    name: "Boyzz",
    favicon: "/images/projects/Cover_Image.png",
    imageUrl: ["/images/projects/boyzz1.png", "/images/projects/boyzz2.png"],
    description:
      "Boyzz is a data-driven Female Delusion Calculator platform specifically designed for the Indian market that helps users assess the realistic probability of finding their ideal partner. The application processes statistical data from official Indian government sources including Census data, National Family Health Survey (NFHS), and Periodic Labour Force Survey (PLFS) to calculate match percentages based on criteria like age, height, income, marital status, and location. Built with React.js frontend, Node.js/Express backend, and SQL database, it provides users with a reality-check tool for dating expectations while offering insights into demographic trends and relationship standards.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://boyzz.in/",
  },
  {
    name: "LendLink",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/lend1.png",
      "/images/projects/lend2.png",
      "/images/projects/lend3.png",
    ],
    description:
      "LendLink is an AI-powered lead generation and outreach automation platform specifically designed for lenders and financial institutions. The application leverages advanced Large Language Models (LLM) to identify high-quality prospects, deliver personalized outreach campaigns, and streamline the sales process. Built with modern web technologies, it integrates with popular sales tools like Apollo, LinkedIn Sales Navigator, ZoomInfo, and RocketReach to provide comprehensive lead management, automated follow-ups, and performance-based pricing that ensures ROI for lending professionals.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://lend-link-test.vercel.app/",
  },
  {
    name: "Many Hands LLC",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/manyhands1.png",
      "/images/projects/manyhands2.png",
      "/images/projects/manyhands3.png",
    ],
    description:
      "Many Hands LLC is a professional film production company website founded by Bob Slaymaker, a Columbia and NYU-trained screenwriter, producer, and director. The platform showcases the company's film development and production services, featuring Bob's portfolio of twelve feature screenplays and six short films. Built with modern web technologies, the site serves as a digital hub for the independent film production company, highlighting creative projects, industry experience, and professional filmmaking services for clients seeking high-quality cinematic content.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.manyhandsllc.us/",
  },
  {
    name: "HelpiScribe",
    favicon: "/images/projects/favicon.ico",
    imageUrl: [
      "/images/projects/helpiscribe1.png",
      "/images/projects/helpiscribe2.png",
      "/images/projects/helpiscribe3.png",
    ],
    description:
      "HelpiScribe is a comprehensive AI-powered academic and career writing assistant platform designed to support students, researchers, and professionals in their writing endeavors. The application offers a suite of tools including literature review assistance, research paper writing support, academic essay guidance, resume building, and career document creation. Built with Next.js and Supabase, it provides intelligent writing suggestions, citation management, plagiarism checking, and formatting assistance to help users produce high-quality academic and professional content efficiently.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://www.helpiscribe.com/",
  },
];
