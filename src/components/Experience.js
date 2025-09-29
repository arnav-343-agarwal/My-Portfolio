'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Code, Users } from 'lucide-react';

const Experience = () => {
    const sectionRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const experiences = [
        {
          role: 'Software Engineer Intern',
          company: 'Tech Giant Inc.',
          date: 'Summer 2024',
          description: 'Developed a full-stack feature for the main consumer application using React and Node.js. Optimized database queries which resulted in a 20% performance increase, impacting millions of users.',
          align: 'left',
          Icon: Briefcase
        },
        {
          role: 'Web Development Intern',
          company: 'Creative Startup',
          date: 'Winter 2023',
          description: 'Redesigned and implemented the company\'s marketing website using Next.js and Tailwind CSS. Improved SEO scores by 30% and page load times by 50%.',
          align: 'right',
          Icon: Code
        },
        {
          role: 'Open Source Contributor',
          company: 'Awesome Project',
          date: 'Ongoing',
          description: 'Contributed features and bug fixes to a popular open-source library, collaborating with developers worldwide. Gained experience in code reviews and CI/CD pipelines.',
          align: 'left',
          Icon: Code
        },
        {
          role: 'Head of University Coding Club',
          company: 'XYZ University',
          date: '2022-2023',
          description: 'Organized workshops and coding competitions for over 200 students. Mentored junior members and fostered a collaborative learning environment.',
          align: 'right',
          Icon: Users
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.timeline-progress', {
                scaleY: 1,
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: 1.5,
                }
            });

            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item) => {
                gsap.from(item.querySelector('.custom-card'), {
                    x: () => item.classList.contains('timeline-left') ? '-100%' : '100%',
                    autoAlpha: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                });

                gsap.from(item.querySelector('.timeline-dot'), {
                    scale: 0,
                    autoAlpha: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                });

                gsap.from(item.querySelector('.experience-icon'), {
                    scale: 0,
                    rotate: -180,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });

            // shimmer effect on line
            gsap.to(".timeline-progress", {
              backgroundPosition: "0 100%",
              duration: 4,
              repeat: -1,
              ease: "linear"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="content-section container mx-auto" ref={sectionRef}>
            <h2 className="section-title text-5xl font-bold text-center mb-20 text-gray-800">
                My Journey So Far
            </h2>

            <div className="timeline relative w-full max-w-5xl mx-auto">
                {/* Base gray line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

                {/* Animated gradient line */}
                <div className="timeline-progress absolute top-0 left-1/2 -translate-x-1/2 
                    h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 
                    rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] origin-top">
                </div>

                {/* Floating glow dots */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col justify-between h-full pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-blue-400 rounded-full 
                            shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-bounce"
                             style={{ animationDelay: `${i * 0.6}s` }}></div>
                    ))}
                </div>

                {/* Timeline items */}
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-item timeline-${exp.align} relative w-full my-10`}>
                        <div className="timeline-dot absolute top-5 w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                        <div className="custom-card flex items-center gap-4 p-4 md:p-6 
    w-full md:w-[70%] rounded-2xl shadow-lg bg-white 
    hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">

    <div className="experience-icon flex-shrink-0 p-3 bg-gradient-to-tr from-blue-400 to-purple-500 text-white rounded-full shadow-md">
        <exp.Icon size={22} />
    </div>

    <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{exp.role}</h3>
        <p className="text-sm font-medium text-blue-500">{exp.company}</p>
        <p className="text-xs text-gray-400 mb-1">{exp.date}</p>
        <p className="text-gray-600 text-sm leading-normal">{exp.description}</p>
    </div>
</div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
