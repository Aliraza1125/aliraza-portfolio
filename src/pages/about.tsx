import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Ali Raza | Senior Software Engineer"
        description="Learn more about Ali Raza, a Senior Software Engineer with 5+ years of experience building scalable SaaS platforms, AI-powered applications, enterprise systems, data-driven applications, and cloud-based solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "About Ali Raza | Senior Software Engineer",
          description:
            "Senior Software Engineer specializing in full-stack development, SaaS, AI integrations, data workflows, scalable APIs, and cloud infrastructure.",
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
              "Senior Software Engineer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, TypeScript, Python, MongoDB, PostgreSQL, AWS, SaaS Development, AI Integration, Data Engineering, Data Migration, ETL, REST APIs, Cloud Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
