"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Code, Users } from "lucide-react";
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
    Icon: Briefcase,
  },
  {
    role: "Research and Development Intern",
    company: "Samsung",
    date: "Jan 2024 - Aug 2024",
    description:
      "Redesigned and implemented the company's marketing website using Next.js. Improved SEO scores by 30% and page load times by 50%.",
    images: ["/assets/exp2-1.jpg", "/experience/samsungresearch.jpeg", "/experience/samsung-2.png"],
    Icon: Code,
  },
  {
    role: "Open Source Contributor",
    company: "Awesome Project",
    date: "Ongoing",
    description:
      "Contributed features and bug fixes to a popular open-source library, collaborating with developers worldwide and learning about CI/CD pipelines.",
    images: ["/assets/exp3-1.jpg", "/assets/exp3-2.jpg", "/assets/exp3-3.jpg"],
    Icon: Code,
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline progress
      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Animate cards
      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        gsap.from(card, {
          x: 100,
          autoAlpha: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="container mx-auto py-20 sm:py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 sm:mb-20 text-gray-800 font-heading">
        My Journey So Far
      </h2>

      <div className="flex flex-col md:flex-row gap-12 relative max-w-6xl mx-auto md:translate-x-[-8%]">
        {/* Timeline Left */}
        <div className="relative md:w-1/4 flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-[45%] h-full w-1 bg-gray-200 rounded-full"></div>
          {/* Animated progress */}
          <div
            ref={progressRef}
            className="absolute left-[45%] top-0 h-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full origin-top"
          ></div>

          {/* Dots and dates */}
          <div className="flex flex-col justify-between h-full space-y-20 mt-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <div className="w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                <span className="mt-2 text-sm text-gray-500">{exp.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Right */}
        <div className="md:w-3/4 flex flex-col gap-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card relative px-6 py-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 min-h-[300px]"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Icon */}
                <div className="flex-shrink-0 p-4 bg-blue-100 text-blue-500 rounded-full self-start">
                  <exp.Icon size={28} />
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <p className="text-lg md:text-2xl font-bold text-blue-700">
                    {exp.company}
                  </p>
                  <h3 className="text-md md:text-lg font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-gray-500">{exp.date}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Extra Content */}
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>
                      Worked with React, Node.js, and MongoDB for full-stack
                      development.
                    </li>
                    <li>
                      Implemented feature X which improved user engagement by
                      25%.
                    </li>
                  </ul>

                  {/* Remaining images */}
                  {/* Remaining images */}
                  <div className="flex gap-4 mt-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
