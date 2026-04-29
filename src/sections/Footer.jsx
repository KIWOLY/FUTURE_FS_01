import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
];

const socials = [
    {
        href: "mailto:ikiwoly@gmail.com",
        label: "Email",
        Icon: Mail
    },
    {
        href: "https://github.com/KIWOLY",
        label: "GitHub",
        Icon: Github
    },
    {
        href: "https://www.linkedin.com/in/innocent-kiwoly-35b8b1355/",
        label: "LinkedIn",
        Icon: Linkedin
    }
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-border/60">
            <div className="absolute inset-0">
                <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-highlight/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="space-y-4">
                        <p className="text-xl font-semibold text-foreground">
                            Innocent <span className="text-primary">Kiwoly</span>
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            DevOps and full-stack engineer focused on reliable systems, clean
                            interfaces, and measurable impact.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            Start a project
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Quick Links
                            </p>
                            <ul className="mt-4 space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Reach Out
                            </p>
                            <ul className="mt-4 space-y-3">
                                {socials.map(({ href, label, Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target={href.startsWith("http") ? "_blank" : undefined}
                                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="flex items-center gap-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
                                        >
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-border/60">
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-3xl border border-primary/20 space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Availability
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                            Open for remote DevOps and full-stack roles.
                        </p>
                   
                        <a
                            href="https://wa.me/255654207970?text=Hi%20Kiwoly,%20I%20want%20to%20work%20with%20you."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        >
                            Message on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row">
                    <p>© {year} Innocent Kiwoly. All rights reserved.</p>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
