import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiTypescript,
  SiJquery,
  SiAdobephotoshop,
  SiShadcnui,
  SiRedux,
  SiPayloadcms,
  SiPostgresql,
} from "react-icons/si";
import { DiJavascript1, DiReact } from "react-icons/di";
import { BsFiletypeScss, BsGit, BsGithub } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3Alt,
  
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export interface TechItem {
  name: string;
  icon: JSX.Element;
}

export interface TechSection {
  Advance: TechItem[];
  Good: TechItem[];
  Familiar: TechItem[];
}

export const SkillsData: TechSection[] = [
  {
    Advance: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
    
       {
        name: "NextJS",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color="#039be5" />,
      },
        {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Photoshop",
        icon: (
          <SiAdobephotoshop className="md:text-4xl text-2xl" color="#08668e" />
        ),
      },
     
      {
        name: "Vercel",
        icon: (
          <SiVercel className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },

 {
        name: "Shadcn ui",
        icon: <SiShadcnui className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
       {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />,
      },
        {
        name: "Material UI",
        icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
    ],
    Good: [
     
      {
        name: "SCSS",
        icon: <BsFiletypeScss className="md:text-4xl text-2xl" color="#f06292" />,
      },
      {
        name: "React Native",
        icon: (
          <TbBrandReactNative
            className="md:text-4xl text-2xl"
            color="#31b5ba"
          />
        ),
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color="#31b5ba" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#764ABC" />,
      },
      {
        name: "Payloadcms",
        icon: <SiPayloadcms className="md:text-4xl text-2xl" color="#F9FDE9" />,
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="md:text-4xl text-2xl font-bold" color="#1072c2" />,
      },
     
      {
        name: "WordPress",
        icon: <FaWordpress className="md:text-4xl text-2xl" color="#08668e" />,
      },
    ],
    Familiar: [
         {
        name: "Shopify",
        icon: <FaShopify className="md:text-4xl text-2xl" color="#99c14f" />,
      },
 {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xl" color="#106dae" />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui className="md:text-4xl text-2xl" color="#50cbc0" />,
      },
     
            {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
    
   
    ],
  },
];
