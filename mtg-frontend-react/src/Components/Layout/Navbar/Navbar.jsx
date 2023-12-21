import './Navbar.css';
import {logoWhite} from "../../../Assets/index.js";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }

  return (
    <nav>
      <img id='navbar-logo' src={logoWhite} onClick={ handleOnClick } alt='Back to main screen'/>
        <div id='navbar-button-container'>
            <button>SAMPLE</button>
            <button>SAMPLE</button>
            <button>SAMPLE</button>
        </div>
    </nav>
  );
};

export default Navbar;
