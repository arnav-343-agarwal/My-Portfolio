"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const paras = [
    "Currently in my final year of Computer Science at XYZ University, I focus on building interactive and scalable applications. I enjoy exploring both frontend and backend development, making sure every project is maintainable, efficient, and well-structured.",
    "I strive to write clean, efficient, and maintainable code that delivers real-world value for users. Beyond coding, I enjoy designing thoughtful system architectures and ensuring that every solution I build is elegant and practical.",
    "I constantly explore new technologies, improve problem-solving skills on platforms like LeetCode & GeeksforGeeks, and stay updated with industry trends. My goal is to not just write code, but to build applications that are intuitive, efficient, and impactful.",
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
        {/* One GIF on left */}
        {/* One GIF on left with proper wavy mask */}
        <div className="relative w-full max-w-lg h-[500px] md:h-[580px] flex items-center justify-center">
          {/* SVG clipPath definition */}
          <svg className="absolute w-0 h-0">
            <clipPath id="wavyClip" clipPathUnits="objectBoundingBox">
              {/* This path fills the full rect with wavy edges */}
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
