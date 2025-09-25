import  { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "IT Company Website",
    description: "Fervid Smart Solutions Private Limited - It's trusted partner in technology to drive innovation, growth, and success. Established in 2016.",
    category: "Bootstrap",
    image: "https://i.ibb.co/v62Vk1Dw/fervid233.png",
    url: "https://www.fervidsmart.com/index.html"
  },
  {
    id: 2,
    title: "IT Company Website",
    description: "Created the official corporate site for Seven83. Focused on branding, UI responsiveness, and stakeholder alignment",
    category: "React",
    image: "https://i.ibb.co/4ZjpFgQq/seven833.png",
    url: "https://seven83systems.com/"
  },
  {
    id: 3,
    title: "E-commerce Mobile Store",
    description: "e-commerce websites that have mastered the mobile experience. We evaluated each site on multiple smartphones,watches and tablets.",
    category: "React",
    image: "https://i.ibb.co/gbNqpc1j/image.png",
    url: "https://onlinemobilesshopping.netlify.app/"
  },
  {
    id: 4,
    title: "Happi Mobiles (E-Commerce) ",
    description: "Happi Mobiles is an e-commerce platform focused on selling mobile phones, Built a mobile friendly e-commerce site for tech products.",
    category: "React",
    image: "https://i.ibb.co/ZzJG08v8/happi-dash.png",
    url: "https://www.happimobiles.com/"
  },
   {
    id: 5,
    title: "Sales (E-Commerce)",
    description: "It E-Commerce a wide range of activities, from individual businesses selling products through their own websites",
    category: "React",
    image: "https://i.ibb.co/bRByWrF0/sale.png",
    url: "https://shoppingdress.netlify.app/"
  },
    {
    id: 6,
    title: "Travel",
    description: "Travel and tourism management the planning, organization, and execution of travel services for business purposes",
    category: "Bootstrap",
    image: "https://i.ibb.co/PzPgxzQy/travel123.png",
    url: "https://triptavel.netlify.app/"
  },
];

const categories = ["All", "Bootstrap", "React"];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <section id="work" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Selected Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Here selection of my recent projects.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="flex space-x-4 overflow-x-auto py-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeCategory === category 
                        ? 'bg-black dark:bg-white text-white dark:text-black' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {filteredProjects.map((project) => (
    <a
      key={project.id}
      href={project.url}
        target="_blank"

      className="block group"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative overflow-hidden rounded-lg ">
        {/* Blurred Background */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full object-cover filter blur-md scale-110 z-0"
          aria-hidden="true"
        />
        {/* Main Image */}
        <img
          src={project.image}
          alt={project.title}
          className="relative w-full  object-contain z-10 transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center z-20">
          <div className={`p-4 transition-all duration-500 ${
            hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
          }`}>
            <ArrowUpRight className="text-white" size={32} />
          </div>
        </div>
      </div>

      {/* Text Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          {project.category}
        </p>
      </div>
    </a>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;