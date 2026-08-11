import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Ali Raza
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Senior Software Engineer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl text-justify">
              
                I'm a Senior Software Engineer with 5+ years of experience building
                scalable, production-ready software across{" "}
                <span className="font-semibold text-accent">SaaS</span>,{" "}
                <span className="font-semibold text-accent">AI</span>-powered,
                enterprise, EdTech, e-commerce, and business applications.
                <br />
                My core expertise includes{" "}
                <span className="font-semibold text-accent">React.js</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>,{" "}
                <span className="font-semibold text-accent">Node.js</span>,{" "}
                <span className="font-semibold text-accent">TypeScript</span>,{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">MongoDB</span>, and{" "}
                <span className="font-semibold text-accent">PostgreSQL</span>. I build
                SaaS platforms, AI-powered applications, scalable APIs, data-driven
                systems, and cloud-based applications.
                <br />
                I also work with{" "}
                <span className="font-semibold text-accent">AWS</span>,{" "}
                <span className="font-semibold text-accent">Docker</span>, REST APIs,
                data transformation, validation, migration workflows, database
                optimization, and third-party integrations to deliver reliable
                software designed for long-term growth.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
