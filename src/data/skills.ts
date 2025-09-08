import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
  SiBootstrap,
  SiVuedotjs,
  SiMysql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiLinux,
  SiMicrosoftazure,
  SiGithubactions,
  SiCplusplus,
  SiNestjs,
  SiJsonwebtokens,
  SiAuth0,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript ES6+",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
    ],
  },
  {
    sectionName: "Frontend Libraries & Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Vue.js",
        icon: SiVuedotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "NestJS",
        icon: SiNestjs,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Authentication & Security",
    skills: [
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
      {
        name: "Auth0",
        icon: SiAuth0,
      },
      {
        name: "Firebase Auth",
        icon: SiFirebase,
      },
      {
        name: "Passport.js",
        icon: SiNextdotjs,
      },
      {
        name: "NextAuth.js",
        icon: SiNextdotjs,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
  {
    sectionName: "Mobile Application Development",
    skills: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: SiDart,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    sectionName: "Hosting & Deployment",
    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "Heroku",
        icon: SiHeroku,
      },
      {
        name: "VPS",
        icon: SiLinux,
      },
      {
        name: "Microsoft Azure",
        icon: SiMicrosoftazure,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
