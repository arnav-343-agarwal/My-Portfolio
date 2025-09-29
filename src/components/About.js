'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  const paras = [
    "Currently in my final year of Computer Science at XYZ University, I focus on building interactive and scalable applications. I enjoy exploring both frontend and backend development, making sure every project is maintainable, efficient, and well-structured.",
    "I strive to write clean, efficient, and maintainable code that delivers real-world value for users. Beyond coding, I enjoy designing thoughtful system architectures and ensuring that every solution I build is elegant and practical.",
    "I constantly explore new technologies, improve problem-solving skills on platforms like LeetCode & GeeksforGeeks, and stay updated with industry trends. My goal is to not just write code, but to build applications that are intuitive, efficient, and impactful."
  ];

  const images = [
    "/about-1.png",
    "/about-2.png",
    "/about-3.png"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraElems = gsap.utils.toArray(".about-para");
      const imgElems = imageRefs.current;

      // Hide all except first paragraph and first image
      gsap.set(paraElems.slice(1), { yPercent: 100, opacity: 0 });
      gsap.set(imgElems.slice(1), { opacity: 0 });

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
          .to(p, { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" }, "-=0.8")
          .to(imgElems[i - 1], { opacity: 0, duration: 0.8 }, "-=1") // fade out previous image
          .to(imgElems[i], { opacity: 1, duration: 0.8 }, "-=1"); // fade in new image
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
        {/* Illustration stack */}
        <div className="relative w-full max-w-lg h-[500px] md:h-[580px] flex items-center justify-center">
          {images.map((src, idx) => (
            <div
              key={idx}
              ref={(el) => (imageRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={src}
                alt={`Snapshot ${idx + 1}`}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          ))}
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
