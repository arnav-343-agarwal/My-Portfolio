'use client';
import { Quote, PlayCircle } from 'lucide-react';

const Showcase = () => {
    return (
        <section id="showcase" className="content-section container mx-auto">
            <div className="text-center mb-16">
                 <h2 className="section-title text-5xl font-bold text-gray-800">In Case You Missed It...</h2>
                 <p className="content-element text-lg text-gray-600 mt-4">A couple of thoughts that guide my work.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="content-element">
                    <div className="custom-card p-8 bg-gray-800 text-white rounded-xl relative">
                        <Quote className="absolute top-4 left-4 w-12 h-12 text-gray-600" />
                        <blockquote className="text-2xl italic font-medium z-10 relative">
                            Refactoring your code is like cleaning up the kitchen after cooking. Skip it and things could get messy later on.
                        </blockquote>
                        <p className="text-right mt-4 text-gray-400 font-bold">- Ward Cunningham</p>
                    </div>
                </div>
                <div className="content-element group">
                    <div className="relative aspect-video bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <p className="z-10 text-2xl font-bold text-white">Play the video to learn more</p>
                        <PlayCircle className="absolute w-24 h-24 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
