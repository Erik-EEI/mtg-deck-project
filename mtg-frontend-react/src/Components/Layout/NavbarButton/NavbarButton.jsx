import './NavbarButton.css';
import {useEffect, useState} from "react";

const NavbarButton = ({ label, onClick, urlPath }) => {
    const [ isActive, setIsActive ] = useState( false );
    const url = window.location.href;
    useEffect(() => {
        const regex = new RegExp(urlPath,'gi');

        if(regex.test(url)){
            setIsActive( true );
        } else {
            setIsActive( false );
        }
    }, [url]);
    return (
        <button
        onClick={onClick}
        className={isActive ? 'navbar-button navbar-button-active' : 'navbar-button'}
        >
            {label}
        </button>
    );
};

export default NavbarButton;