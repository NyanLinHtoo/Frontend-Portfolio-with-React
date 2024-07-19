import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Educations from "./Educations";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const FullPage = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Educations />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default FullPage;
