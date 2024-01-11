import './Navbar.css';
import {logoWhite} from "../../../Assets/index.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

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
            <button
                onClick={() => handleNavButtonClick('main')}
                className={activePage === 'main' ? 'active-nav-button' : ''}
            >Dashboard </button>
            <button
                onClick={() => handleNavButtonClick('discover')}
                className={activePage === 'discover' ? 'active-nav-button' : ''}
            >Discover </button>
            <button
                onClick={() => handleNavButtonClick('build')}
                className={activePage === 'build' ? 'active-nav-button' : ''}
            >Build </button>
            <button
                onClick={() => handleNavButtonClick('main')}
                className={activePage === '' ? 'active-nav-button' : ''}
            >Decks </button>
        </div>
    </nav>
  );
};

export default Navbar;
