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
                Software Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl text-justify">
              
                Hello! I'm a Software Developer and Experienced{" "}
                <span className="font-semibold text-accent">MERN Developer</span>{" "}
                with a proven track record of 4+ years in designing and developing{" "}
                <span className="font-semibold text-accent">high-performance, user-focused web applications</span>.
                Specializing in{" "}
                <span className="font-semibold text-accent">MERN Stack</span>{" "}
                (MongoDB, Express.js/Nest.js, React.js, Next.js and Node.js), I bring expertise in
                crafting user-centric interfaces and scalable back-end solutions with{" "}
                <span className="font-semibold text-accent">AI integrations</span>. 
                <br />
                Additionally, I am proficient in{" "}
                <span className="font-semibold text-accent">JavaScript ES6+</span>,{" "}
                <span className="font-semibold text-accent">HTML5</span>,{" "}
                <span className="font-semibold text-accent">CSS3</span>,{" "}
                <span className="font-semibold text-accent">Flutter</span>, and{" "}
                <span className="font-semibold text-accent">Python</span>.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
