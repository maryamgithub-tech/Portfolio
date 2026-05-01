import { GraduationCap, Award, CheckCircle2, Cloud, Code } from 'lucide-react';

export default function Education() {
  return (
    <section className="section-padding bg-surface-container-lowest" id="education">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Education */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-16 uppercase tracking-tighter">
            Academic <span className="text-primary">Foundation</span>
          </h2>
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-[2rem] border-l-4 border-primary group hover:bg-white/10 transition-colors duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-xl mb-4">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <span className="text-primary font-mono text-sm font-bold bg-primary/5 px-4 py-1 rounded-full">2020 — 2024</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">BS Computer Engineering</h3>
              <p className="text-gray-400 text-lg">University of Engineering and Technology (UET), Taxila</p>
            </div>

            <div className="glass-card p-10 rounded-[2rem] border-l-4 border-tertiary group hover:bg-white/10 transition-colors duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-tertiary/10 rounded-xl mb-4">
                  <Code className="text-tertiary" size={32} />
                </div>
                <span className="text-tertiary font-mono text-sm font-bold bg-tertiary/5 px-4 py-1 rounded-full">2018 — 2020</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">FSc (Pre-Engineering)</h3>
              <p className="text-gray-400 text-lg">Punjab Group of Colleges (PGC)</p>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-16 uppercase tracking-tighter">
            Digital <span className="text-secondary">Specializations</span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                title: 'Full-Stack Development', 
                issuer: 'Coursera | IBM Specialization', 
                icon: <Award className="text-primary" />,
                color: 'text-primary'
              },
              { 
                title: 'Cloud Application Development', 
                issuer: 'Coursera | Professional Certificate', 
                icon: <Cloud className="text-secondary" />,
                color: 'text-secondary'
              },
              { 
                title: 'React Development', 
                issuer: 'Coursera | Meta Specialization', 
                icon: <CheckCircle2 className="text-tertiary" />,
                color: 'text-tertiary'
              }
            ].map((cert, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem] flex items-center gap-8 group hover:translate-x-2 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors duration-500 shadow-xl">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold mb-1">{cert.title}</h4>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
