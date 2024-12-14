import { useState } from "react";
import { Modal, Timeline, message } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import ProjectCard from "../components/ProjectCard";
import { projectdemos } from "../utils/project";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github: string;
  techStack: string[];
  credentials?: {
    email: string;
    password: string;
  };
  duration?: string;
  category?: string;
}

const Projects = ({ id }: { id?: string }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCredentialsModalVisible, setIsCredentialsModalVisible] =
    useState(false);

  const handleCredentialsClick = (project: Project) => {
    setSelectedProject(project);
    setIsCredentialsModalVisible(true);
  };

  return (
    <>
      <div id={id} className="bg-[#f0f2f5] min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-4">
              Project <span className="text-blue-600">Showcase</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A collection of innovative projects demonstrating my skills in web
              development, from full-stack applications to interactive web
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectdemos.map((project, index) => (
              <div key={index} className="group">
                <ProjectCard
                  title={project.title}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                  description={project.description}
                  techStack={project.techStack}
                  credentials={project.credentials}
                  onCredentialsClick={() => handleCredentialsClick(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        title={`${selectedProject?.title} - Credentials`}
        open={isCredentialsModalVisible}
        onCancel={() => setIsCredentialsModalVisible(false)}
        footer={null}>
        <div>
          <div className="p-6">
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
              <Timeline>
                <Timeline.Item>
                  <strong>Email:</strong> {selectedProject?.credentials?.email}
                </Timeline.Item>
                <Timeline.Item>
                  <strong>Password:</strong>{" "}
                  {selectedProject?.credentials?.password}
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Projects;
