import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutMe></AboutMe>
         <Skills></Skills>
         <Projects></Projects>
        </div>
    );
};

export default Home;