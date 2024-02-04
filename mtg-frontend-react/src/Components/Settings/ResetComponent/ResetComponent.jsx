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
            <p className={'reset-notice'} style={{}}>
                <strong>Notice:</strong> Clicking the "RESET" button will revert all changes to the default settings.
                Make sure to export your current state before resetting.
            </p>
        </div>
    );
};

export default ResetComponent;
