import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGSAP, gsap, ScrollTrigger } from './lib/gsap';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Global scroll reveal for sections that don't have custom triggers
    const revealSections = gsap.utils.toArray('section:not(#skills):not(#hero):not(#experience):not(#summary)');
    revealSections.forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: 80, autoKill: true },
            ease: 'power4.inOut'
          });
        }
      });
    });

    // Refresh scroll triggers once everything is rendered
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-surface selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
