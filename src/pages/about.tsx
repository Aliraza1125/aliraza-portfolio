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
        description="Learn more about Ali Raza, a Senior Software Engineer with 5+ years of experience in Full-Stack JavaScript development. Discover the journey, skills, and experience behind scalable SaaS, AI, and enterprise applications."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Ali Raza - Senior Software Engineer",
          description:
            "Dive into the story of Ali Raza, a Senior Software Engineer. Uncover the experience, skills, and engineering practices behind scalable SaaS platforms, AI applications, and enterprise software.",
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
              "Senior Software Engineer, Full Stack Developer, React Developer, Next.js, Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, SaaS, AI Applications, Professional Journey, Skills, Experience, Education",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
