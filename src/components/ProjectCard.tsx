import { Card, Image, Tag } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface ProjectCardProps {
  title: string;
  image: string;
  link?: string;
  github: string;
  description: string;
  techStack: string[];
  credentials?: {
    email: string;
    password: string;
  };
  onCredentialsClick?: () => void;
}

const ProjectCard = ({
  image,
  title,
  link,
  github,
  description,
  techStack,
  credentials,
  onCredentialsClick,
}: ProjectCardProps) => {
  return (
    <div className="relative h-full ">
      <div className="absolute -inset-0.5 bg-purple-300 rounded-2xl opacity-0 group-hover:opacity-75 transition duration-300 blur-sm group-hover:blur-md"></div>
      <Card
        className="group transform transition-all duration-300 hover:shadow-2xl rounded-2xl border-transparent h-full dark:bg-gray-800"
        cover={
          <div className="overflow-hidden rounded-t-2xl h-56 max-h-56">
            <Image
              alt={title}
              src={image}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:rounded-2xl"
            />
          </div>
        }>
        <div className="p-2 flex flex-col h-full">
          <div className="mb-4 flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 truncate transition-colors group-hover:text-purple-600 h-8 overflow-hidden">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-white line-clamp-3 transition-colors group-hover:text-gray-800 group-hover:dark:text-white h-20 overflow-hidden">
              {description}
            </p>
          </div>
          <div className="mb-6 flex-grow-0">
            <h4 className="text-xl dark:text-white font-semibold mb-3 flex items-center">
              <DatabaseOutlined className="mr-2 text-purple-600 transition-transform group-hover:rotate-12" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 h-auto">
              {techStack.map((tech, i) => (
                <Tag
                  key={i}
                  color="purple"
                  className="mb-1 transition-all group-hover:scale-105">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 flex-grow-0 h-8">
            <div className="flex space-x-3 items-center">
              {credentials && (
                <button
                  onClick={onCredentialsClick}
                  className="text-purple-500 hover:text-purple-700 transition-colors transform hover:scale-125">
                  <UserOutlined className="text-xl" />
                </button>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors transform hover:scale-125">
                  <LinkOutlined className="text-xl" />
                </a>
              )}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors transform hover:scale-125 dark:text-white">
                <GithubOutlined className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
