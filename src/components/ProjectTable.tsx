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
        <a>Invite {record.project}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    project: "John Brown",
    development: "32",
    buildWith: ["New York No. 1 Lake Park"],
    link: "nice",
  },
  {
    key: "2",
    project: "Jim Green",
    development: "42",
    buildWith: ["New York No. 1 Lake Park"],
    link: "nice",
  },
  {
    key: "3",
    project: "Joe Black",
    development: "32",
    buildWith: ["New York No. 1 Lake Park"],
    link: "nice",
  },
];

const ProjectTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-3xl font-semibold mb-6">All Projects</h3>
      <Table
        columns={columns}
        dataSource={data}
        rowClassName="hover:bg-gray-50 transition-colors duration-150"
      />
    </div>
  );
};

export default ProjectTable;
