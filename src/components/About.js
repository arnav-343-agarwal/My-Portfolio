import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="content-section container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="content-element illustration-container">
          <Image src="/developer-illustration.png" alt="Developer Illustration" width={500} height={500} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="section-title text-5xl font-bold mb-6 text-gray-800">I'm Alex, a builder and a problem solver.</h2>
          <p className="content-element text-lg text-gray-600 mb-4">Currently in my final year of Computer Science at XYZ University, I'm passionate about the entire spectrum of software development, from architecting scalable backend systems to creating pixel-perfect, interactive frontend experiences.</p>
          <p className="content-element text-lg text-gray-600">My goal is to not just write code, but to build applications that are intuitive, efficient, and provide real-world value. I'm constantly learning and sharpening my skills on platforms like LeetCode & GeeksforGeeks to stay at the forefront of technology.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
