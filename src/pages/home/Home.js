import Featured from "../../components/Featured/Featured";
import FeaturedPropertyList from "../../components/FeaturedPropertyList/FeaturedPropertyList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />

                <PropertyList />

                <FeaturedPropertyList />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Home;