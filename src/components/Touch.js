"use client";

import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/touch.mp4" type="video/mp4" />
      </video>

      {/* Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6"
      >
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl mx-auto">
          Have a project in mind or just want to say hello? Let’s collaborate and
          bring ideas to life together.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
