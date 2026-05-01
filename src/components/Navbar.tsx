import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Twitter, Github, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-white/10 py-4 shadow-[0_0_30px_rgba(99,102,241,0.15)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white uppercase font-display">
          DevCanvas
        </div>
        
        <nav className="hidden md:flex gap-10">
          {['Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a 
          href="mailto:mseemab447@gmail.com" 
          className="bg-primary text-black px-6 py-2 rounded-full text-sm font-bold scale-100 hover:scale-105 active:scale-95 transition-all bloom-primary flex items-center gap-2"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
