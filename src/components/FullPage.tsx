import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Navbar from "./Navbar";
// import Projects from "./Projects";
import Skills from "./Skills";
import { FloatButton } from "antd";
import CursorFollower from "./CursorFollower";
import "./styles.css";
import { useState } from "react";

export interface Props {
  id: string;
}

const FullPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="cursor-none">
      <CursorFollower />
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === "home" && <Header id="home" />}
      {activeSection === "about" && <AboutMe id="about" />}
      {activeSection === "skills" && <Skills id="skills" />}
      {activeSection === "contact" && <ContactMe id="contact" />}
      <FloatButton.BackTop tooltip={<div>Back to top</div>} />
    </div>
  );
};

export default FullPage;
