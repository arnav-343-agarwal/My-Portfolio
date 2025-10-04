"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Engineer Intern (Upcoming...)",
    company: "Booking Holdings",
    date: "January 2026",
    description:
      "Developed a full-stack feature for the main consumer app using React and Node.js. Optimized database queries which resulted in a 20% performance increase.",
    images: [
      "/experience/bh-logo-1.png",
      "/experience/bh-logo-1.png",
      "/experience/bh-logo-2.jpg",
    ],
    type: "work"
  },
  {
    role: "Research and Development Intern",
    company: "Samsung",
    date: "Jan 2024 - Aug 2024",
    description:
      "Redesigned and implemented the company's marketing website using Next.js. Improved SEO scores by 30% and page load times by 50%.",
    images: ["/assets/exp2-1.jpg", "/experience/samsungresearch.jpeg", "/experience/samsung-2.png"],
    type: "intern"
  },
  {
    role: "Open Source Contributor",
    company: "Awesome Project",
    date: "Ongoing",
    description:
      "Contributed features and bug fixes to a popular open-source library, collaborating with developers worldwide and learning about CI/CD pipelines.",
    images: ["/assets/exp3-1.jpg", "/assets/exp3-2.jpg", "/assets/exp3-3.jpg"],
    type: "opensource"
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline connector
      gsap.fromTo('.timeline-connector',
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate timeline nodes
      gsap.fromTo('.timeline-node',
        { scale: 0, rotation: 180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate year markers
      gsap.fromTo('.year-marker',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate cards with enhanced effects
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(item,
          {
            x: 100,
            opacity: 0,
            rotationY: 15
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animations
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Pulse animation for timeline nodes
      gsap.to('.timeline-node', {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'work': return 'from-blue-500 to-cyan-500';
      case 'intern': return 'from-green-500 to-emerald-500';
      case 'opensource': return 'from-purple-500 to-pink-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 sm:mb-20 text-gray-800 font-heading">
        My Journey So Far
      </h2>

      <div className="relative max-w-5xl mx-auto pl-4 md:pl-8">
        {/* Enhanced Timeline */}
        <div className="flex flex-col md:flex-row gap-8 relative">
          
          {/* Left: Enhanced Timeline - Made more compact */}
          <div className="relative md:w-1/5 flex flex-col items-center">
            {/* Central Timeline Connector */}
            <div className="timeline-connector absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 h-full rounded-full shadow-lg"></div>
            
            {/* Timeline Nodes with Year Markers */}
            <div className="flex flex-col justify-between h-full space-y-24 mt-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  {/* Timeline Node */}
                  <div className="timeline-node relative w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg border-3 border-white z-10">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-60" />
                  </div>
                  
                  {/* Year Marker - Moved closer */}
                  <div className="year-marker absolute top-1/2 left-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-white/60">
                    <span className="font-bold text-slate-700 text-xs">
                      {exp.date.split(' ')[exp.date.split(' ').length - 1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Start/End Markers */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right: Your Cards (Without Icons) - Expanded width */}
          <div className="md:w-4/5 flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                ref={addToRefs}
                className="exp-card relative px-6 py-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 min-h-[280px] transform-style-3d"
              >
                {/* Gradient Accent Line */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${getTypeColor(exp.type)} rounded-l-2xl`} />
                
                {/* Content - No Icon Container */}
                <div className="flex flex-col gap-3 pl-4">
                  <p className="text-xl md:text-2xl font-bold text-blue-700">
                    {exp.company}
                  </p>
                  <h3 className="text-md md:text-lg font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-gray-500">{exp.date}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {/* Extra Content */}
                  <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1 text-sm">
                    <li>
                      Worked with React, Node.js, and MongoDB for full-stack
                      development.
                    </li>
                    <li>
                      Implemented feature X which improved user engagement by
                      25%.
                    </li>
                  </ul>

                  {/* Images */}
                  <div className="flex gap-3 mt-3">
                    {exp.images.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className="relative flex-1 aspect-video rounded-md overflow-hidden shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${exp.role} image ${i + 2}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-2xl opacity-0 hover:opacity-5 blur-md -z-10 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Experience;