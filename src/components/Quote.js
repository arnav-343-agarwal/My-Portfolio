'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote as QuoteIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const textContent = textRef.current;

    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(image, {
        backgroundPosition: "50% -80px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Text animation
      gsap.fromTo(
        textContent,
        { opacity: 0, y: 60, letterSpacing: "0.05em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0em",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[80vh] flex items-center justify-center my-32 overflow-hidden"
    >
      {/* Background with curve */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/blue-bg-2.jpg)',
          clipPath: 'ellipse(100% 85% at 50% 50%)'
        }}
      >
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        <QuoteIcon className="mx-auto w-16 h-16 text-white/70 mb-6 drop-shadow-lg" />
        <blockquote className="text-3xl md:text-5xl font-medium italic leading-snug">
          "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."
        </blockquote>
        <p className="text-xl mt-6 font-semibold tracking-wide">- Bill Gates</p>
      </div>
    </section>
  );
};

export default Quote;
