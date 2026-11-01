import AboutHero from "../components/About/AboutHero";
import AboutExperience from "../components/About/AboutExperience";
import AboutProjects from "../components/About/AboutProjects";
import AboutToolkit from "../components/About/AboutToolkit";
import AboutEducation from "../components/About/AboutEducation";

const About = () => (
  <div className="pt-10 md:pt-18">
    <AboutHero />
    <AboutExperience />
    <AboutProjects />
    <AboutToolkit />
    <AboutEducation />
  </div>
);

export default About;
