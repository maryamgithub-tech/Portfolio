import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface" id="contact">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 uppercase tracking-tighter">
          Initiate <span className="text-primary text-glow">Connection</span>
        </h2>
        <p className="font-sans text-xl md:text-2xl text-gray-400 mb-20 max-w-2xl mx-auto leading-relaxed">
          Ready to build something extraordinary? I'm available for strategic roles and high-impact full-stack collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="mailto:mseemab447@gmail.com" 
            className="glass-card p-10 rounded-[3rem] hover:translate-y-[-10px] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="text-primary" />
            </div>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <Mail className="text-primary" size={32} />
            </div>
            <h4 className="font-display text-2xl font-bold mb-2">Email</h4>
            <p className="text-gray-400 text-sm break-all font-medium">mseemab447@gmail.com</p>
          </a>

          <a 
            href="tel:03364512162" 
            className="glass-card p-10 rounded-[3rem] hover:translate-y-[-10px] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="text-secondary" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <Phone className="text-secondary" size={32} />
            </div>
            <h4 className="font-display text-2xl font-bold mb-2">Call</h4>
            <p className="text-gray-400 text-sm font-medium">0336-4512162</p>
          </a>

          <a 
            href="https://linkedin.com/in/maryam-seemab" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-10 rounded-[3rem] hover:translate-y-[-10px] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="text-tertiary" />
            </div>
            <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
              <Linkedin className="text-tertiary" size={32} />
            </div>
            <h4 className="font-display text-2xl font-bold mb-2">LinkedIn</h4>
            <p className="text-gray-400 text-sm font-medium">maryam-seemab</p>
          </a>
        </div>
      </div>
    </section>
  );
}
