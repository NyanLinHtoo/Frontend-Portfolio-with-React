import { Props } from "./FullPage";

const frontendData = [
  {
    name: "HTML 5",
    icon: <i className="devicon-html5-plain-wordmark colored"></i>,
  },
  {
    name: "Css 3",
    icon: <i className="devicon-css3-plain-wordmark colored"></i>,
  },
  {
    name: "Tailwind Css",
    icon: <i className="devicon-tailwindcss-original colored"></i>,
  },
  {
    name: "JavaScript",
    icon: <i className="devicon-javascript-plain colored"></i>,
  },
  {
    name: "TypeScript",
    icon: <i className="devicon-typescript-plain colored"></i>,
  },
  {
    name: "React",
    icon: <i className="devicon-react-original colored"></i>,
  },
  {
    name: "Redux",
    icon: <i className="devicon-redux-original colored"></i>,
  },
  {
    name: "Angular",
    icon: <i className="devicon-angularjs-plain colored"></i>,
  },
  {
    name: "Boostarp",
    icon: <i className="devicon-bootstrap-plain colored"></i>,
  },
  {
    name: "LWC(Salesforce)",
    icon: <i className="devicon-salesforce-plain colored"></i>,
  },
  {
    name: "visualforce(Salesforce)",
    icon: <i className="devicon-salesforce-plain colored"></i>,
  },
];

const backendData = [
  {
    name: "Node.js",
    icon: <i className="devicon-nodejs-plain-wordmark colored"></i>,
  },
  {
    name: "Express.js",
    icon: <i className="devicon-express-original-wordmark"></i>,
  },
  {
    name: "Apex(Salesforce)",
    icon: <i className="devicon-salesforce-plain colored"></i>,
  },
];

const databaseData = [
  {
    name: "MongoDB",
    icon: <i className="devicon-mongodb-plain colored"></i>,
  },
  {
    name: "Mysql",
    icon: <i className="devicon-mysql-original colored"></i>,
  },
];

const otherData = [
  {
    name: "Git",
    icon: <i className="devicon-git-plain colored"></i>,
  },
  {
    name: "GitLab",
    icon: <i className="devicon-gitlab-plain colored"></i>,
  },
  {
    name: "Postman",
    icon: <i className="devicon-postman-plain colored"></i>,
  },
  {
    name: "npm",
    icon: <i className="devicon-npm-original-wordmark colored"></i>,
  },
  {
    name: "Ant Design",
    icon: <i className="devicon-antdesign-plain colored"></i>,
  },
];

interface skillData {
  title: string;
  data: { name: string; icon: JSX.Element }[];
}

const SkillCategories = ({ title, data }: skillData) => {
  return (
    <div className="m-8">
      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {data.map((data) => {
          return (
            <div
              key={data.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-2">{data.icon}</div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {data.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          My Skills
        </h2>
        <SkillCategories title="Frontend Development" data={frontendData} />
        <SkillCategories title="Backend Development" data={backendData} />
        <SkillCategories title="Database" data={databaseData} />
        <SkillCategories title="Other Tools" data={otherData} />
      </div>
    </div>
  );
};

export default Skills;
