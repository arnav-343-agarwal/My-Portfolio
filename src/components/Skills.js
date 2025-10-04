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
                        scale: 1.2,
                        y: -10,
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
        const radius = 200; // Orbit radius
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    };

    return (
        <section 
            id="skills" 
            ref={sectionRef}
            className="relative min-h-screen py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 30px 30px, #3b82f6 1px, transparent 0)`,
                    backgroundSize: '60px 60px',
                }} />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 text-center">
                <h2 className="skills-title text-5xl md:text-6xl font-bold mb-20 text-gray-800">
                    Tech Stack
                </h2>

                {/* Central Orbit Container */}
                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Element - Circular GIF */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/student.gif"
                                alt="Tech Core"
                                width={128}
                                height={128}
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
                                    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-4 shadow-lg hover:shadow-2xl transition-all duration-300 w-24 h-24 flex flex-col items-center justify-center">
                                        <skill.Icon className={`w-10 h-10 ${skill.color} mb-2`} />
                                        <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                                            {skill.name}
                                        </span>
                                        
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 blur-sm -z-10 transition-opacity duration-300" />
                                    </div>

                                    {/* Connecting Line */}
                                    <div className="absolute top-1/2 left-1/2 w-px h-20 bg-gray-300/50 -translate-y-20 -translate-x-1/2 -z-20 origin-top" 
                                         style={{ transform: `translate(-50%, -100%) rotate(${(index / skills.length) * 360}deg)` }} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-2 border-gray-200/50 rounded-full m-20 -z-10"></div>
                    <div className="absolute inset-0 border border-gray-200/30 rounded-full m-32 -z-10"></div>
                </div>

                {/* Bottom Description */}
                <div className="mt-20 max-w-2xl mx-auto">
                    <p className="text-xl text-gray-600 leading-relaxed">
                        A versatile collection of technologies and tools that power modern web development, 
                        from interactive frontends to scalable backends and everything in between.
                    </p>
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-1/4 left-10 w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-40"></div>
            <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-cyan-100 rounded-full blur-xl opacity-40"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-100 rounded-full blur-xl opacity-30"></div>
        </section>
    );
};

export default Skills;