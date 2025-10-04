'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
    SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiNodedotjs, SiPython, SiExpress, SiGraphql,
    SiMongodb, SiPostgresql,
    SiDocker, SiAmazon, SiGit, SiTypescript
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);
    const skillsRef = useRef([]);
    const orbitRef = useRef(null);
    const textContentRef = useRef(null);

    const skills = [
        { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
        { name: 'Next.js', Icon: SiNextdotjs, color: 'text-gray-800' },
        { name: 'TypeScript', Icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'HTML5', Icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS3', Icon: SiCss3, color: 'text-blue-500' },
        { name: 'TailwindCSS', Icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Python', Icon: SiPython, color: 'text-blue-400' },
        { name: 'Express', Icon: SiExpress, color: 'text-gray-600' },
        { name: 'GraphQL', Icon: SiGraphql, color: 'text-pink-500' },
        { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'SQL', Icon: FaDatabase, color: 'text-blue-500' },
        { name: 'Docker', Icon: SiDocker, color: 'text-blue-400' },
        { name: 'AWS', Icon: SiAmazon, color: 'text-orange-400' },
        { name: 'Git', Icon: SiGit, color: 'text-orange-500' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(".skills-title", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Skills orbit animation
            gsap.from(".skill-orbit", {
                scale: 0,
                duration: 1.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            // Text content animation
            gsap.from(".text-content", {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Individual skills animation
            skillsRef.current.forEach((skill, index) => {
                if (!skill) return;

                gsap.fromTo(skill,
                    {
                        scale: 0,
                        opacity: 0
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Hover animations
                skill.addEventListener('mouseenter', () => {
                    gsap.to(skill, {
                        scale: 1.3,
                        y: -15,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                skill.addEventListener('mouseleave', () => {
                    gsap.to(skill, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Continuous rotation for orbit - but skills counter-rotate to stay upright
            gsap.to(orbitRef.current, {
                rotation: 360,
                duration: 40,
                repeat: -1,
                ease: "none"
            });

            // Counter-rotate skills to keep them upright
            skillsRef.current.forEach((skill) => {
                gsap.to(skill, {
                    rotation: -360,
                    duration: 40,
                    repeat: -1,
                    ease: "none"
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !skillsRef.current.includes(el)) {
            skillsRef.current.push(el);
        }
    };

    // Calculate positions for circular layout
    const getSkillPosition = (index, total) => {
        const angle = (index / total) * 2 * Math.PI;
        const radius = 220; // Adjusted for better fit in 60% width
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    };

    return (
        <section 
            id="skills" 
            ref={sectionRef}
            className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 40px 40px, #3b82f6 2px, transparent 0)`,
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 className="skills-title text-4xl md:text-6xl font-bold mb-16 text-gray-800 text-center">
                    Tech Stack
                </h2>

                {/* 60-40 Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    
                    {/* Left Side - 60% - Orbit Container */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-start">
                        <div className="relative h-[600px] w-full max-w-[600px] flex items-center justify-center">
                            {/* Central Element - Circular GIF */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-62 h-62 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                    <Image
                                        src="/student.gif"
                                        alt="Tech Core"
                                        width={224}
                                        height={224}
                                        className="w-full h-full object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>

                            {/* Skills Orbit */}
                            <div ref={orbitRef} className="skill-orbit absolute inset-0">
                                {skills.map((skill, index) => {
                                    const position = getSkillPosition(index, skills.length);
                                    return (
                                        <div
                                            key={index}
                                            ref={addToRefs}
                                            className="skill-item absolute cursor-pointer group"
                                            style={{
                                                left: `calc(50% + ${position.x}px)`,
                                                top: `calc(50% + ${position.y}px)`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            {/* Skill Card */}
                                            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl border-2 border-gray-200 p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 w-28 h-28 flex flex-col items-center justify-center">
                                                <skill.Icon className={`w-12 h-12 ${skill.color} mb-2`} />
                                                <span className="text-sm font-bold text-gray-800 text-center leading-tight">
                                                    {skill.name}
                                                </span>
                                                
                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-20 blur-md -z-10 transition-opacity duration-300" />
                                            </div>

                                            {/* Connecting Line */}
                                            <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gray-300/50 -translate-y-24 -translate-x-1/2 -z-20 origin-top" 
                                                 style={{ transform: `translate(-50%, -100%) rotate(${(index / skills.length) * 360}deg)` }} />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Outer Rings */}
                            <div className="absolute inset-0 border-3 border-gray-200/50 rounded-full m-16 -z-10"></div>
                            <div className="absolute inset-0 border-2 border-gray-200/30 rounded-full m-28 -z-10"></div>
                            <div className="absolute inset-0 border border-gray-200/20 rounded-full m-40 -z-10"></div>
                        </div>
                    </div>

                    {/* Right Side - 40% - Text Content */}
                    <div className="lg:col-span-2 text-content">
                        <div ref={textContentRef} className="space-y-8">
                            {/* Main Description */}
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                    My Technical Arsenal
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    A comprehensive collection of modern technologies and tools that power 
                                    cutting-edge web development. From creating interactive user interfaces 
                                    to building scalable backend systems.
                                </p>
                            </div>

                            {/* Skills Categories */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Frontend Mastery</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        React, Next.js, TypeScript, and modern CSS frameworks for creating 
                                        responsive and engaging user experiences.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Backend Expertise</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Node.js, Python, and Express for building robust server-side 
                                        applications and APIs.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Database & DevOps</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        MongoDB, PostgreSQL, Docker, and AWS for efficient data management 
                                        and seamless deployment.
                                    </p>
                                </div>
                            </div>

                            {/* Stats or Highlights */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Why This Stack?</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                        <span>Proven technologies for scalable applications</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>Modern development practices and workflows</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span>Strong community support and documentation</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span>Continuous learning and adaptation to new trends</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-40"></div>
            <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-cyan-100 rounded-full blur-xl opacity-40"></div>
        </section>
    );
};

export default Skills;