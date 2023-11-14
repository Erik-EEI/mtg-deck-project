import "./HomeButton.css"
import {useNavigate} from "react-router-dom";
const HomeButton = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/dashboard");
    }

    return (
        <button id="home-button" onClick={handleOnClick}>
            START
        </button>
    );
};

export default HomeButton;