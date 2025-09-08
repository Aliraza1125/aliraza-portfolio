import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/mypic.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6  text-center sm:px-14 md:mt-20  lg:mt-0 lg:flex-row lg:text-left">
      <div className="sm:1/2  w-full lg:w-1/2 order-2 lg:order-1 text-justify">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              About Me
            </h1>
          </FadeUp>
          {/* <FadeUp key="tagline" duration={0.6} delay={0.2}>
            <p className="mt-4 text-lg font-medium text-accent uppercase tracking-wide">
              Transforming Ideas into Impactful Software Solutions
            </p>
          </FadeUp> */}
          <FadeUp key="description-1" duration={0.6} delay={0.4}>
            <p className="mt-6 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Hi there! I'm Ali Raza, a{" "}
              <span className="font-semibold text-accent">Software Engineer</span>{" "}
              and{" "}
              <span className="font-semibold text-accent">Full Stack Developer</span>{" "}
              with 4+ years of experience in software development.
              I specialize in creating modern web applications and digital solutions that 
              solve real-world problems.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.6}>
            <p className="mt-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I have extensive experience working with the{" "}
              <span className="font-semibold text-accent">MERN stack</span>{" "}
              (MongoDB, Express.js, React.js, Node.js) and modern technologies like{" "}
              <span className="font-semibold text-accent">Next.js</span>,{" "}
              <span className="font-semibold text-accent">TypeScript</span>, and{" "}
              <span className="font-semibold text-accent">AI integrations</span>.
              I'm passionate about building scalable, user-friendly applications.
            </p>
          </FadeUp>
          <FadeUp key="description-3" duration={0.6} delay={0.8}>
            <p className="mt-4 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I love collaborating with teams to turn complex ideas into simple, 
              elegant solutions. Whether it's a startup MVP or an enterprise application,
              I approach every project with attention to detail and a focus on quality.{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">Check out my projects</span>
              </Link>{" "}
              to see what I've been working on.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={1.0}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Pakistani flag"
                src="https://flagcdn.com/pk.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Lahore, Pakistan
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2 order-1 lg:order-2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:p-16 ml-12"
              alt="hero image"
              lightColor="#E0FFFF"
              darkColor="#004D4D"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
