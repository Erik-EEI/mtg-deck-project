import './ResetComponent.css';
import {deckHandler, themeHandler, userNameHandler} from "../../../Utils/index.js";
import {useNavigate} from "react-router-dom";
import {RED_THEME} from "../../../Constants/themeProperties.js";

const ResetComponent = () => {
    const navigate = useNavigate();
    const handleResetClick = () => {
        const shouldDelete = window.confirm(`Are you sure you want to reset the page?`);

        if(shouldDelete){
            userNameHandler.setDefaultUsername();
            deckHandler.deleteAllDecks();
            themeHandler.changeTheme( RED_THEME );
            navigate('/');
        }
    }

    return (
        <div className={'reset-button-container'}>
            <button className={'reset-button'} onClick={handleResetClick}>Reset Page</button>
        </div>
    );
};

export default ResetComponent;
