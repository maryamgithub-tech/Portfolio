import { useRef } from 'react';
import { useGSAP, gsap } from '../lib/gsap';

export default function Summary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLParagraphElement>(null);
  const isSplit = useRef(false);

  useGSAP(() => {
    if (!narrativeRef.current) return;
    
    // Only split once to avoid destroying the DOM on every re-render
    if (!isSplit.current) {
      const text = narrativeRef.current.innerText;
      const words = text.split(' ');
      narrativeRef.current.innerHTML = words
        .map(word => `<span class="word inline-block opacity-0 translate-y-4 mr-[0.2em]">${word}</span>`)
        .join('');
      isSplit.current = true;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from('.narrative-title', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.word', {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.5');

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section-padding bg-surface-container-lowest overflow-hidden border-y border-white/5" id="summary">
      <div className="max-w-4xl mx-auto">
        <h2 className="narrative-title font-display text-4xl md:text-6xl font-semibold mb-12 border-l-4 border-primary pl-8 uppercase tracking-tight">
          Professional <span className="text-primary italic">Narrative</span>
        </h2>
        <p ref={narrativeRef} className="font-sans text-2xl md:text-3xl text-gray-400 leading-relaxed text-pretty font-light">
          With over 2 years of collective expertise as a MERN Stack Developer, I specialize in building high-performance, scalable web applications. My expertise lies in bridging complex backend architectures with sophisticated, user-centric frontend experiences. I deliver "future-proof" quality by leveraging modern stacks and precision-engineered solutions for diverse business needs.
        </p>
      </div>
    </section>
  );
}
