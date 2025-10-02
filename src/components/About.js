"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const paras = [
    "I’m Arnav Agarwal, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology. I love problem-solving and spend time on platforms like LeetCode and Codeforces, continuously sharpening my algorithmic thinking and exploring new ways to approach challenging coding problems. Programming, for me, is not just a skill but a way to creatively tackle complex problems and build solutions that matter.",
    "I’ve built amazing web applications that balance performance with clean, intuitive design and incorporate innovative ideas. From interactive front-end experiences to efficient back-end systems, I enjoy creating projects that are both functional and user-friendly. I also have a strong interest in system design, exploring how different components interact, scale, and remain reliable under demanding conditions.",
    "Alongside software development, I’m deeply passionate about mathematics — particularly probability, statistics, and calculus — which forms the foundation for my growing expertise in machine learning. I enjoy experimenting with data and algorithms to uncover smarter, more efficient solutions, constantly learning and applying mathematical concepts to real-world problems.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraElems = gsap.utils.toArray(".about-para");

      // Hide all except first paragraph
      gsap.set(paraElems.slice(1), { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + paras.length * 120 + "%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      paraElems.forEach((p, i) => {
        if (i === 0) return;
        tl.to(paraElems[i - 1], {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        }).to(
          p,
          { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
          "-=0.8"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative container mx-auto py-24">
      <h2 className="text-center text-5xl font-bold mb-10 text-blue-900">
        Professional Snapshot
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* One GIF on left with proper wavy mask */}
        <div className="relative w-full max-w-xl h-[550px] md:h-[620px] flex items-center justify-center">
          {/* SVG clipPath definition */}
          <svg className="absolute w-0 h-0">
            <clipPath id="wavyClip" clipPathUnits="objectBoundingBox">
              <path
                d="M0,0.2 
           C0.25,0.1,0.75,0.3,1,0.2 
           L1,0.8 
           C0.75,0.7,0.25,0.9,0,0.8 Z"
              />
            </clipPath>
          </svg>

          {/* GIF masked with clipPath */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: "url(#wavyClip)" }}
          >
            <Image
              src="/snapshot.gif"
              alt="Professional Snapshot"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Paragraphs on right with scroll effect */}
        <div className="relative h-80 md:h-96 overflow-hidden flex items-center justify-center">
          {paras.map((text, idx) => (
            <p
              key={idx}
              className="about-para absolute inset-0 text-xl md:text-2xl text-gray-700 leading-relaxed flex items-center justify-center px-6 text-center"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
