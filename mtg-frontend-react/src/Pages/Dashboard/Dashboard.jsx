import './Dashboard.css';
import {DashboardCard} from "../../Components/Dashboard/index.js";
import {logoWhite} from "../../Assets/index.js";
import {backgroundPicture} from "../../Assets/index.js";

const Dashboard = () => {
    return (
        <div id='dashboard-container'>
            <h1>Welcome to Deck Wizard</h1>
            <h1>Your Ultimate Magic: The Gathering Card Haven!</h1>
            <p>Dive into the enchanting world of Magic: The Gathering with our comprehensive card database! </p>
            <p>Whether you're a seasoned Planeswalker or just starting your journey, our platform is your go-to destination for exploring and creating decks that will leave your opponents spellbound.</p>
            <div id='dashboard-cards-container'>
                <DashboardCard icon={logoWhite} picture={backgroundPicture} mainText='TEST' subText='More text than the previous one for testing purposes' destinationUrl='/'/>
                <DashboardCard icon={logoWhite} picture={backgroundPicture} mainText='TEST 2' subText='More text than the previous one for testing purposes' destinationUrl='/'/>
                <DashboardCard icon={logoWhite} picture={backgroundPicture} mainText='TEST 3' subText='More text than the previous one for testing purposes' destinationUrl='/'/>
                <DashboardCard icon={logoWhite} picture={backgroundPicture} mainText='TEST 4' subText='More text than the previous one for testing purposes' destinationUrl='/'/>
            </div>
        </div>
    );
};

export default Dashboard;
