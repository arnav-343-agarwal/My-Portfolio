import Image from 'next/image';

const Philosophy = () => {
  const philosophies = [
    { title: 'High Quality', description: 'Writing clean, efficient, and maintainable code is non-negotiable.', icon: '/high-quality-icon.png' },
    { title: 'Results-Driven', description: 'Focusing on delivering tangible results and business value.', icon: '/results-driven-icon.png' },
    { title: 'Team Work', description: 'Believing that the best products are built through collaboration.', icon: '/team-work-icon.png' },
    { title: 'Long Term', description: 'Building for the future with scalable architecture and clear documentation.', icon: '/assets/long-term-icon.png' },
  ];

  return (
    <section id="philosophy" className="content-section container mx-auto text-center">
      <h2 className="section-title text-5xl font-bold mb-12 text-gray-800">My Workplace Philosophy</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {philosophies.map((item, index) => (
          <div key={index} className="content-element custom-card p-8">
            <Image src={item.icon} alt={item.title} width={96} height={96} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
