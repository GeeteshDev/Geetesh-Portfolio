import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsAll from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ProjectsHome from "@/components/projects/ProjectsHome";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
                 overflow-y-scroll z-0 overflow-x-hidden 
                 scrollbar-thin scrollbar-track-gray-400/20 
                 scrollbar-thumb-[#F7AB0A]/80"
    >

      {/* <Head>
        <title>Geetesh Aheriya | Salesforce Developer & Frontend Engineer</title>
      
        <meta
          name="description"
          content="Official portfolio of Geetesh Aheriya, Salesforce Developer and Frontend Engineer. View skills, experience, and projects."
        />
      
        <meta name="author" content="Geetesh Aheriya" />
        <meta name="robots" content="index, follow" />
      
        <link rel="canonical" href="https://geetesh.dev/" />
      
        
        <meta property="og:title" content="Geetesh Aheriya | Portfolio" />
        <meta
          property="og:description"
          content="Geetesh Aheriya – Salesforce Developer & Frontend Engineer"
        />
        <meta property="og:url" content="https://geetesh.dev/" />
        <meta property="og:type" content="website" />
      </Head> */}

      <Head>
        <title>Geetesh Aheriya | Salesforce Developer & Frontend Engineer</title>
      
        <meta
          name="description"
          content="Official portfolio of Geetesh Aheriya, Salesforce Developer and Frontend Engineer. View skills, experience, and projects."
        />
      
        <meta name="author" content="Geetesh Aheriya" />
        <meta name="robots" content="index, follow" />
      
        <link rel="canonical" href="https://geetesh.dev/" />
      
        {/* Open Graph */}
        <meta property="og:title" content="Geetesh Aheriya | Portfolio" />
        <meta
          property="og:description"
          content="Geetesh Aheriya – Salesforce Developer & Frontend Engineer"
        />
        <meta property="og:url" content="https://geetesh.dev/" />
        <meta property="og:type" content="website" />
      
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Geetesh Aheriya",
              url: "https://geetesh.dev/",
              jobTitle: "Salesforce Developer",
              sameAs: [
                "https://www.linkedin.com/in/geeteshaheriya/"
              ]
            }),
          }}
        />
      </Head>



      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <ProjectsHome />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/About.png"  
              alt="Go to top"
              width={40}
              height={40}
              className="rounded-full grayscale hover:grayscale-0 w-auto h-auto cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
