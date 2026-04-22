import { Code2, Smartphone, Server, Cloud } from 'lucide-react'
import React from 'react'

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "I design and develop scalable, maintainable software solutions using clean code principles, modern architectures, and best industry practices."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "I build responsive and high-performance mobile applications using Flutter, focusing on intuitive UI/UX and seamless user experience."
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "I develop secure and efficient backend systems and APIs using Django and REST frameworks, ensuring reliability and scalability."
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "I apply DevOps practices including CI/CD, containerization, and cloud deployment to automate workflows and improve system performance."
  }
];

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* left column  */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground  text-sm font-bold tracking-wider uppercase'>About Me</span>
            </div>
            <h2 className='text-4xl md:text-5xl  font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Building the future <span className='font-serif italic font-normal text-white'> one component at a time</span></h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I am a Software and DevOps Engineer focused on building scalable web and mobile applications. I specialize in backend development using Django, where I design reliable APIs and systems that are efficient and easy to maintain. I enjoy solving real-world problems by delivering simple and effective solutions.
              </p>

              <p>
                I build complete applications using React and Flutter, working across the full stack from frontend to backend. I turn ideas into production-ready systems that are functional, user-friendly, and scalable.
              </p>

              <p>
                I also implement DevOps practices to deploy and manage applications in production. I work with Docker for containerization, Kubernetes for managing applications at scale, and CI/CD pipelines to automate deployment. My focus is on building systems that are reliable, scalable, and ready for real-world use.
              </p>
            </div>
            <div className='glass rounded-2xl glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg italic text-foreground font-medium i'>
                " My mission is to design and develop innovative digital solutions that bridge the gap between technology and real-world challenges. I am driven to master full-stack development and DevOps, building systems that are not only functional but scalable, efficient, and future-ready."
              </p>
            </div>

          </div>

          {/* right column */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((highlight, index) => (
              <div key={index} className='glass rounded-2xl animate-fade-in '>
                <div className='w-12 h-12 rounded-xl bg-primary/10  flex items-center justify-center mb-4 hover:bg-primary/20'><highlight.icon className='w-6 h-6 text-primary' /></div>
                <h3 className='text-lg font-semibold mb-2'>{highlight.title}</h3>
                <p className='text-sm text-muted-foreground'>{highlight.description}</p>
              </div>

            ))}

          </div>

        </div>


      </div>
    </section>
  )
}

export default About