import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Props } from "./FullPage";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ id }: Props) => {
  return (
    <div id={id}>
      <div className="grid grid-cols-3 gap-2 mx-10 my-10 leading-7">
        <img
          src="/images/task-management-tips.webp"
          alt="TaskMgmnt"
          className="w-[500px]"
        />
        <div className="my-auto col-span-2">
          <h4 className="font-bold text-2xl pb-3 uppercase space-x-2">
            <a
              href="https://mtm-task-management.vercel.app/login"
              target="blank">
              Task Management System
            </a>
            <FontAwesomeIcon icon={faLink} shake />
          </h4>
          <p>
            A fullstack website for team project coordination. Admins create
            users who manage projects and tasks. Features include real-time
            alerts, search, filtering, and reporting. Streamlines employee,
            task, and project creation with reporting capabilities.
          </p>
          <div className="py-4">
            <h5 className="font-semibold text-xl pb-3 uppercase">
              Tech Stacks
            </h5>
            <div>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                React
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Redux
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Ant Design
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Node.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Express.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Socket.io
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                MySQL
              </span>
            </div>
          </div>
          <div className="pb-4">
            <h5 className="font-semibold text-xl pb-3 uppercase">
              Demo Credentials
            </h5>
            <p>
              Email : <i>nyanlinhtoo181199@gmail.com</i>
            </p>
            <p>
              Password : <i>password1234</i>
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/github-mark.svg" alt="" className="size-9" />
            <a
              href="https://github.com/NyanLinHtoo/Task-management-React-Nodejs-"
              target="_blank">
              Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mx-10 my-10 leading-7">
        <div className="my-auto col-span-2">
          <h4 className="font-bold text-2xl pb-3 uppercase space-x-2">
            <a
              href="https://mtm-task-management.vercel.app/login"
              target="blank">
              QuickChat
            </a>
            <FontAwesomeIcon icon={faLink} shake />
          </h4>
          <p>
            QuickChat is a real-time messaging application that allows users to
            engage in instant conversations. Key features include real-time chat
            capabilities and instant notifications whenever a new message is
            received
          </p>
          <div className="py-4">
            <h5 className="font-semibold text-xl pb-3 uppercase">
              Tech Stacks
            </h5>
            <div>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                React
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Material UI (MUI)
              </span>
              <span className=" bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Emoji-mart
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Sonner
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Node.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Express.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Socket.io
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                MongoDB
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Axios
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/github-mark.svg" alt="" className="size-9" />
            <a
              href="https://github.com/NyanLinHtoo/Real-Time-Chat-App"
              target="_blank">
              Source Code
            </a>
          </div>
        </div>
        <img
          src="/images/task-management-tips.webp"
          alt="TaskMgmnt"
          className="w-[500px] justify-self-end"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mx-10 my-10 leading-7">
        <img
          src="/images/task-management-tips.webp"
          alt="TaskMgmnt"
          className="w-[500px]"
        />
        <div className="my-auto col-span-2">
          <h4 className="font-bold text-2xl pb-3 uppercase space-x-2">
            <a
              href="https://mtm-task-management.vercel.app/login"
              target="blank">
              Barber Shop
            </a>
            <FontAwesomeIcon icon={faLink} shake />
          </h4>
          <p>
            Barber Shop is a website where you can easily book a haircut by
            email. You can also check out our services and see the different
            hair stylists available at our shop.
          </p>
          <div className="py-4">
            <h5 className="font-semibold text-xl pb-3 uppercase">
              Tech Stacks
            </h5>
            <div>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                React
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Tailwind Css
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                TypeScript
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Node.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Express.js
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                Nodemailer
              </span>
              <span className="bg-purple-300 px-2 pb-1 pt-0.5 rounded-lg me-2 font-thin text-[15px]">
                FontAwesome
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/github-mark.svg" alt="" className="size-9" />
            <a href="https://github.com/NyanLinHtoo/BarberShop" target="_blank">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
