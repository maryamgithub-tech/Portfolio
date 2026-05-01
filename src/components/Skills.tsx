import { useRef } from 'react';
import { Code2, Layers, Server, Database } from 'lucide-react';
import { useGSAP, gsap, ScrollTrigger } from '../lib/gsap';

const skills = [
  {
    title: 'Languages',
    icon: <Code2 className="text-primary" />,
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Django',],
    color: 'primary',
    span: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Frontend Development',
    icon: <Layers className="text-secondary" />,
    items: ['React.js', 'Next.js', 'HTML5/CSS3', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'GSAP', 'Framer Motion'],
    color: 'secondary',
    span: 'col-span-1 md:col-span-3'
  },
  {
    title: 'Backend & State',
    icon: <Server className="text-tertiary" />,
    items: ['Node.js', 'Express.js', 'Redux', 'Redux Toolkit', 'Context API', 'GraphQL', 'Socket.io'],
    color: 'tertiary',
    span: 'col-span-1 md:col-span-3'
  },
  {
    title: 'Data & Tools',
    icon: <Database className="text-primary-container" />,
    items: ['MongoDB', 'Firebase', 'PostgreSQL', 'Docker', 'GitHub', 'CI/CD'],
    color: 'primary-container',
    span: 'col-span-1 md:col-span-2'
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Pinning effect with sequential card reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=1500', 
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Initial scale on title
    tl.from('.skills-title', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power3.out'
    });

    // Reveal cards one by one 
    const cards = gsap.utils.toArray('.skill-card') as HTMLElement[];
    cards.forEach((card, index) => {
      tl.from(card, {
        opacity: 0,
        y: 80,
        scale: 0.85,
        duration: 1.5,
        ease: 'power2.out'
      }, index === 0 ? '>-=0.2' : '>-=0.7');
    });

    // Hold for a moment visible
    tl.to({}, { duration: 1.5 });

    // Magnetic effect for cards
    cards.forEach(card => {
      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const xPercent = (e.clientX - centerX) / (rect.width / 2);
        const yPercent = (e.clientY - centerY) / (rect.height / 2);
        
        gsap.to(card, {
          x: xPercent * 12,
          y: yPercent * 12,
          rotateX: -yPercent * 3,
          rotateY: xPercent * 3,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out'
        });
      };
      
      const handleLeave = () => {
        gsap.to(card, { 
          x: 0, 
          y: 0, 
          rotateX: 0, 
          rotateY: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: 'power2.out' 
        });
      };

      card.addEventListener('mousemove', handleMove as any);
      card.addEventListener('mouseleave', handleLeave);
    });
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="section-padding overflow-hidden bg-surface flex flex-col justify-center min-h-screen lg:py-20" id="skills">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <h2 className="skills-title font-display text-5xl md:text-6xl mb-12 text-center uppercase tracking-tighter relative z-10">
          Technical <span className="text-primary text-glow italic">Arsenal</span>
        </h2>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {skills.map((skill, i) => (
            <div 
              key={i}
              className={`skill-card glass-card p-5 md:p-6 rounded-3xl group hover:border-primary/50 transition-colors duration-500 cursor-default col-span-1 ${
                i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors duration-500 scale-100 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-semibold text-gray-400 group-hover:text-white group-hover:border-primary/30 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
