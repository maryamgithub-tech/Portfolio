import { useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useGSAP, gsap } from '../lib/gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero-title span', {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.4')
    .from('.hero-desc', {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, '-=0.6')
    .from('.hero-btns', {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, '-=0.6')
    .from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=1.2');

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.15),rgba(19,19,27,1))]"
      id="hero"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div ref={textRef} className="max-w-2xl">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <MapPin size={12} className="text-primary" /> DHA 2, Islamabad
            </span>
          </div>

          <h1 className="hero-title font-display text-[80px] md:text-[100px] leading-[0.9] mb-8 tracking-tighter">
            <span className="block text-white uppercase">MARYAM</span>
            <span className="block text-primary uppercase text-glow">SEEMAB</span>
          </h1>

          <p className="hero-desc font-display text-2xl md:text-3xl text-gray-400 max-w-xl mb-12 leading-snug">
            MERN Stack Developer crafting premium digital architectures with precision and <span className="text-white italic">mystery</span>.
          </p>

          <div className="hero-btns flex flex-nowrap gap-3 sm:gap-6">
            <a 
              href="#projects" 
              className="flex-1 sm:flex-none px-6 sm:px-8 py-4 bg-primary text-black rounded-xl font-bold flex items-center justify-center gap-2 bloom-primary hover:translate-y-[-4px] transition-all duration-300"
            >
              View Projects <ArrowRight size={20} className="hidden sm:block" />
            </a>
            <a 
              href="#contact" 
              className="flex-1 sm:flex-none px-6 sm:px-8 py-4 glass-card rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div ref={imageRef} className="hidden lg:block relative perspective-1000">
          <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-full opacity-50" />
          <div className="relative z-10 glass-card p-4 rounded-[2.5rem] border border-white/20 rotate-3 transition-transform duration-700 hover:rotate-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnkX8CbwI17WzklvEGRyRxsZkLwQUoCG6ZajIqIBQF0rzi3o3TuNVS1XsnWhLZ1S2cV6mktUPyzn98bmEkfIU-0P1nPRRbqOsXChSoaHOl36YsRzWa4F9yWMQ1Y6CekM7v43ilze0niY3ZeRCx1IlXtzbCdK8u06KVJgdXgxvoAZST9lNtG0EikyuO7WOSx2nxKFgsAuhsEcIjHyihZ7zfNl4v78mv9eZxsWkD_19O3_tNRE4IQovY3mOPcbJXpUMZUAPrgi7ZFej0" 
              alt="Professional Workspace"
              className="rounded-[2rem] w-full object-cover shadow-2xl h-[500px]"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
