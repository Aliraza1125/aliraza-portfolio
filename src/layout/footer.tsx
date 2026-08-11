import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 rounded-2xl bg-accent p-8 text-background sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
        {/* Left Side - Heading and Description */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-background px-4 py-2 text-sm font-semibold uppercase text-accent md:text-base">
              Get in touch
            </span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>
          
          <p className="mb-4 text-lg text-background/90 sm:text-xl">
            Ready to bring your ideas to life? I'm here to help you build amazing web applications and mobile solutions.
          </p>
          
          <p className="text-base text-background/80">
            Whether you need a complete web application, mobile app development, or just want to discuss your project ideas, I'd love to hear from you.
          </p>
        </div>
        
        {/* Right Side - Contact Information */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            
            <a
              href={`mailto:${siteMetadata.email}`}
              target="_blank"
              className="group flex items-center gap-4 rounded-xl bg-background/10 p-4 transition-all duration-300 hover:bg-background/20"
            >
              <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <p className="text-sm text-background/70">Email</p>
                <p className="font-semibold">alirazaasif2511@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+923422322150"
              className="group flex items-center gap-4 rounded-xl bg-background/10 p-4 transition-all duration-300 hover:bg-background/20"
            >
              <svg className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <p className="text-sm text-background/70">Phone</p>
                <p className="font-semibold">+92 342 2322150</p>
              </div>
            </a>
          </div>
          
          <div className="pt-4">
            <ContactButton />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-7xl h-px bg-border"></div>
      
      <div className="w-full bg-muted/20 rounded-xl p-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div className="flex items-center gap-3">
              
              <span className="text-muted-foreground ">© 2025 Ali Raza. All rights reserved.</span>
            </div>
            
            {/* Center: Tagline */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm font-medium">
                Transforming Ideas into Impactful Software Solutions
              </p>
            </div>
            
            {/* Right: Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm hidden sm:block">Connect:</span>
              <div className="flex gap-3">
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  className="p-2 rounded-lg bg-background hover:bg-accent hover:text-background transition-all duration-200"
                  aria-label="link to Github"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                {siteMetadata.twitter && (
                  <a
                    href={siteMetadata.twitter}
                    target="_blank"
                    className="p-2 rounded-lg bg-background hover:bg-accent hover:text-background transition-all duration-200"
                    aria-label="link to Twitter"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  className="p-2 rounded-lg bg-background hover:bg-accent hover:text-background transition-all duration-200"
                  aria-label="link to Linkedin"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
