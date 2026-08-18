import { useEffect, useState } from "react";
import Button from "../component/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
     { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#infrastructure", label: "Infrastructure" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <header className={`fixed top-0 right-0 left-0 transition-all duration-500 z-50 ${isScrolling ? 'glass-strong py-2' : 'bg-transparent py-4'}`}>
            <nav className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <a href="#" className="text-lg md:text-xl font-bold tracking-tight hover:text-primary transition-colors">KIWOLY <span className="text-primary">.</span></a>
                <div className="hidden md:flex items-center gap-2">
                    <div className="glass-soft rounded-full px-4 py-2 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-200"> {link.label}</a>

                        ))}

                    </div>
                </div>

                <div className="hidden md:block">
                    <a
                        href="https://wa.me/255654207970?text=Hi%20Kiwoly,%20I%20want%20to%20work%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Contact Me</Button></a>
                </div>
                {/* mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((value) => !value)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in border-t border-white/10">
                <div className="container mx-auto flex flex-col px-4 md:px-6 py-4 gap-2">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface/50 py-2 px-3 rounded-lg transition-all duration-200"> {link.label}</a>

                    ))}
                    <a
                        href="https://wa.me/255654207970?text=Hi%20Kiwoly,%20I%20want%20to%20work%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-2"
                    > <Button className="w-full">Contact Me</Button></a>

                </div>

            </div>)

            }
        </header>
    )
}

export default Navbar