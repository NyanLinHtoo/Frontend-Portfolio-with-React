import { MailOutlined } from "@ant-design/icons";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="bg-purple-200 dark:bg-gray-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 sm:mb-0">
          If at first you don't succeed, call it version 1.0. © 2024 - Nyan Lin
          Htoo
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl icon-wobble">
            <i className="devicon-facebook-plain colored"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl icon-wobble">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl icon-wobble">
            <i className="devicon-github-original colored"></i>
          </a>
          <a
            href="mailto:nyanlinhtoo.ygn@gmail.com"
            className="text-2xl hover:text-red-600 transition-colors duration-300 icon-wobble">
            <MailOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
