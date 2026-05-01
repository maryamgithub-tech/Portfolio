import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useGSAP, gsap } from '../lib/gsap';

const experiences = [
  {
    role: 'Web Developer',
    company: 'Ceburu',
    period: 'Nov 2023 – April 2024',
    color: 'primary',
    points: [
      'Optimized and resolved critical UI/UX bugs in the React application, enhancing cross-browser compatibility and system performance.',
      'Contributed to system architecture discussions and implemented robust React components for network monitoring.'
    ]
  },
  {
    role: 'MERN Stack Developer',
    company: 'Cplusoft Private Limited',
    period: 'Dec 2021 – Oct 2023',
    color: 'tertiary',
    points: [
      'Spearheaded end-to-end development of dynamic and responsive web applications using React.js and the MERN stack.',
      'Collaborated with design and QA teams to deliver high-quality, pixel-perfect user interfaces and efficient backend logic.',
      'Specialized in converting complex Figma designs into clean, modular, and maintainable React codebases.'
    ]
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate the timeline line growth
    gsap.from('.timeline-line', {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'none',
      scrollTrigger: {
        trigger: '.experience-container',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 1,
      }
    });

    // Animate each entry activation
    const entries = gsap.utils.toArray('.experience-entry');
    entries.forEach((entry: any) => {
      const q = gsap.utils.selector(entry);
      
      // Activation highlight on scroll
      gsap.to(entry, {
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderColor: 'rgba(99, 102, 241, 0.2)',
        duration: 0.5,
        scrollTrigger: {
          trigger: entry,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play reverse play reverse',
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: entry,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from(q('.dot'), {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      })
      .from(q('.header-text'), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from(q('.period-badge'), {
        x: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.6')
      .from(q('.point'), {
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.4');
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-surface-container-low" id="experience">
      <div className="max-w-5xl mx-auto experience-container">
        <h2 className="font-display text-5xl md:text-7xl mb-28 uppercase tracking-tighter text-center lg:text-left">
          Chronicles of <span className="text-tertiary text-glow italic">Experience</span>
        </h2>
        
        <div className="relative space-y-32">
          {/* Vertical Line Container */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/5 pointer-events-none h-[calc(100%-2rem)]" />
          <div className="timeline-line absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-tertiary to-primary pointer-events-none origin-top h-[calc(100%-2rem)]" />

          {experiences.map((exp, i) => (
            <div key={i} className="experience-entry relative pl-16 py-12 pr-8 rounded-[2rem] border border-transparent transition-all duration-500 group">
              <div className={`dot absolute left-[0.2px] top-16 w-[15px] h-[15px] rounded-full bloom-${exp.color} transition-all duration-500 z-10 border-2 border-surface ${
                exp.color === 'primary' ? 'bg-primary' : 'bg-tertiary'
              } group-hover:scale-150`} />
              
              <div className="header flex flex-col md:flex-row md:justify-between items-start mb-10 gap-4">
                <div className="header-text">
                  <h3 className="font-display text-3xl md:text-5xl text-white mb-3 tracking-tight">{exp.role}</h3>
                  <p className={`font-bold text-2xl tracking-wide uppercase italic ${
                    exp.color === 'primary' ? 'text-primary' : 'text-tertiary'
                  }`}>{exp.company}</p>
                </div>
                <span className="period-badge text-sm font-mono bg-white/5 px-6 py-2 rounded-full border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 self-start">
                  {exp.period}
                </span>
              </div>
              
              <div className="space-y-8 max-w-4xl">
                {exp.points.map((point, j) => (
                  <div key={j} className="point flex gap-6 group/li">
                    <div className={`mt-2 p-1.5 rounded-full shrink-0 border h-fit ${
                      exp.color === 'primary' ? 'border-primary/20 bg-primary/5' : 'border-tertiary/20 bg-tertiary/5'
                    } group-hover/li:scale-110 transition-transform`}>
                      <ChevronRight size={16} className={`${
                        exp.color === 'primary' ? 'text-primary' : 'text-tertiary'
                      }`} />
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-200 group-hover/li:text-white transition-colors duration-500">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
