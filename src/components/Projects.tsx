import { Props } from "./FullPage";

const Projects = ({ id }: Props) => {
  return (
    <div id={id} className="grid grid-cols-2 gap-2 mx-10 my-10">
      <img
        src="../../public/images/task-management-tips.webp"
        alt="TaskMgmnt"
        className="w-[500px]"
      />
      <div className="my-auto">
        <h4 className="font-bold text-2xl">
          <a href="https://mtm-task-management.vercel.app/login" target="blank">
            Task Management System
          </a>
        </h4>
        <p>
          A fullstack website for team project coordination. Admins create users
          who manage projects and tasks. Features include real-time alerts,
          search, filtering, and reporting. Streamlines employee, task, and
          project creation with reporting capabilities.
        </p>
        <div>
          <h5>Tech Stacks</h5>
          <span>React</span>
          <span>Redux</span>
          <span>Ant Design</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Socket.io</span>
          <span>MySQL</span>
        </div>
        <div>
          <h5>Demo Credentials</h5>
          <span>Email</span>
          <span>Password</span>
        </div>
        <div>
          <span>Source Code</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
