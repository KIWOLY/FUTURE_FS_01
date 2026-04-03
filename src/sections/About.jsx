import { Code2,Smartphone,Server,Cloud } from 'lucide-react'
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
     <section id='about'  className='py-32 relative overflow-hidden'>
      <div>
           {/* left column  */}
        <div>
          <div>
            <span>About Me</span>
          </div>
        </div>

         {/* right column */}
        <div>
          
        </div>
      </div>
     </section>
  )
}

export default About