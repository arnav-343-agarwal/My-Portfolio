'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
    SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiNodedotjs, SiPython, SiExpress, SiGraphql,
    SiMongodb, SiPostgresql,
    SiDocker, SiAmazon, SiGit
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

const Skills = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

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
            { name: 'SQL', Icon: FaDatabase }, // ✅ fixed
            { name: 'MongoDB', Icon: SiMongodb },
            { name: 'PostgreSQL', Icon: SiPostgresql },
        ],
        'DevOps & Tools': [
            { name: 'Docker', Icon: SiDocker },
            { name: 'AWS', Icon: SiAmazon },
            { name: 'Git', Icon: SiGit },
        ],
    };

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(500, 500);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0x3B82F6,
            wireframe: true,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.8);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const onMouseMove = (event) => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            }
        };
        window.addEventListener('mousemove', onMouseMove);

        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            sphere.rotation.y = 0.1 * elapsedTime;
            camera.position.x += (mouseRef.current.x * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouseRef.current.y * 2 - camera.position.y) * 0.05;
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };
        tick();

        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <section id="skills" className="content-section container mx-auto">
            <h2 className="section-title text-5xl font-bold text-center mb-12 text-gray-800">My Technical Universe</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-1 h-[500px] w-full max-w-[500px] mx-auto relative content-element">
                    <canvas ref={canvasRef} className="w-full h-full"></canvas>
                </div>
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
                                        <div className="absolute bottom-full mb-2 w-64 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <h4 className="font-bold text-base mb-1">{name}</h4>
                                            <p>This is where a detailed description of my proficiency with {name} would go. For now, it's placeholder text demonstrating the interactive tooltip effect.</p>
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
