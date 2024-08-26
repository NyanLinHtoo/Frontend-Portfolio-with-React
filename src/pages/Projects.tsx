import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Props } from "../components/FullPage";
import { faLink, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectTable from "../components/ProjectTable";

const Projects = ({ id }: Props) => {
  const projects = [
    {
      title: "Task Management System",
      description: "A fullstack website for team project coordination...",
      image: "/images/task-management-tips.webp",
      link: "https://mtm-task-management.vercel.app/login",
      github: "https://github.com/NyanLinHtoo/Task-management-React-Nodejs-",
      techStack: [
        "React",
        "Redux",
        "Ant Design",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MySQL",
      ],
      credentials: {
        email: "nyanlinhtoo181199@gmail.com",
        password: "password1234",
      },
    },
    {
      title: "QuickChat",
      description: "QuickChat is a real-time messaging application...",
      image: "/images/quickchat.webp",
      link: "https://mtm-task-management.vercel.app/login",
      github: "https://github.com/NyanLinHtoo/Real-Time-Chat-App",
      techStack: [
        "React",
        "Material UI (MUI)",
        "Emoji-mart",
        "Sonner",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Axios",
      ],
    },
    {
      title: "Barber Shop",
      description:
        "Barber Shop is a website where you can easily book a haircut by email...",
      image: "/images/barbershop.webp",
      link: "https://mtm-task-management.vercel.app/login",
      github: "https://github.com/NyanLinHtoo/BarberShop",
      techStack: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Nodemailer",
        "FontAwesome",
      ],
    },
  ];

  return (
    <div id={id} className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.credentials && (
                  <div className="mb-4 p-3 bg-gray-100 rounded-md">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <FontAwesomeIcon icon={faLock} className="mr-2" />
                      Demo Credentials
                    </h4>
                    <p className="text-sm">
                      <strong>Email:</strong>{" "}
                      <span className="font-mono">
                        {project.credentials.email}
                      </span>
                    </p>
                    <p className="text-sm">
                      <strong>Password:</strong>{" "}
                      <span className="font-mono">
                        {project.credentials.password}
                      </span>
                    </p>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                    <FontAwesomeIcon icon={faLink} className="mr-2" shake />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="mr-2 text-lg"
                      shake
                    />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <ProjectTable />
      </div>
    </div>
  );
};

export default Projects;
