import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Educations from "./Educations";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import { FloatButton } from "antd";
import CursorFollower from "./CursorFollower";
import "./styles.css";

export interface Props {
  id: string;
}

const FullPage = () => {
  return (
    <div className="cursor-none">
      <CursorFollower />
      <Navbar />
      <Header id="home" />
      <AboutMe id="about" />
      {/* <Educations /> */}
      <Skills id="skills" />
      {/* <Projects /> */}
      <ContactMe id="contact" />
      <Footer />
      <FloatButton.BackTop tooltip={<div>Back to top</div>} />
    </div>
  );
};

export default FullPage;
