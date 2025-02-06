import { Helmet } from "react-helmet-async";
import Contact from "../../Components/Contact/Contact";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Project from "../../Components/Project/Project";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            
            <AboutMe/>

            <Skills/>

            <Project/>
            
            <Contact />
        </div>
    );
};

export default Home;