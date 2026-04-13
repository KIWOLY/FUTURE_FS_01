import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contant from "./sections/Contant"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"
import Testimonials from "./sections/Testimonials"


function App() {


  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contant />
          <Project />
          <Experience/>
          <Testimonials />
        </main>
      </div>


    </>
  )
}

export default App
