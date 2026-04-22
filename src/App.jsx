import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contant from "./sections/Contant"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Innocent Kiwoly | DevOps Engineer | Kubernetes, Docker, CI/CD
        </title>

        <meta
          name="description"
          content="Innocent Kiwoly is a DevOps Engineer and Full-Stack Developer specializing in Kubernetes, Docker, CI/CD pipelines, Terraform, Django, React, and Flutter. Available for remote work."
        />

        <meta
          name="keywords"
          content="DevOps Engineer, Kubernetes, Docker, CI/CD, Terraform, Django, React, Flutter, Cloud Engineer, Tanzania Developer"
        />

        <meta name="author" content="Innocent Kiwoly" />

        {/* Open Graph (for sharing links) */}
        <meta property="og:title" content="Innocent Kiwoly Portfolio" />
        <meta property="og:description" content="DevOps Engineer & Full-Stack Developer Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://kiwoly.tlms.live/" />
        <meta property="og:image" content="/folio.png" />
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
      </div>
    </>
  );
}

export default App;