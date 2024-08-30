import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  project: string;
  development: string;
  buildWith: string[];
  link: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Projects",
    dataIndex: "project",
    key: "project",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Development",
    dataIndex: "development",
    key: "development",
  },
  {
    title: "Tags",
    key: "buildWith",
    dataIndex: "buildWith",
    render: (_, { buildWith }) => (
      <>
        {buildWith.map((tag) => {
          return (
            <Tag
              className="bg-purple-200 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]"
              key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Link",
    key: "link",
    render: (_, record) => (
      <Space size="middle">
        <a>{record.link}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    project: "Frontend Portfolio with React",
    development: "Frontend",
    buildWith: ["React", "TypeScript", "Tailwind Css", "Antd"],
    link: "Blah Blah Blah",
  },
  {
    key: "2",
    project: "React Calculator",
    development: "Frontend",
    buildWith: ["React", "TypeScript", "Tailwind Css"],
    link: "blah blah blah",
  },
  {
    key: "3",
    project: "UMS Project",
    development: "Full-Stack",
    buildWith: [
      "React",
      "TypeScript",
      "Tailwind Css",
      "Antd",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "blah blah blah",
  },
  {
    key: "4",
    project: "Library Management",
    development: "Full-Stack",
    buildWith: ["React", "Sonner", "MUI", "Node.js", "Express.js", "MongoDB"],
    link: "blah blah blah",
  },
  {
    key: "5",
    project: "Stopwatch",
    development: "Full-Stack",
    buildWith: ["React", "TypeScript", "Tailwind Css"],
    link: "blah blah blah",
  },
  {
    key: "6",
    project: "Exam System",
    development: "Full-Stack, Collective project",
    buildWith: ["Angular", "TypeScript", "Sweet Alert 2", "Lodash", "Strapi"],
    link: "blah blah blah",
  },
  {
    key: "7",
    project: "Game Hub",
    development: "Frontend",
    buildWith: ["React", "TypeScript", "Tailwind Css", "Sonner"],
    link: "blah blah blah",
  },
  {
    key: "8",
    project: "Tic Tac Toe",
    development: "Full-Stack",
    buildWith: [
      "React",
      "TypeScript",
      "Tailwind Css",
      "Sonner",
      "Socket.io",
      "Node.js",
      "Express.js",
    ],
    link: "blah blah blah",
  },
];

const ProjectTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2">All Projects</h3>
        <p className="text-lg">
          I will keep updating these projects over time to show my progress.
        </p>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowClassName="hover:bg-gray-50 transition-colors duration-150"
      />
    </div>
  );
};

export default ProjectTable;
