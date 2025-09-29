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
    <section id="philosophy" ref={sectionRef} className="relative overflow-hidden">
      {/* Background blue curve */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-blue-600">
        {/* Single curve from top-left to mid-right */}
        <svg className="absolute top-0 left-0 w-full h-[250px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,100 C250,100 400,30 1200,20 V-5 H0 Z" className="fill-blue-600"></path>
        </svg>

        {/* Faint circuit lines */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 pt-32 pb-24">
        <h2 className="philosophy-title text-white text-4xl md:text-5xl font-bold mb-20">
          Workplace Philosophy
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {philosophies.map((item, index) => (
            <div key={index} className="philosophy-item flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 md:w-40 md:h-40 transform hover:scale-110 transition-transform duration-300">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
