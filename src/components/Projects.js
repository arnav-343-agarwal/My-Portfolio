"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "PoolMate",
      description:
        "The smart way to share your ride. Connect with travelers going your way, request to join pools, and manage trips effortlessly. Real-time notifications, secure logins, and intuitive controls make every journey convenient, cost-effective, and community-driven. Travel smarter, together.",
      image: "/project/poolmate.jpg",
    },
    {
      title: "Wander",
      description:
        "Discover the hidden gems of your city effortlessly. With an interactive map and a highly optimized flow, Wander lets you explore offbeat spots, secret corners, and beautiful places with ease. Urban exploration has never been this intuitive, seamless, and fun.",
      image: "/project/mycamp.jpg",
    },
    {
      title: "ZipURL",
      description:
        "More than a URL manager. ZipURL leverages Redis with LRU caching to store and retrieve links at lightning speed, ensuring minimal latency and maximum performance. Designed for scalability and efficiency, it handles high traffic seamlessly while providing a smart, robust, and reliable solution for managing URLs in real time.",
      image: "/project/zipurl-2.png",
    },
  ];

  return (
    <section id="projects" className="relative container mx-auto py-24 px-6">
      {/* GIF + Heading/Text Horizontal Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-15 relative z-10">
        {/* GIF on left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[280px] md:w-[360px] lg:w-[420px] mb-8 md:mb-0 mr-0 md:mr-16 lg:mr-20 flex-shrink-0"
        >
          <Image
            src="/project/sde-gif-2.gif"
            alt="Developer working"
            width={550}
            height={450}
            unoptimized
            className="w-full h-auto"
          />
        </motion.div>

        {/* Heading/Text on right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 max-w-[45rem]" // stretched more to right
        >
          <h2
            className="text-5xl mt-8 md:mt-12 md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-blue-900 tracking-tight"
            style={{ fontFamily: '"Merriweather", serif' }}
          >
            What I&apos;ve Built
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-700 leading-relaxed font-light">
            Here are some of the projects I have worked on, combining modern web
            technologies, creativity, and performance. Each project highlights
            my skills and approach towards building efficient and interactive
            applications.
          </p>
        </motion.div>
      </div>

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
                className="text-2xl md:text-3xl font-bold mb-3 text-blue-700 group-hover:text-blue-800 transition"
                style={{ fontFamily: '"Merriweather", serif' }}
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
