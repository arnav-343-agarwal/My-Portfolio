'use client';
import {
    SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiNodedotjs, SiPython, SiExpress, SiGraphql,
    SiMongodb, SiPostgresql,
    SiDocker, SiAmazon, SiGit
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Skills = () => {
    const skillCategories = {
        'Frontend': [
            { name: 'React', Icon: SiReact },
            { name: 'Next.js', Icon: SiNextdotjs },
            { name: 'JavaScript', Icon: SiJavascript },
            { name: 'HTML5', Icon: SiHtml5 },
            { name: 'CSS3', Icon: SiCss3 },
            { name: 'TailwindCSS', Icon: SiTailwindcss },
        ],
        'Backend': [
            { name: 'Node.js', Icon: SiNodedotjs },
            { name: 'Python', Icon: SiPython },
            { name: 'Express', Icon: SiExpress },
            { name: 'GraphQL', Icon: SiGraphql },
        ],
        'Databases': [
            { name: 'SQL', Icon: FaDatabase },
            { name: 'MongoDB', Icon: SiMongodb },
            { name: 'PostgreSQL', Icon: SiPostgresql },
        ],
        'DevOps & Tools': [
            { name: 'Docker', Icon: SiDocker },
            { name: 'AWS', Icon: SiAmazon },
            { name: 'Git', Icon: SiGit },
        ],
    };

    return (
        <section id="skills" className="content-section container mx-auto">
            <h2 className="section-title text-5xl font-bold text-center mb-12 text-gray-800">
                My Technical Universe
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                
                {/* 🔹 Robot Image (big, left side) */}
                <div className="lg:col-span-1 flex justify-center">
                    <img
                        src="/robot-white.png"
                        alt="AI Robot"
                        className="max-w-[900px] w-full object-contain"
                    />
                </div>

                {/* 🔹 Skills Grid (right side) */}
                <div className="lg:col-span-2">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="mb-8 content-element">
                            <h3 className="text-3xl font-bold mb-4 text-gray-700">{category}</h3>
                            <div className="flex flex-wrap gap-4">
                                {skills.map(({ name, Icon }, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex items-center gap-3 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <Icon className="w-10 h-10" />
                                        <span className="font-semibold text-gray-800">{name}</span>

                                        {/* Tooltip */}
                                        <div className="absolute bottom-full mb-2 w-64 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <h4 className="font-bold text-base mb-1">{name}</h4>
                                            <p>This is where a detailed description of my proficiency with {name} would go.</p>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
