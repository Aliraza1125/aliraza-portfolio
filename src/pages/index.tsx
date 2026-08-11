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
        title="Ali Raza | Senior Software Engineer | Full-Stack & SaaS"
        description="Ali Raza is a Senior Software Engineer specializing in full-stack SaaS development, AI integrations, scalable web applications, data workflows, and cloud infrastructure using React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, and AWS."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Ali Raza | Senior Software Engineer | Full-Stack & SaaS",
          description:
            "Senior Software Engineer specializing in full-stack SaaS development, AI integrations, scalable web applications, data workflows, and cloud infrastructure using React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, and AWS.",
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
              "Senior Software Engineer, Full Stack Developer, Full Stack Engineer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, TypeScript Developer, Python Developer, SaaS Development, AI Integration, Data Engineering, Data Migration, ETL, Data Transformation, Data Validation, MongoDB, PostgreSQL, AWS, REST API, Cloud Development",
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
