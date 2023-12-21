import "./HomeButton.css"
import {useNavigate} from "react-router-dom";
const HomeButton = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/main");
    }

    return (
        <button id="home-button" className='btn' onClick={handleOnClick}>
            <h1> ENTER </h1>
        </button>
    );
};

export default HomeButton;
