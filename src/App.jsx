import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contant from "./sections/Contant"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Infrastructure from "./sections/Infrastructure"
import Project from "./sections/Project"
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Backend Developer & Cloud/DevOps Engineer | Innocent Kiwoly
        </title>

        <meta
          name="description"
          content="Innocent Kiwoly is a Backend Developer & Cloud/DevOps Engineer specializing in Django, AWS, Docker, Kubernetes, Terraform, CI/CD, and cloud infrastructure. Available for remote work."
        />

        <meta
          name="keywords"
          content="Backend Developer, Cloud Engineer, DevOps Engineer, AWS, Kubernetes, Docker, Terraform, CI/CD, Django, React, Flutter, Tanzania Developer"
        />

        <meta name="author" content="Innocent Kiwoly" />

        {/* Open Graph (for sharing links) — kept in sync with the static
            tags in index.html, which are authoritative for non-JS clients */}
        <meta property="og:site_name" content="Innocent Kiwoly Portfolio" />
        <meta property="og:title" content="Innocent Kiwoly | Backend Developer & Cloud/DevOps Engineer" />
        <meta property="og:description" content="Backend Developer & Cloud/DevOps Engineer specializing in Django, AWS, Docker, Kubernetes, Terraform, CI/CD, and cloud infrastructure. Available for remote work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kiwoly.tlms.live/" />
        <meta property="og:image" content="https://kiwoly.tlms.live/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innocent Kiwoly | Backend Developer & Cloud/DevOps Engineer" />
        <meta name="twitter:description" content="Backend Developer & Cloud/DevOps Engineer specializing in Django, AWS, Docker, Kubernetes, Terraform, CI/CD, and cloud infrastructure. Available for remote work." />
        <meta name="twitter:image" content="https://kiwoly.tlms.live/og-image.png" />

        <link rel="canonical" href="https://kiwoly.tlms.live/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Innocent Kiwoly",
            "url": "https://kiwoly.tlms.live/",
            "jobTitle": "Backend Developer & Cloud/DevOps Engineer",
            "image": "https://kiwoly.tlms.live/og-image.png",
            "email": "mailto:ikiwoly@gmail.com",
            "sameAs": [
              "https://github.com/KIWOLY",
              "https://www.linkedin.com/in/innocent-kiwoly-35b8b1355/"
            ],
            "knowsAbout": [
              "Django",
              "AWS",
              "Docker",
              "Kubernetes",
              "Terraform",
              "CI/CD",
              "Cloud Infrastructure",
              "React",
              "Flutter"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Innocent Kiwoly Portfolio",
            "url": "https://kiwoly.tlms.live/"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="infrastructure">
            <Infrastructure />
          </section>

          <section id="projects">
            <Project />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="contact">
            <Contant />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;