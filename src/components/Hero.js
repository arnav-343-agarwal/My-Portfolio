'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const illustrationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text animations
            gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.2 });
            gsap.from(".hero-subheading", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.4 });
            gsap.from(".hero-buttons", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.6 });
            gsap.from(".hero-motto", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.8 });

            // Illustration entrance
            gsap.from(illustrationRef.current, { duration: 1.5, y: 100, opacity: 0, ease: "power3.out", delay: 0.8 });

            // Floating animation loop
            gsap.to(illustrationRef.current, {
                y: "-=20",
                rotation: 2,
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });

            // Skill tags animation
            gsap.from(".skill-tag", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out(1.7)", stagger: 0.15, delay: 1.4 });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        { name: 'Problem Solving', position: 'top-24 -right-8' },
        { name: 'Mathematics', position: 'top-1/3 -left-16' },
        { name: 'Full-Stack', position: 'bottom-1/4 -right-16' },
        { name: 'System Design', position: 'top-12 left-1/4' },
        { name: 'Machine Learning', position: 'top-2 left-4' },
    ];

    return (
        <section id="hero" ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
            {/* Background gradient + wave at bottom */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-blue-50">
                <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#cfe0fc" fillOpacity="1" d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,197.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-4">
                {/* Left Column: Text Content */}
                <div className="text-center md:text-left">
                    <h1 className="hero-title text-5xl lg:text-7xl font-extrabold tracking-tight leading-snug mb-4 text-gray-800">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                            Engineering with an Artistic Touch
                        </span>
                    </h1>
                    <p className="hero-subheading text-xl md:text-2xl text-gray-600 font-medium mb-8">
                        I craft elegant solutions that merge technology and design.
                    </p>
                    <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-4">
                        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                            <Mail size={20} />
                            <span>Contact Me</span>
                        </button>
                        <button className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2">
                            <span>Learn More</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                    <p className="hero-motto text-md text-gray-500 mt-8">
                        Seek out challenges that make you better than yesterday.
                    </p>
                </div>

                {/* Right Column: Animated Illustration */}
                {/* Right Column: Animated Illustration */}
                <div className="hidden md:flex items-center justify-center h-full relative">
                <div
                    ref={illustrationRef}
                    className="relative w-[480px] h-[480px] lg:w-[580px] lg:h-[580px] cursor-pointer"
                >
                    <Image
                    src="/hero-illustration.png"
                    alt="Developer Illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    />
                    {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`skill-tag absolute ${skill.position} bg-white/80 backdrop-blur-sm text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg`}
                    >
                        {skill.name}
                    </div>
                    ))}
                </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
