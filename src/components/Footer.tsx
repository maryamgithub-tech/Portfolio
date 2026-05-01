import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-white mb-4 tracking-tighter italic">DevCanvas</div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-light">
              Crafted with precision for the modern web. Every line of code is an architectural statement.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              {[
                { icon: <Github size={20} />, label: 'GitHub' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn', color: 'text-primary' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Mail size={20} />, label: 'Email' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`text-gray-500 hover:text-white transition-all duration-300 hover:translate-y-[-4px] ${social.color || ''}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-700 font-mono tracking-widest uppercase">
              © {currentYear} Maryam Seemab — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
