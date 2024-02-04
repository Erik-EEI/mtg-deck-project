import './Dashboard.css';
import {DashboardCard} from "../../Components/Dashboard/index.js";
import {
    wizardHatIcon,
    exploreIcon,
    gearIcon,
    viewIcon,
    dashboardDiscoverBackground,
    dashboardBuildBackground,
    dashboardViewBackground,
    dashboardSettingsBackground
} from "../../Assets/index.js";
import {useEffect, useState} from "react";
import {userNameHandler} from "../../Utils/index.js";

//TODO Lift constant variables
const Dashboard = () => {
    const [ username, setUsername ] = useState( 'Guest' );

    useEffect(() => {
        const username = userNameHandler.getUsername();

        if( username !== 'Guest') setUsername( username );
    }, []);

    return (
        <div id='dashboard-container'>
            <h1> Dear {username},</h1>
            <h1>Welcome {username === 'Guest' ? '' : 'back '}to Deck Wizard!</h1>
            <h2>Your Ultimate Magic: The Gathering Card Haven!</h2>
            <p>Dive into the enchanting world of Magic: The Gathering with our comprehensive card database! </p>
            <p>Whether you're a seasoned Planeswalker or just starting your journey, our platform is your go-to destination for exploring and creating decks that will leave your opponents spellbound.</p>
            <div id='dashboard-cards-container'>
                <DashboardCard icon={exploreIcon} picture={dashboardDiscoverBackground} mainText='DISCOVER' subText='Discover the Magic Multiverse and delve into captivating card sets.' destinationUrl='/discover'/>
                <DashboardCard icon={wizardHatIcon} picture={dashboardBuildBackground} mainText='BUILD DECK' subText='Craft the perfect Magic deck that reflects your unique playstyle.' destinationUrl='/build/new'/>
                <DashboardCard icon={viewIcon} picture={dashboardViewBackground} mainText='VIEW DECKS' subText='Manage and showcase your winning strategies with ease.' destinationUrl='/my-decks'/>
                <DashboardCard icon={gearIcon} picture={dashboardSettingsBackground} mainText='SETTINGS' subText='Personalize your Magic experience and tailor the platform to your preferences.' destinationUrl='/settings'/>
            </div>
        </div>
    );
};

export default Dashboard;
