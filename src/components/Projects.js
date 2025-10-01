"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Project Alpha",
      description:
        "A real-time collaborative code editor built with WebSockets, React, and Monaco Editor.",
      image: "https://placehold.co/600x400/1E3A8A/FFFFFF?text=Project+Alpha",
    },
    {
      title: "Project Beta",
      description:
        "An e-commerce platform with a recommendation engine powered by machine learning.",
      image: "https://placehold.co/600x400/0F766E/FFFFFF?text=Project+Beta",
    },
    {
      title: "Project Gamma",
      description:
        "A 3D portfolio visualizer built with Three.js and React Three Fiber.",
      image: "https://placehold.co/600x400/7C3AED/FFFFFF?text=Project+Gamma",
    },
  ];

  return (
    <section id="projects" className="relative container mx-auto py-24 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-24 text-gray-900 tracking-tight relative z-10"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        What I&apos;ve Built
      </motion.h2>

      {/* Big Developer GIF - Decorative */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 md:right-10 lg:right-20 w-[300px] md:w-[400px] lg:w-[500px] -translate-y-12 z-0 opacity-80 pointer-events-none"
      >
        <Image
          src="/project/sde-gif.gif"
          alt="Developer working"
          width={500}
          height={500}
          unoptimized
          className="w-full h-auto"
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg border border-white/20"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Text Content */}
            <div className="relative p-6 z-10">
              <h3
                className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {project.title}
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed font-light">
                {project.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Project
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
