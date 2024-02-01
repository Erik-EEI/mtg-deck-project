import "./HomeButton.css"
import {useNavigate} from "react-router-dom";
import {userNameHandler} from "../../../Utils/index.js";
const HomeButton = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        userNameHandler.setDefaultUsername();
        navigate("/main");
    }

    return (
        <button id="home-button" className='btn' onClick={handleOnClick}>
            <h1> ENTER </h1>
        </button>
    );
};

export default HomeButton;
