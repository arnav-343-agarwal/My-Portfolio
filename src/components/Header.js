'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 p-4 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container mx-auto flex justify-between items-center bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Cache Heavy-AWS</h1>
        <div>
          <Link href="#about" className="mx-2 text-gray-700 hover:text-blue-500 font-medium">About</Link>
          <Link href="#philosophy" className="mx-2 text-gray-700 hover:text-blue-500 font-medium">Philosophy</Link>
          <Link href="#experience" className="mx-2 text-gray-700 hover:text-blue-500 font-medium">Experience</Link>
          <Link href="#skills" className="mx-2 text-gray-700 hover:text-blue-500 font-medium">Skills</Link>
          <Link href="#projects" className="mx-2 text-gray-700 hover:text-blue-500 font-medium">Projects</Link>
          <Link href="#contact" className="mx-2 bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
