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
              
                Hello! I'm a Senior Software Engineer with 5+ years of professional
                experience specializing in{" "}
                <span className="font-semibold text-accent">Full-Stack JavaScript</span>{" "}
                development. My core expertise spans{" "}
                <span className="font-semibold text-accent">React.js</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>,{" "}
                <span className="font-semibold text-accent">Node.js</span>,{" "}
                <span className="font-semibold text-accent">NestJS</span>,{" "}
                <span className="font-semibold text-accent">TypeScript</span>,{" "}
                <span className="font-semibold text-accent">MongoDB</span>,{" "}
                <span className="font-semibold text-accent">PostgreSQL</span>, and{" "}
                <span className="font-semibold text-accent">Express.js</span>.
                <br />
                I also work with{" "}
                <span className="font-semibold text-accent">FastAPI</span>,{" "}
                <span className="font-semibold text-accent">Flask</span>,{" "}
                <span className="font-semibold text-accent">Flutter</span>,{" "}
                <span className="font-semibold text-accent">Redis</span>,{" "}
                <span className="font-semibold text-accent">Docker</span>,{" "}
                <span className="font-semibold text-accent">AWS</span>,{" "}
                <span className="font-semibold text-accent">Vercel</span>,{" "}
                <span className="font-semibold text-accent">GitHub Actions</span>,{" "}
                <span className="font-semibold text-accent">Stripe</span>,{" "}
                <span className="font-semibold text-accent">OpenAI</span>, and{" "}
                <span className="font-semibold text-accent">Claude AI</span> to build
                scalable SaaS platforms, AI applications, enterprise software,
                dashboards, e-commerce platforms, and cross-platform mobile
                applications.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
