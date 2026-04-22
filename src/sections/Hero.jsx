import React from 'react'
import Button from '../component/Button';
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin } from 'lucide-react';
import SvgButton from '../component/SvgButton';


const skills = [
    "Html", "Css", "Js", "React", "Tailwind", "Python", "Django", "DRF", "Graphql", "Postgress", "Git", "Github", "Docker", "CI/CD", "Iaac", "Dart", "Flutter"
]


const Hero = () => {
    return (
        <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
            <div className='absolute inset-0'>
                <img src="/hero-bg.jpg" alt="DevOps cloud infrastructure background" className='h-full w-full opacity-40 object-cover' />
            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-background/20  via-background/80 to-background' />

            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {
                    [...Array(25)].map((_, i) => (
                        <div className='absolute w-1.5 h-1.5 rounded-full opacity-40'
                            style={{
                                backgroundColor: "#20B2A6",
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }} />
                    ))
                }

            </div>
            {/* content  */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* left column-text content  */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary'>
                                <span className='w-2 h-2 bg-primary rounded-b-full animate-pulse' />
                                Software engineer working with DevOps.
                            </span>
                        </div>
                        {/* Headline */}
                        <div className='space-y-4'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pb-4'>
                                Innocent Kiwoly <br />
                                DevOps Engineer & Full-Stack Developer
                            </h1>
                            <h2 className='text-xl md:text-2xl lg:text-3xl  leading-tight animate-fade-in animation-delay-100'>
                                Building <span className='text-primary glow-text'>applications</span>
                                <br />
                                and scalable
                                <br />
                                <span className='font-serif italic text-white font-normal'>DevOps solutions</span>
                            </h2>
                            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                                Hi, I'm Kiwoly, a software engineer working with DevOps.
                                I build applications and focus on deploying, automating, and managing them efficiently
                            </p>
                        </div>
                        {/* CTAs- call to actions */}
                        <div className='flex items-center gap-2'>
                            <a
                                href="https://wa.me/255654207970?text=Hi%20Kiwoly,%20I%20want%20to%20work%20with%20you."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size='lg'>
                                    Contact Me <ArrowRight className='w-5 h-5' />
                                </Button>
                            </a>
                            <a href="/kiwoly.pdf" download>
                                <SvgButton>
                                    <Download className='w-5 h-5' />
                                    Download CV
                                </SvgButton>
                            </a>
                        </div>

                        {/* social link */}
                        <div className='flex items-baseline gap-4 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>Follow :</span>
                            {[
                                { icon: Github, href: "https://github.com/KIWOLY" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/innocent-kiwoly-35b8b1355/" },
                                { icon: Instagram, href: "https://www.instagram.com/iaminnoh_john/?hl=en" }
                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank"
                                    rel="noopener noreferrer" className='p-2 rouded-full glass hover:bg-primary/10 hover:text-primary'> {< social.icon className='w-5 h-5' />}</a>
                            ))}
                        </div>

                    </div>
                    {/* right column -profile picture */}
                    <div className='relative animate-fade-in animation-delay-400'>
                        {/* profile image */}
                        <div className='relative max-w-md mx-auto'>
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                                <img src="/profile4.jpeg" alt="Innocent Kiwoly DevOps Engineer profile photo"  loading="lazy"    className='w-full aspect-[4/5] object-cover rounded-2xl' />

                                {/* Floating Badge */}
                                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'>

                                        </div>
                                        <span className='text-sm font-medium'>Available for work </span>
                                    </div>
                                </div>

                                {/* stats badge */}
                                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-2xl font-bold text-primary'>3+ </div>
                                    <div>Years Exp </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* skills sections */}
                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-muted-foreground mb-6 text-center '>
                        Technologies I  work with
                    </p>
                    <div className='relative overflow-hidden '>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className='px-8 py-4'>
                                    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground'>{skill}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
                <a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground'>
                    <span className='text-xs uppercase tracking-wider'>Scroll</span><ChevronDown className='w-6 h-6 animate-bounce' />
                </a>
            </div>

        </section>
    )
}

export default Hero