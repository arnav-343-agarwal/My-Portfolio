import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    const projectData = [
        {
            title: "Project Alpha",
            description: "A real-time collaborative code editor built with WebSockets, React, and Monaco Editor.",
            image: "https://placehold.co/600x400/E0E7FF/3B82F6?text=Project+Alpha"
        },
        {
            title: "Project Beta",
            description: "An e-commerce platform with a recommendation engine powered by machine learning.",
            image: "https://placehold.co/600x400/E0E7FF/3B82F6?text=Project+Beta"
        },
        {
            title: "Project Gamma",
            description: "A 3D portfolio visualizer built with Three.js and React Three Fiber.",
            image: "https://placehold.co/600x400/E0E7FF/3B82F6?text=Project+Gamma"
        }
    ];

  return (
    <section id="projects" className="content-section container mx-auto">
      <h2 className="section-title text-5xl font-bold text-center mb-12 text-gray-800">What I've Built</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
             <div key={index} className="content-element custom-card p-0 overflow-hidden">
                <Image src="/developer-illustration.png" width={600} height={400} className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link href="#" className="font-bold text-blue-500 hover:underline">View Project &rarr;</Link>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
