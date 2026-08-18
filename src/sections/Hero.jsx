import React from 'react'
import Button from '../component/Button';
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin, ShieldCheck, Cloud, ServerCog, Rocket } from 'lucide-react';
import SvgButton from '../component/SvgButton';

const techStack = [
    { name: 'Python', kind: 'python' },
    { name: 'Django', kind: 'django' },
    { name: 'Docker', kind: 'docker' },
    { name: 'Kubernetes', kind: 'kubernetes' },
    { name: 'Terraform', kind: 'terraform' },
    { name: 'AWS', kind: 'aws' },
    { name: 'PostgreSQL', kind: 'postgres' },
    { name: 'GitHub Actions', kind: 'actions' },
    { name: 'GitHub', kind: 'github' },
    { name: 'React', kind: 'react' },
    { name: 'Tailwind', kind: 'tailwind' },
    { name: 'Flutter', kind: 'flutter' }
];

const proofBadges = [
    { icon: Cloud, label: 'Deployed on AWS' },
    { icon: ServerCog, label: 'Dockerized' },
    { icon: Rocket, label: 'CI/CD: GitHub Actions' },
    { icon: ShieldCheck, label: 'Infra as Code' }
];

const buildStatusUrl = 'https://github.com/KIWOLY/portfolio/actions/workflows/deploy.yml/badge.svg';

const TechLogo = ({ kind }) => {
    const common = { className: 'h-5 w-5 shrink-0', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' };

    switch (kind) {
        case 'aws':
            return (
                <svg {...common} viewBox="0 0 48 48">
                    <path d="M24 6 10 14v20l14 8 14-8V14L24 6Z" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M19 18h10l-1.5 8.5h-7L19 18Zm-4 10h18v2H15v-2Z" fill="currentColor" />
                </svg>
            );
        case 'docker':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M6 15.5h2.5v2.5H6zm3.5-3h2.5v2.5h-2.5zm3.5 0h2.5v2.5H13zm3.5-3h2.5v2.5H16.5zm-10 6h2.5v2.5H6.5zm10 0h2.5v2.5H16.5zm-7 0h2.5v2.5H9.5zm7-6h2.5v2.5H16.5zM9 17.5h3.5v2.5H9zm6.5 0h3v2.5h-3z" fill="currentColor" />
                    <path d="M4 18.5h16M7 12.5h2.5M11 12.5h2.5M15 12.5h2.5M9 9.5h3.5M13 9.5h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case 'kubernetes':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M12 2.8 18.8 6v12L12 21.2 5.2 18V6L12 2.8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M12 7.2v9.6M8.5 9.3l7 5.4M15.5 9.3l-7 5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case 'terraform':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M9 4.5 15.5 8v11.5L9 16V4.5Zm6 0L22.5 8v11.5L15 16V4.5Zm-12 3L9 10.5v11.5L3 17V7.5Z" fill="currentColor" opacity="0.8" />
                </svg>
            );
        case 'postgres':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M8 5.5c0-1.1 1.2-2 4-2s4 .9 4 2v13c0 1.1-1.2 2-4 2s-4-.9-4-2v-13Z" fill="currentColor" opacity="0.18" />
                    <path d="M8 5.5c0-1.1 1.2-2 4-2s4 .9 4 2v13c0 1.1-1.2 2-4 2s-4-.9-4-2v-13Z" stroke="currentColor" />
                    <path d="M8 8.5h8M8 12.5h8M8 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case 'actions':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="7" stroke="currentColor" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'github':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M9 18c-4 1.2-4-2-5-2m10 4v-3.9c0-1.1-.1-1.5-.5-2 2.6-.3 5.3-1.3 5.3-5.8 0-1.2-.4-2.2-1.1-3 .1-.3.5-1.6-.1-3.3 0 0-.9-.3-3.1 1.1A10.7 10.7 0 0 0 12 5.8a10.7 10.7 0 0 0-2.8.4C6.9 4.9 6 5.2 6 5.2c-.6 1.7-.2 3-.1 3.3-.7.8-1.1 1.8-1.1 3 0 4.5 2.7 5.5 5.3 5.8-.4.3-.7.9-.8 1.8L9 18Z" fill="currentColor" stroke="none" />
                </svg>
            );
        case 'python':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M9 4.5h6a2 2 0 0 1 2 2v2.5H9V6.5a2 2 0 0 1 2-2Zm-3 4h12v6.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.5Z" fill="currentColor" opacity="0.16" />
                    <path d="M9 4.5h6a2 2 0 0 1 2 2v2.5M9 4.5v2.5M15 19.5H9a2 2 0 0 1-2-2V11.5M15 19.5v-2.5M9 8.5h6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );
        case 'django':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M7 5.5h8.5a2.5 2.5 0 0 1 2.5 2.5v8.5H12v-7.5H9.5v7.5H7V8A2.5 2.5 0 0 1 7 5.5Z" fill="currentColor" />
                </svg>
            );
        case 'react':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" />
                    <path d="M12 2.5v4M12 17.5v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2.5 12h4M17.5 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="currentColor" strokeLinecap="round" />
                </svg>
            );
        case 'tailwind':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M6.5 14.5c.8-2 1.9-3 3.5-3 1.7 0 2.8.9 3.6 2.4 1.1-1.8 2.7-2.8 4.9-2.8 1.9 0 3.5 1.2 4 3.6-1.1.5-2.1.8-3 .8-1.8 0-2.8-1.1-3.5-2.6-.9 1.5-2.1 2.6-3.8 2.6-1.6 0-2.8-.9-3.7-2.4Z" fill="currentColor" opacity="0.9" />
                </svg>
            );
        case 'flutter':
            return (
                <svg {...common} viewBox="0 0 24 24">
                    <path d="M13.5 2.5 4.5 11.5l3.5 3.5 9-9h-3.5ZM13.5 13.5 9 18l4.5 4.5h3.5l-4.5-4.5 4.5-4.5h-3.5Z" fill="currentColor" />
                </svg>
            );
        default:
            return <span className="h-5 w-5 rounded-full bg-primary/20" />;
    }
};

const Hero = () => {
    return (
        <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
            <div className='absolute inset-0'>
                <img src="/hero-bg.jpg" alt="Backend & Cloud/DevOps background" className='h-full w-full opacity-40 object-cover' />
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
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary border border-primary/40 bg-primary/5'>
                                <span className='w-2 h-2 bg-primary rounded-b-full animate-pulse' />
                                Backend & Cloud/DevOps background
                            </span>
                        </div>
                        {/* Headline */}
                        <div className='space-y-4'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pb-2'>
                                Innocent Kiwoly <br />
                                <span className='text-primary glow-text block'>Backend Developer</span>
                                <span className='text-white/95 block text-2xl md:text-3xl lg:text-4xl'>Cloud/DevOps Engineer</span>
                            </h1>
                            <h2 className='text-xl md:text-2xl lg:text-3xl leading-tight animate-fade-in animation-delay-100 text-white/90'>
                                Building reliable <span className='text-primary glow-text'>backend</span>
                                <br />
                                systems and scalable
                                <br />
                                <span className='font-serif italic text-white font-normal'>cloud infrastructure</span>
                            </h2>
                            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                                Hi, I'm Kiwoly, a backend developer and cloud/DevOps engineer.
                                I build robust APIs with Django and deploy, automate, and scale them using Docker, Kubernetes, Terraform, and AWS.
                            </p>
                        </div>

                        <div className='flex flex-wrap items-center gap-2 animate-fade-in animation-delay-300'>
                            <a
                                href='https://github.com/KIWOLY/portfolio/actions/workflows/deploy.yml'
                                target='_blank'
                                rel='noreferrer'
                                className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-3 py-1.5 text-xs font-medium text-primary-foreground/90 transition hover:border-primary/60 hover:bg-primary/10'
                            >
                                <img src={buildStatusUrl} alt='Portfolio deployment status' className='h-5 rounded-sm' />
                                <span className='hidden sm:inline'>Build status</span>
                            </a>

                            {proofBadges.map(({ icon: Icon, label }, index) => (
                                <span key={index} className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-3 py-1.5 text-[10px] sm:text-xs font-medium text-primary-foreground/90'>
                                    <Icon className='h-3.5 w-3.5 text-primary' />
                                    {label}
                                </span>
                            ))}
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
                                <img src="/profile-kiwoly.svg" alt="Innocent Kiwoly Backend Developer & Cloud/DevOps Engineer profile illustration" loading="lazy" className='w-full aspect-[4/5] object-cover rounded-2xl' />

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
                    <p className='text-sm text-muted-foreground mb-6 text-center uppercase tracking-[0.2em]'>
                        Technologies I work with
                    </p>
                    <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'>
                        {techStack.map((skill, idx) => (
                            <div key={idx} className='tech-card flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/70 px-3 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5'>
                                <TechLogo kind={skill.kind} />
                                <span className='mono text-sm font-medium text-foreground/90'>{skill.name}</span>
                            </div>
                        ))}
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