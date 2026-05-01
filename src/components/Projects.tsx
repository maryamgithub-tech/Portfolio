import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Patch Manager',
    desc: 'Sophisticated monitoring system dashboard for real-time device patch tracking and interactive network visualization.',
    tags: ['React.js', 'D3.js', 'Node.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaKjgAnL4ZE9Xtv2Ey0UVzTLtOzKNozq42iZbetTNWbGPqxU55T1RPqa_wGk2jWv0TI09rGU4NsTUm5fjYb4tOetHP7deeYmnEub_Sqs2okiW3Qy4L957cq1GqVn--ly8RXucMmN7hL9Uv6f2IcDCSY1mPSYZ-vGaWQurXS4verly6Kv7Sc7OuFEXtA6yBp0zqDEA2ogb8mPZXC9l0A92bl3PJBDUyOjvWe4CediW4JAHzaH5E_g0jwWT6DFGTP6rCuDuk49TLCyUS',
    color: 'primary'
  },
  {
    title: 'SecureFlow',
    desc: 'Comprehensive security management application for tracking enterprise network alerts and device security profiles.',
    tags: ['Security UI', 'Dashboard', 'Firebase'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwlMtkmkTK7pSKiVWneDdNJoHFEc4TqQXV6Gp6Pi7m6Jf520Cogu2RQeuNLdgZWKxwXDDWzGdYMB0WS5SBKmPbnTyilpOB1ljC-Rjow78qgBE55YbCEm3w7hmIXaJN46xkRkPSnvvYjqiD28T7B63Ks9iAqkBwnE_ZuXB0rmTOP3OqPLC693PaSSAPFo2rHS0SSrH3VEKWOUESjG_Z4I4QUJsojc4btHY-KBk_L0sg6l-B0IMwZFXvZbdpQvp3a74RS41uVBiPmVjw',
    color: 'secondary'
  },
  {
    title: 'Davelong',
    desc: 'Large-scale commercial enterprise platform designed for business operations with multi-role state management.',
    tags: ['Enterprise', 'MERN', 'PostgreSQL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRJiIC4GUol1Zqpmz0F6KIhg4zikCDIW9mVurXSc5FeM4VMGRhS0ii1tj7OuOeECOl7x1ssdSmy4HHD9FWBw7dwZWSW1mEjwRtOZoyy7H_PaTOTAsLshbSDVwbzGWnpvmpJIeLsF2rDd-9VgrbQRRY9dnRziDcJsuqfXU1E9n5DHlcPW88JyHlamCM4p9Xc_FhKiX2Py67C14Xyn9yL_jejMc3NMOiYFPSRnrLuCv3IoZWGfpPHQf9qC0YaPT5AjxvF1QeL7IcFc95',
    color: 'tertiary'
  },
  {
    title: 'Travel Master',
    desc: 'Full-featured travel booking application with integrated itinerary management and real-time pricing.',
    tags: ['React', 'Context API', 'API Proxy'],
    color: 'primary'
  },
  {
    title: 'Concord Engine',
    desc: 'Real-time collaboration platform focused on seamless document sharing and low-latency team messaging.',
    tags: ['WebSockets', 'Next.js', 'Redis'],
    color: 'secondary'
  },
  {
    title: 'Anigma Crypto',
    desc: 'Distributed ledger exploration tool with advanced encryption visuals and secure data storage schemas.',
    tags: ['Crypto', 'React', 'Zustand'],
    color: 'tertiary'
  }
];

export default function Projects() {
  return (
    <section className="section-padding bg-surface" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase tracking-tighter">
              Project <span className="text-secondary">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400">
              A curated deep-dive into digital architectures and full-stack solutions crafted with precision.
            </p>
          </div>
          <div className="text-8xl font-display font-black text-white/5 select-none hidden lg:block">
            01—06
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`glass-card rounded-[2.5rem] overflow-hidden group hover:translate-y-[-8px] transition-all duration-500 flex flex-col hover:shadow-[0_0_50px_rgba(221,183,255,0.15)] border-white/5 hover:border-secondary/30`}
            >
              {project.image && (
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                </div>
              )}
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-3xl font-bold group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <Github size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg mb-10 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-[10px] items-center py-1.5 px-4 rounded-full border bg-white/5 font-bold uppercase tracking-widest ${
                        project.color === 'primary' ? 'border-primary/20 text-primary' : 
                        project.color === 'secondary' ? 'border-secondary/20 text-secondary' : 
                        'border-tertiary/20 text-tertiary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
