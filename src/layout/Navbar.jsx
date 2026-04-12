import { useEffect, useState } from "react";
import Button from "../component/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolling ,setIsScrolling]=useState(false);

    useEffect(()=>{
      const handleScroll =()=> {
        setIsScrolling(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return ()=> window.removeEventListener("scroll", handleScroll);
    },[]);




    return (
        <header className={`fixed top-0 right-0 left-0 transition-all duration-500  z-50 ${isScrolling ? 'glass-strong py-3' : 'bg-transparent py-5'}`}>
            <nav className="container mx-auto flex items-center justify-between px-6">
                <a href="#" className="text-xl font-bold tracking-tight  hover:text-primary">KIWOLY <span className="text-primary">.</span></a>
                <div className="hidden md:flex items-center gap-1">
                    <div className="galss rounded-full px-2 py-1 items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-l text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"> {link.label}</a>

                        ))}

                    </div>
                </div>
                <div className="hidden md:block">
                    <Button children={"Contact Me"} />
                </div>
                {/* mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((value) => !value)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto flex flex-col px-6 py-6 gap-4">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} onClick={()=> setIsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground py-2"> {link.label}</a>

                    ))}
                    <Button>Contact Me</Button>
                </div>

            </div>)

            }
        </header>
    )
}

export default Navbar