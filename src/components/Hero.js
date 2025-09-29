"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Montserrat } from 'next/font/google'

const montserratBlack = Montserrat({
  subsets: ['latin'],
  weight: '700',
})

const Hero = () => {
  const heroRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.from(".hero-title", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-subheading", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.4,
      });
      gsap.from(".hero-buttons", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.6,
      });
      gsap.from(".hero-motto", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.8,
      });

      // Illustration entrance
      gsap.from(illustrationRef.current, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.8,
      });

      // Floating animation loop
      gsap.to(illustrationRef.current, {
        y: "-=20",
        rotation: 2,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Skill tags animation
      gsap.from(".skill-tag", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 1.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "Problem Solving", position: "top-24 -right-8" },
    { name: "Mathematics", position: "top-1/3 -left-16" },
    { name: "Full-Stack", position: "bottom-1/4 -right-16" },
    { name: "System Design", position: "top-12 left-1/4" },
    { name: "Machine Learning", position: "top-2 left-4" },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient + wave at bottom */}
      {/* Background gradient + top-left + bottom wave */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-blue-50">
        {/* Top-left wave */}
        <svg
          className="absolute top-0 left-0 w-[60%] h-64"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#dbeafe"
            fillOpacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,69.3C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
          ></path>
        </svg>

        {/* Bottom wave (already there) */}
        <svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#cfe0fc"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,197.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-4">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1
  className={`hero-title ${montserratBlack.className} text-5xl lg:text-7xl font-extrabold tracking-tight leading-snug mb-4 text-blue-900`}
>
  Engineering with an Artistic Touch
</h1>


          {/* Typing effect line */}
          <p className="hero-subheading text-xl md:text-2xl text-gray-900 font-medium mb-8">
            <TypeAnimation
              sequence={[
                "I craft elegant solutions ",
                2000,
                "I design scalable systems ",
                2000,
                "I merge creativity with code ",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
            <button className="bg-gradient-to-r from-sky-200 to-sky-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <p className="hero-motto text-md text-gray-600 mt-8">
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
