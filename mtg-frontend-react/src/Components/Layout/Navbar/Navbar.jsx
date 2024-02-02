import './Navbar.css';
import {gearIcon, logoWhite} from "../../../Assets/index.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {NavbarButton} from "../index.js";

const Navbar = () => {
    const navigate = useNavigate();
    const [ activePage, setActivePage] = useState('main');

    useEffect(() => {

    }, [activePage]);

    const handleLogoClick = () => {
        setActivePage('main');
        navigate('/');
    }

    const handleNavButtonClick = ( link ) => {
        setActivePage( link );
        if( link === 'build') link = link + '/new';
        navigate(`/${link}`);
    }

  return (
    <nav>
      <img id='navbar-logo' src={logoWhite} onClick={ handleLogoClick } alt='Back to main screen'/>
        <div id='navbar-button-container'>
            <NavbarButton onClick={() => handleNavButtonClick('main')} label={'Dashboard'} urlPath={'main'} />
            <NavbarButton onClick={() => handleNavButtonClick('discover')} label={'Discover'} urlPath={'discover'} />
            <NavbarButton onClick={() => handleNavButtonClick('build')} label={'Build'} urlPath={'build'} />
            <NavbarButton onClick={() => handleNavButtonClick('my-decks')} label={'Decks'} urlPath={'my-decks'} />
            <NavbarButton onClick={() => handleNavButtonClick('settings')} label={ <img src={gearIcon} /> } urlPath={'settings'} isSmall={true}/>
        </div>
    </nav>
  );
};

export default Navbar;
