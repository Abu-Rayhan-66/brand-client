import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ComingEvent from "../ComingEvent/ComingEvent";
import Footer from "../Footer/Footer";


import TopCategory from "../TopCategory/TopCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <ComingEvent></ComingEvent>
            <TopCategory></TopCategory>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;