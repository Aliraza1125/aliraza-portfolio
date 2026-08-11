import {
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiFlask,
  SiSocketdotio,
  SiPrisma,
  SiMongoose,
  SiNextdotjs,
  SiReactquery,
  SiBootstrap,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiMicrosoftexcel,
  SiOpenai,
  SiChatbot,
  SiStripe,
  SiFlutter,
  SiDart,
  SiVercel,
  SiNetlify,
  SiRender,
  SiLinux,
  SiNginx,
  SiPm2,
  SiGithubactions,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiSwagger,
  SiFigma,
  SiJira,
  SiTrello,
  SiSlack,
  SiJsonwebtokens,
  SiAuth0,
} from "react-icons/si";
import {
  ShadcnUiIcon,
  DrizzleOrmIcon,
  ClaudeAiIcon,
  RagIcon,
  RestApiIcon,
  ApiIntegrationIcon,
  DataMigrationIcon,
  EtlWorkflowIcon,
  DataTransformIcon,
  DataReconciliationIcon,
  CheckIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";

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
    sectionName: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "React Query",
        icon: SiReactquery,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "Material UI",
        icon: MuiSvg,
      },
      {
        name: "Shadcn UI",
        icon: ShadcnUiIcon,
      },
      {
        name: "HTML5",
        icon: HtmlSvg,
      },
      {
        name: "CSS3",
        icon: CsssSvg,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
    ],
  },
  {
    sectionName: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "NestJS",
        icon: SiNestjs,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "REST API",
        icon: RestApiIcon,
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
      {
        name: "OAuth",
        icon: SiAuth0,
      },
      {
        name: "WebSockets",
        icon: SiSocketdotio,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "Drizzle ORM",
        icon: DrizzleOrmIcon,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
    ],
  },
  {
    sectionName: "Databases & Data",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Supabase",
        icon: SiSupabase,
      },
      {
        name: "Firebase Firestore",
        icon: SiFirebase,
      },
      {
        name: "MongoDB Aggregation",
        icon: MongoDBSvg,
      },
      {
        name: "Data Migration",
        icon: DataMigrationIcon,
      },
      {
        name: "ETL Workflows",
        icon: EtlWorkflowIcon,
      },
      {
        name: "Data Transformation",
        icon: DataTransformIcon,
      },
      {
        name: "Data Validation",
        icon: CheckIcon,
      },
      {
        name: "Data Reconciliation",
        icon: DataReconciliationIcon,
      },
      {
        name: "CSV / Excel Processing",
        icon: SiMicrosoftexcel,
      },
    ],
  },
  {
    sectionName: "AI & Integrations",
    skills: [
      {
        name: "OpenAI API",
        icon: SiOpenai,
      },
      {
        name: "Claude API",
        icon: ClaudeAiIcon,
      },
      {
        name: "AI Chatbots",
        icon: SiChatbot,
      },
      {
        name: "RAG",
        icon: RagIcon,
      },
      {
        name: "Stripe",
        icon: SiStripe,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "REST APIs",
        icon: RestApiIcon,
      },
      {
        name: "Third-party API Integration",
        icon: ApiIntegrationIcon,
      },
    ],
  },
  {
    sectionName: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "Render",
        icon: SiRender,
      },
      {
        name: "VPS",
        icon: SiLinux,
      },
      {
        name: "Nginx",
        icon: SiNginx,
      },
      {
        name: "PM2",
        icon: SiPm2,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
    ],
  },
  {
    sectionName: "Mobile",
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
    sectionName: "Tools",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "GitLab",
        icon: SiGitlab,
      },
      {
        name: "Bitbucket",
        icon: SiBitbucket,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "Jira",
        icon: SiJira,
      },
      {
        name: "Trello",
        icon: SiTrello,
      },
      {
        name: "Slack",
        icon: SiSlack,
      },
    ],
  },
];
