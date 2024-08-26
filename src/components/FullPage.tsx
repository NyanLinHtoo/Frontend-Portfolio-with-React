import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Header from "../pages/Header";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
// import { FloatButton } from "antd";
import CursorFollower from "./CursorFollower";
import "./styles.css";

export interface Props {
  id: string;
}

const FullPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const handleExploreClick = () => {
    setActiveSection("projects");
  };

  return (
    <div>
      {/* <CursorFollower /> */}
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}>
          {activeSection === "home" && (
            <Header id="home" onExploreClick={handleExploreClick} />
          )}
          {activeSection === "about" && <AboutMe id="about" />}
          {activeSection === "skills" && <Skills id="skills" />}
          {activeSection === "projects" && <Projects id="projects" />}
          {activeSection === "contact" && <ContactMe id="contact" />}
        </motion.div>
      </AnimatePresence>
      {/* <FloatButton.BackTop tooltip={<div>Back to top</div>} /> */}
    </div>
  );
};

export default FullPage;
