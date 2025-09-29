import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="content-section container mx-auto text-center">
      <h2 className="section-title text-5xl font-bold mb-4 text-gray-800">Let's Build Something Amazing</h2>
      <p className="content-element text-xl text-gray-600 mb-8 max-w-2xl mx-auto">I'm currently seeking new opportunities and challenges. If you have a project in mind, want to collaborate, or just want to say hi, my inbox is always open!</p>
      <Link href="mailto:alex.doe@email.com" className="content-element inline-block bg-blue-500 text-white py-4 px-8 rounded-full font-bold text-xl hover:bg-blue-600 transition-colors shadow-lg">Get In Touch</Link>
    </section>
  );
};

export default Contact;
