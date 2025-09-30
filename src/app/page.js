import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Background from '@/components/Background';
import Showcase from '@/components/Showcase';
import Quote from '@/components/Quote';

export default function Home() {
  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">
        <Background />
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <Skills />
        <Quote/>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
