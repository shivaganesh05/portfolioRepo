import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 600);
  }, []);

  return (
    <section id="hero" className="lg:min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className='text-4xl md:text-4xl  lg:text-5xl font-bold' 
          >
            Chenna
          </h1>
          <br></br>
           <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl leading-5	 lg:text-7xl font-bold mb-6 opacity-0 transform translate-y-8 transition-all duration-700 text-gray-900 dark:text-white"
          >
                   SHIVAGANESH
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-12 opacity-0 transform translate-y-8 transition-all duration-700 delay-300"
          >
Passionate Frontend Developer focused on React and modern UI. I build clean, responsive, and user-friendly web apps that turn ideas into smooth, easy-to-use experiences.</p>
          <div 
            ref={ctaRef}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 transform translate-y-8 transition-all duration-700 delay-600"
          >
            <a 
              href="#work" 
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-black dark:border-white text-black dark:text-white rounded-full font-medium transition-transform duration-300 hover:scale-105"
            >
              Get in Touch
            </a>

            <a
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform duration-300 hover:scale-105"
                // href='https://drive.google.com/file/d/1CYHcG-qNjlm4AbQExy-srnxkBsUD9jIq/view?usp=sharing'
                href="https://drive.google.com/file/d/13uyOfEv2PpF9ZbCOlnCKe8Zq3FU4ENKB/view"
                target="_blank"
              >
Resume              </a>

          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
            <div className="w-1 h-4 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;