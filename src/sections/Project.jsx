import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import SvgButton from '../component/SvgButton'

const projects = [
  {
    title: "e-commerce",
    description: "Make easy to buying and selling product online",
    image: "/project/e-commerce.png",
    tags: ["React", "Django", "Postgress"],
    link: "#",
    github: "#"
  },
  {
    title: "Air quality Monitoring",
    description: "Monitoring Air quality by measuring air polluntant gas",
    image: "/project/air_quality.png",
    tags: ["React", "Django", "Postgress", "IOT", "Lorawan", "Influx DB"],
    link: "#",
    github: "#"
  },
  {
    title: "e-learning",
    description: "Platform which facilitate the student on finding the online material",
    image: "/project/e-learning.png",
    tags: ["React", "Django", "Postgress"],
    link: "#",
    github: "#"
  }




]


const Project = () => {
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/4 right-0 h-96 bg-primary/5 rounded-e-full blur-3xl ' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl ' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Project that <span className='font-serif italic text-white'> {" "}make an impact.</span></h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>A selection of my recent work, from complex web application to innovative tools that solve real-world problems</p>
        </div>

        {/* project Grid */}

        <div className='grid md:grid-cols-2 gap-8 '>
          {projects.map((project, index) => (
            <div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(index + 1) * 100}ms ` }}>
              {/* image */}
              <div className='relative overflow-hidden aspect-video'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60' />
                {/* overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transtion-opacity duration-300'>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <Github className='w-5 h-5 ' />
                  </a>
                </div>
              </div>

              {/* Content  */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 
                  group-hover:-translte-y-1 transition-all'/>
                </div>
                <p className='text-muted-foreground text-sm '>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagindex) => (
                    <span key={tagindex} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground
                    hover:border-primary/50'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))

          }

        </div>
        {/* view all */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>

          <SvgButton>
            View All Projects
            <ArrowUpRight  className='w-5 h-5'/>
          </SvgButton>
        </div>


      </div>


    </section>
  )
}

export default Project