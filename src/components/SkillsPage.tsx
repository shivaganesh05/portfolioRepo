"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { SkillsData, TechItem } from "./SkillsData";

const SkillsPage: React.FC = () => {
  const [section, setSection] = useState<"Advance" | "Good" | "Familiar">(
    "Advance"
  );
  const [sectionData, setSectionData] = useState<TechItem[]>([]);
  const [isTechStack, setIsTechStack] = useState(false);

  const techStackRef = useRef<HTMLElement | null>(null);
  const techBoxesRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([entry]) => {
        setIsTechStack(entry.isIntersecting);
      },
      { rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}` }
    );

    if (techStackRef.current) {
      techStackObserver.observe(techStackRef.current);
    }

    if (isTechStack) {
      techBoxesRef.current?.classList.add("pop-up-child");
      buttonsRef.current?.classList.add("pop-up");
    } else {
      techBoxesRef.current?.classList.remove("pop-up-child");
      buttonsRef.current?.classList.remove("pop-up");
    }
  }, [isTechStack]);

  useEffect(() => {
    const selectedSection = SkillsData.find((s) =>
      s.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current?.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        id="techStack"
        ref={techStackRef}
        className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center flex justify-center items-center gap-3 text-gray-900 dark:text-white mb-12">
            <FaLaptopCode /> Skills
          </h2>

          {/* Buttons */}
    <div
  className="pop-down transition-all duration-500 m-auto rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800 w-full max-w-md"
  ref={buttonsRef}
>
  <div className="flex flex-nowrap justify-center">
    {(["Advance", "Good", "Familiar"] as const).map((btn) => (
      <button
        key={btn}
        onClick={() => {
          setSection(btn);
          if (section !== btn) {
            techBoxesRef.current?.classList.remove("pop-up-child");
          }
        }}
        className={`flex-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] p-3 font-medium text-sm md:text-base transition-colors duration-300 
          ${
            section === btn
              ? "bg-black dark:bg-white text-white dark:text-black"
              : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
      >
        {btn}
      </button>
    ))}
  </div>
</div>


          {/* Tech Boxes */}
          <div
            className="pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
            ref={techBoxesRef}
          >
            {sectionData.map((tech) => (
              <div
                key={tech.name}
                className="transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-gray-300 dark:border-gray-700 rounded flex flex-col gap-3 items-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <p>{tech.icon}</p>
                <p className="text-sm md:text-base font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SkillsPage;
