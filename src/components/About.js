'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const paras = [
    "Currently in my final year of Computer Science at XYZ University, I focus on building interactive and scalable applications.",
    "I strive to write clean, efficient, and maintainable code that delivers real-world value for users.",
    "I constantly explore new technologies and improve problem-solving skills to stay at the forefront of software development."
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
          end: () => "+=" + paras.length * 100 + "%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      paraElems.forEach((p, i) => {
        if (i === 0) return;
        tl.to(paraElems[i - 1], { yPercent: -100, opacity: 0, duration: 1, ease: "power2.inOut" })
          .to(p, { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "-=0.8");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative container mx-auto py-24">
      <h2 className="text-center text-5xl font-bold mb-16 text-blue-900">
        Professional Snapshot
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Illustration */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md h-auto p-8 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <Image
              src="/hero-illustration.png"
              alt="Developer Snapshot Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Paragraphs */}
        <div className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center">
          {paras.map((text, idx) => (
            <p
              key={idx}
              className="about-para absolute inset-0 text-2xl md:text-3xl text-gray-700 leading-relaxed flex items-center justify-center px-4 text-center"
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
