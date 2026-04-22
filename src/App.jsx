import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Contant from "./sections/Contant"
import Experience from "./sections/Experience"
import Hero from "./sections/Hero"
import Project from "./sections/Project"



function App() {


  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Project />
          <Experience/>
          <Contant/>
         
        </main>
      </div>


    </>
  )
}

export default App
