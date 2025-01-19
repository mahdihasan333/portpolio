import { Helmet } from "react-helmet-async";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Header />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;