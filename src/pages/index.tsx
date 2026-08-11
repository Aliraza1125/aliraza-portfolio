import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ali Raza | Senior Software Engineer"
        description="Explore the professional portfolio of Ali Raza, a Senior Software Engineer with 5+ years of experience in Full-Stack JavaScript development. Discover SaaS platforms, AI applications, and enterprise software built with React.js, Next.js, Node.js, NestJS, and TypeScript."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Ali Raza - Senior Software Engineer",
          description:
            "Dive into the world of full-stack development with Ali Raza, a Senior Software Engineer with 5+ years of experience building scalable SaaS platforms, AI applications, dashboards, and e-commerce solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ali Raza - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Senior Software Engineer, Full Stack Developer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, NestJS, TypeScript, MongoDB, PostgreSQL, SaaS Development, AI Integration, OpenAI, Claude AI, Stripe, Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
