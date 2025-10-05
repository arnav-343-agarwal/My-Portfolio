"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  const paras = [
    {
      text: "I'm Arnav Agarwal, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology. I love problem-solving and spend time on platforms like LeetCode and Codeforces, continuously sharpening my algorithmic thinking.",
      highlight: "Problem Solver"
    },
    {
      text: "I've built amazing web applications that balance performance with clean, intuitive design. From interactive front-end experiences to efficient back-end systems, I enjoy creating projects that are both functional and user-friendly.",
      highlight: "Full-Stack Developer"
    },
    {
      text: "Alongside software development, I'm deeply passionate about mathematics — particularly probability, statistics, and calculus — which forms the foundation for my growing expertise in machine learning.",
      highlight: "ML Enthusiast"
    },
  ];

  // Fixed particle positions (same on server and client)
  const fixedParticles = [
    { left: "12%", top: "76%" },
    { left: "36%", top: "29%" },
    { left: "39%", top: "41%" },
    { left: "86%", top: "95%" },
    { left: "11%", top: "5%" },
    { left: "79%", top: "75%" },
    { left: "19%", top: "49%" },
    { left: "91%", top: "69%" },
    { left: "89%", top: "42%" },
    { left: "63%", top: "60%" },
    { left: "16%", top: "51%" },
    { left: "99%", top: "98%" },
    { left: "59%", top: "83%" },
    { left: "63%", top: "91%" },
    { left: "1%", top: "84%" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Container entrance animation
      gsap.from(containerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate image container
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        rotationY: -15,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        }
      });

      // Enhanced paragraph animation with highlights
      const paraElems = gsap.utils.toArray(".about-para");
      const highlightElems = gsap.utils.toArray(".about-highlight");

      // Set initial states
      gsap.set(paraElems.slice(1), { 
        yPercent: 100, 
        opacity: 0,
        scale: 0.8
      });
      
      gsap.set(highlightElems.slice(1), {
        y: 50,
        opacity: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + paras.length * 150 + "%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      paraElems.forEach((p, i) => {
        if (i === 0) return;
        
        tl.to(paraElems[i - 1], {
          yPercent: -100,
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(highlightElems[i - 1], {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        }, "-=1.2")
        .to(p, { 
          yPercent: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2, 
          ease: "power2.inOut" 
        }, "-=0.8")
        .to(highlightElems[i], {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6");
      });

      // Floating animation for GIF
      gsap.to(imageRef.current, {
        y: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Particle background effect - ONLY on client side
      if (isMounted) {
        const particles = gsap.utils.toArray(".particle");
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            x: "random(-50, 50)",
            y: "random(-50, 50)",
            rotation: "random(-90, 90)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: "random(0, 3)"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 bg-white overflow-hidden">
      
      {/* Royal Container */}
      <div
        ref={containerRef}
        className="relative mx-6 lg:mx-12 xl:mx-20 min-h-[90vh] rounded-[3rem] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/30"
      >
        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-[3rem]"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-400/50 rounded-tr-[3rem]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-[3rem]"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/50 rounded-br-[3rem]"></div>

        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-[3rem] shadow-inset-glow pointer-events-none"></div>

        {/* Animated background particles - FIXED POSITIONS */}
        <div className="absolute inset-0 opacity-10">
          {fixedParticles.map((particle, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <h2 
          ref={titleRef}
          className="text-center text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pt-12"
        >
          Professional Snapshot
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 px-8">
          {/* Enhanced GIF container - Centered with proper spacing */}
          <div 
            ref={imageRef}
            className="relative w-full max-w-2xl h-[550px] flex items-center justify-center mx-auto lg:ml-12"
          >
            {/* Glass morphism container */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl transform perspective-1000">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 animate-pulse-slow" />
              
              {/* Enhanced wavy mask container */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <svg className="absolute w-0 h-0">
                  <clipPath id="wavyClip" clipPathUnits="objectBoundingBox">
                    <path
                      d="M0,0.1 
                 C0.2,0.2,0.4,0.05,0.5,0.1 
                 C0.6,0.15,0.8,0.05,1,0.1 
                 L1,0.9 
                 C0.8,0.8,0.6,0.95,0.5,0.9 
                 C0.4,0.85,0.2,0.95,0,0.9 Z"
                    />
                  </clipPath>
                </svg>

                <div
                  className="absolute inset-0 w-full h-full transform hover:scale-105 transition-transform duration-3000"
                  style={{ clipPath: "url(#wavyClip)" }}
                >
                  <Image
                    src="/snapshot.gif"
                    alt="Professional Snapshot"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                    priority
                    className="hover:scale-110 transition-transform duration-3000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced paragraphs container - Elevated and centered */}
          <div className="relative h-80 overflow-hidden flex items-center justify-center -mt-8">
            <div className="relative w-full max-w-2xl">
              {paras.map((item, idx) => (
                <div key={idx} className="about-content absolute inset-0 flex flex-col justify-center">
                  <h3 className="about-highlight text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {item.highlight}
                  </h3>
                  <p className="about-para text-xl text-gray-200 leading-relaxed text-center px-8">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Progress indicators */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              {paras.map((_, idx) => (
                <div
                  key={idx}
                  className="progress-dot w-3 h-3 rounded-full border-2 border-blue-400 transition-all duration-300"
                  data-index={idx}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-blue-400 text-sm font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .shadow-inset-glow {
          box-shadow: inset 0 0 50px rgba(59, 130, 246, 0.1),
                      inset 0 0 80px rgba(34, 211, 238, 0.05),
                      inset 0 0 100px rgba(6, 182, 212, 0.05);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;