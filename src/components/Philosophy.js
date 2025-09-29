'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);

  const philosophies = [
    { title: 'Results-Driven', icon: '/results-driven-icon.png' },
    { title: 'High Quality', icon: '/high-quality-icon.png' },
    { title: 'Long Term & Tech Docs', icon: '/high-quality-icon.png' },
    { title: 'Team Work', icon: '/team-work-icon.png' },
  ];
  
  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
        gsap.from(".philosophy-item", {
            y: 100,
            autoAlpha: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.from(".philosophy-title", {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
        id="philosophy" 
        ref={sectionRef} 
        className="content-section relative bg-[#0F1A4A] text-white py-24 overflow-hidden"
    >
        {/* Background Wave SVG */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#1E3A8A" fillOpacity="0.5" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
            <h2 className="philosophy-title section-title text-4xl md:text-5xl font-bold mb-20">Workplace Philosophy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                {philosophies.map((item, index) => (
                    <div key={index} className="philosophy-item flex flex-col items-center gap-4">
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <Image 
                                src={item.icon} 
                                alt={item.title} 
                                layout="fill" 
                                objectFit="contain"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-center">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Philosophy;

