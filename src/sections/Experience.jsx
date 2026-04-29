import React from 'react'

const experiences = [
    {
        period: "2026",
        role: "Python Developer Intern",
        company: "Codveda",
        description:
            "One-month internship focused on Python application development, debugging, API integration, and solving real-world software challenges.",
        current: true,
    },
    {
        period: "2026",
        role: "Full Stack Developer Intern",
        company: "Future Interns",
        description:
            "One-month internship as a Full Stack Developer. involved in designing and developing web applications using both frontend and backend technologies, contributing to real-world projects and gaining industry experience.",

        current: true,
    },


    {
        period: "2025 - Present",
        role: "IT Knowledge Sharing Coordinator",
        company: "ByteUjamaa Organization",
        description:
            "Coordinated IT knowledge-sharing sessions among students, fostering peer learning and promoting awareness of modern technologies. Organized workshops and facilitated discussions to enhance technical skills within the community.",

        current: true,
    },
    {
        period: "2025",
        role: "IoT and DevOps",
        company: "International Programme(Blended Intensive Programme (BIP) -Belgium)",
        description:
            "Participated in an international Blended Intensive Programme (BIP) hosted in Belgium. Collaborated with students from nine countries to address a real-world learning challenge, enhancing cross-cultural communication, teamwork, and problem-solving skills.",

        current: false,
    },

];



const Experience = () => {

    return (
        <section id="experience" className='py-32 relative overflow-hidden'>
            <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
            <div className='container mx-auto px-6 relative z-10' />
            {/* section header */}
            <div className='max-w-3xl mb-16 text-center'>
                <span className='text-sm text-secondary-foreground font-medium uppercase animate-fade-in'> Career Journey</span>
                <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100'>
                    Experience that <span className='font-serif italic font-normal text-white'> speak volumes.</span>  </h2>
                <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                    A timeline of my growth as a Full Stack Developer with DevOps skills, showcasing international experience, leadership in student communities, and hands-on involvement in designing, building, and deploying real-world applications using modern technologies.
                </p>

            </div>
            {/* timeline */}
            <div className='relative'>
                <div className='timeline-glow absolute left-0 md:left-1/2 bottom-0 top-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
                md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>


                {/* experinece  */}
                <div className='space-y-12'>
                    {experiences.map((experience, ind) => (
                        <div key={{ ind }} className='relative grid md:grid-cols-2 gap-8 animate-fade-in '
                            style={{ animationDelay: `${(ind + 1) * 150}ms` }}>
                            {/* Timeline Dot */}
                            <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 '></div>

                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${ind % 2 === 0 ? "md:pr-16 md:text-right " : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                                    <span className='text-sm text-primary font-medium'>{experience.period}</span>
                                    <h3 className='text-xl font-semibold mt-2'>{experience.role}</h3>
                                    <p className='text-muted-foreground'>{experience.company}</p>
                                    <p className='text-sm text-muted-foreground mt-4'>{experience.description}</p>
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>


        </section>
    )
}

export default Experience