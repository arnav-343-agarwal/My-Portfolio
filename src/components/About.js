'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  const paras = [
    "Currently in my final year of Computer Science at XYZ University, I focus on building interactive and scalable applications. I enjoy exploring both frontend and backend development, and I make sure every project I work on is maintainable, efficient, and well-structured.",
    "I strive to write clean, efficient, and maintainable code that delivers real-world value for users. Beyond coding, I enjoy designing thoughtful system architectures and ensuring that every solution I build is both elegant and practical.",
    "I constantly explore new technologies, improve problem-solving skills on platforms like LeetCode & GeeksforGeeks, and stay updated with industry trends. My goal is to not just write code, but to build applications that are intuitive, efficient, and make a tangible impact."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraElems = gsap.utils.toArray(".about-para");

      gsap.set(paraElems.slice(1), { yPercent: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + paras.length * 120 + "%",
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
          <div className="relative w-full max-w-lg h-[500px] md:h-[580px]">
            <Image
              src="/hero-illustration.png"
              alt="Developer Snapshot Illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Paragraphs */}
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
