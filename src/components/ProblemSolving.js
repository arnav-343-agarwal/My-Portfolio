'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChess, FaPuzzlePiece, FaBrain, FaRocket, FaCode, FaChartLine } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodingninjas } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const ProblemSolving = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [activePlatform, setActivePlatform] = useState('leetcode');

    const platforms = {
        leetcode: {
            name: "LeetCode",
            Icon: SiLeetcode,
            stats: "500+ Problems",
            color: "from-orange-500 to-red-500",
            description: "Mastering data structures and algorithms through consistent practice"
        },
        codeforces: {
            name: "Codeforces",
            Icon: SiCodeforces,
            stats: "Expert Level",
            color: "from-red-500 to-purple-600",
            description: "Competitive programming challenges that push logical thinking limits"
        },
        codingninjas: {
            name: "Coding Ninjas",
            Icon: SiCodingninjas,
            stats: "Top Performer",
            color: "from-green-500 to-emerald-600",
            description: "Structured learning path with industry-relevant problem sets"
        }
    };

    const problemSolvingAreas = [
        {
            icon: FaChess,
            title: "Strategic Thinking",
            description: "Approaching problems like a chess game - thinking multiple moves ahead and anticipating edge cases",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: FaPuzzlePiece,
            title: "Pattern Recognition",
            description: "Identifying recurring patterns and applying optimized solutions across different problem domains",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: FaBrain,
            title: "Algorithmic Mindset",
            description: "Breaking down complex problems into manageable steps with optimal time and space complexity",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: FaRocket,
            title: "Optimization Focus",
            description: "Continually refining solutions for better performance and scalability in real-world applications",
            color: "from-orange-500 to-red-500"
        }
    ];

    const codingJourney = [
        { year: "2021", milestone: "Started competitive programming", achievement: "First LeetCode problem solved" },
        { year: "2022", milestone: "Deep dive into DSA", achievement: "Completed 300+ problems across platforms" },
        { year: "2023", milestone: "Advanced algorithms mastery", achievement: "Reached Expert rating on Codeforces" },
        { year: "2024", milestone: "Real-world applications", achievement: "Applying algorithms to build scalable systems" }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(".ps-title", {
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

            // Platform cards animation
            gsap.from(".platform-card", {
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".platforms-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Problem solving areas animation
            gsap.from(".ps-area-card", {
                x: -100,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".areas-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            // Journey timeline animation
            gsap.from(".journey-item", {
                x: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".journey-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Floating animation for main cards
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                gsap.to(card, {
                    y: -10,
                    duration: 2 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section 
            id="problem-solving" 
            ref={sectionRef}
            className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute rounded-full bg-cyan-400 animate-float"
                        style={{
                            left: `${(i * 4) % 100}%`,
                            top: `${(i * 6) % 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${4 + i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            {/* Binary code background */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full font-mono text-cyan-400 text-sm overflow-hidden">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap animate-scroll">
                            {Array.from({ length: 100 }).map((_, j) => (
                                <span key={j} className="mx-1">
                                    {Math.random() > 0.5 ? '1' : '0'}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Main Title */}
                <h2 className="ps-title text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Problem Solving DNA
                </h2>

                {/* Platforms Section */}
                <div className="platforms-section mb-20">
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Competitive Programming Platforms
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {Object.entries(platforms).map(([key, platform]) => (
                            <div
                                key={key}
                                ref={addToRefs}
                                className="platform-card relative group cursor-pointer"
                                onClick={() => setActivePlatform(key)}
                            >
                                <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center transition-all duration-300 group-hover:bg-white/15 ${
                                    activePlatform === key ? 'scale-105 border-cyan-400' : ''
                                }`}>
                                    <platform.Icon className={`w-16 h-16 mx-auto mb-4 ${
                                        activePlatform === key ? 'text-cyan-400' : 'text-white'
                                    }`} />
                                    <h4 className="text-xl font-bold text-white mb-2">{platform.name}</h4>
                                    <p className="text-cyan-300 font-semibold mb-3">{platform.stats}</p>
                                    <p className="text-gray-300 text-sm">{platform.description}</p>
                                    
                                    {/* Active indicator */}
                                    {activePlatform === key && (
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Split Layout - Problem Solving Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left - Problem Solving Areas */}
                    <div className="areas-section">
                        <h3 className="text-3xl font-bold text-white mb-8">My Approach to Problems</h3>
                        <div className="space-y-6">
                            {problemSolvingAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="ps-area-card relative group"
                                >
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-300 group-hover:bg-white/15">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${area.color}`}>
                                                <area.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">
                                                    {area.title}
                                                </h4>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {area.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Why I Love Problem Solving */}
                    <div className="journey-section">
                        <h3 className="text-3xl font-bold text-white mb-8">The Journey</h3>
                        <div className="space-y-6">
                            {codingJourney.map((step, index) => (
                                <div
                                    key={index}
                                    className="journey-item relative pl-8 border-l-2 border-cyan-400/30"
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full" />
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-cyan-400 font-bold text-lg mb-1">
                                            {step.year}
                                        </div>
                                        <div className="text-white font-semibold mb-2">
                                            {step.milestone}
                                        </div>
                                        <div className="text-gray-300 text-sm">
                                            {step.achievement}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Current Focus */}
                        <div className="mt-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-400/30">
                            <h4 className="text-xl font-bold text-white mb-3">Current Focus</h4>
                            <p className="text-gray-300 leading-relaxed">
                                Bridging the gap between competitive programming and real-world software engineering - 
                                applying algorithmic thinking to build scalable, efficient systems that solve meaningful problems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="text-center">
                    <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                        <div>
                            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                            <div className="text-gray-300">Problems Solved</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-400 mb-2">4+</div>
                            <div className="text-gray-300">Years Coding</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
                            <div className="text-gray-300">Programming Languages</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                            <div className="text-gray-300">Passion for Learning</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ProblemSolving;