import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Navbar from "./Navbar";
import Skills from "./Skills";
import { FloatButton } from "antd";
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

  return (
    <div className="cursor-none">
      <CursorFollower />
      <Navbar setActiveSection={setActiveSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}>
          {activeSection === "home" && <Header id="home" />}
          {activeSection === "about" && <AboutMe id="about" />}
          {activeSection === "skills" && <Skills id="skills" />}
          {activeSection === "contact" && <ContactMe id="contact" />}
        </motion.div>
      </AnimatePresence>
      <FloatButton.BackTop tooltip={<div>Back to top</div>} />
    </div>
  );
};

export default FullPage;
