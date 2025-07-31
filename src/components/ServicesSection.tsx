import React from 'react';

interface Service {
  id: number;
  title: string;
  points: string[];
  icon: JSX.Element;
}

const services: Service[] = [
  {
    id: 1,
    title: " Frontend Development",
    points: [
      "Building user-centered, responsive web interfaces with ReactJS and modern UI libraries.",
      "Expert in React Hooks, React Router, and state management for seamless single-page apps.",
      "Pixel-perfect, cross-browser compatible designs with Tailwind, MUI, Ant Design, and ShadCN,Material UI."
    ],
    icon: (
     <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "UI/UX Design",
    points: [
      "Designing intuitive, accessible interfaces with a focus on user behavior and experience.",
      "Creating high-fidelity UI mockups and interactive prototypes using Figma and Adobe tools.",
      "Designing responsive UI components: menus, tabs, modals, and widgets for modern apps."
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Component & Design System Integration",
    points: [
      "Developing reusable, scalable React components with Tailwind and design systems.",
      "Integrating systems like ShadCN, Material-UI, and Ant Design for consistent UI.",
      "Converting Figma designs into responsive, production-ready React components."
    ],
    icon: (
      
       <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Collaboration & Version Control",
    points: [
      "Clean, maintainable code with Git and GitHub for team collaboration.",
      "Branching, versioning, and pull request workflows in Agile environments.",
      "Debugging, troubleshooting, and optimizing applications for better UX."
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];


const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Creating impactful digital experiences with React, Bootstrap, and Next.js. I build fast, responsive websites and applications that help businesses and individual Projects.



            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-black dark:text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
