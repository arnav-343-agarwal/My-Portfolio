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
            // Parallax effect for the background image
            gsap.to(image, {
                backgroundPosition: "50% -50px",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Parallax effect for the text
            gsap.from(textContent, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5
                }
            });

            // Liquid reveal animation for the section
            gsap.fromTo(section, 
                { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }, 
                { 
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    ease: 'power3.inOut',
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="relative h-[70vh] flex items-center justify-center my-24"
        >
            <div 
                ref={imageRef}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/quote-bg.jpg)' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60"></div>
            </div>

            <div ref={textRef} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                <QuoteIcon className="mx-auto w-16 h-16 text-white/50 mb-4" />
                <blockquote className="text-3xl md:text-5xl font-medium italic">
                    When you see your work come true, you're seeing a part of yourself outside of you.
                </blockquote>
                <p className="text-xl mt-6 font-semibold">- D. Sevilla</p>
            </div>
        </section>
    );
};

export default Quote;
