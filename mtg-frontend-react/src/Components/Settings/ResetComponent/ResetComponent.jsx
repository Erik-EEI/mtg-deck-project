import './ResetComponent.css';
import {deckHandler, userNameHandler} from "../../../Utils/index.js";
import {useNavigate} from "react-router-dom";

const ResetComponent = () => {
    const navigate = useNavigate();
    const handleResetClick = () => {
        const shouldDelete = window.confirm(`Are you sure you want to reset the page?`);

        if(shouldDelete){
            userNameHandler.setDefaultUsername();
            deckHandler.deleteAllDecks();
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
