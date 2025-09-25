const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I have 3.8 years of experience as a Frontend Developer,
                specializing in building responsive  web
                applications.
                <br></br> I'm a creative developer and designer with over a
                decade of experience crafting digital experiences that connect
                brands with their audiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate and driven ReactJS developer with a strong foundation
                in UI, React and NextJS. Dedicated to creating dynamic and
                user-centric web applications. Eager to contribute my expertise
                in frontend frameworks, modern UI/UX design, and responsive
                development to a forward-thinking team.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-transform duration-300 hover:scale-105"
                >
                  Let's work together
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Skills
                </h3>
                <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      Technical Skills
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>SASS</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      Frameworks & Libraries
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>React</li>
                      <li>NextJS</li>
                      <li>Meterial UI</li>
                      <li>Shad cn UI</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      Tools & Platform
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Git</li>
                      <li>Photoshop</li>
                      <li>Unlayer </li>
                      <li>Wordpress</li>
                      <li>Shopify</li>
                      <li>Vercel</li>
                    </ul>
                  </div>
                </div>
              </div> */}

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Experience
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Seven83 Systems Pvt. Ltd.{" "}
                    </p>
                    <p>
                      Front End Developer , <br></br>Aug 2023 - Sep 2025
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Happi Mobiles Pvt. Ltd.{" "}
                    </p>
                    <p>
                      Web Developer ,<br></br> Nov 2022 - Aug 2023{" "}
                    </p>
                  </li>
                  <li>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Ivory Innovation Pvt. Ltd.{" "}
                    </p>
                    <p>
                      UI/UX Developer ,<br></br> Dec 2021 - Nov 2022{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
