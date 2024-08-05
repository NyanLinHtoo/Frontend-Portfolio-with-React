import { Props } from "./FullPage";

const AboutMe = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/3">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
              <img
                src="./images/download.jpg"
                alt="Nyan Lin Htoo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Nyan Lin Htoo</h3>
                <p className="text-gray-200">
                  Full-Stack Developer | Frontend Developer
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hi there!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Mr. Nyan Lin Htoo
                </span>
                , a passionate frontend developer with over a year and 4 months
                of experience. My journey in web development has equipped me
                with a strong foundation in both front-end and back-end
                technologies, with a primary focus on crafting exceptional user
                interfaces.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My dedication to excellence and continuous learning has been
                pivotal in my growth as a proficient front-end web developer. I
                take pride in delivering innovative solutions that not only meet
                but exceed expectations, contributing significantly to business
                growth and user satisfaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In this ever-evolving field, I am committed to staying at the
                forefront of new technologies and best practices. My goal is to
                create standout projects that push the boundaries of what's
                possible in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
