import AboutUs from "../component/AboutUs";
import Maps from "../component/Maps";
import Masthead from "../component/Masthead";
import OurTeam from "../component/OurTeam";
import Services from "../component/Services";
import Testimoni from "../component/Testimoni";
import VisiMisi from "../component/VisiMisi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
    AOS.init();
    return (
        <>
            <Masthead />
            <div class="container mx-auto px-24">
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                    <AboutUs />
                </div>
                <VisiMisi />

                <Services />
            </div>
            <Testimoni />
            <OurTeam />
            <Maps />
        </>
    )
}
export default Homepage;