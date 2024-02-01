import './UsernameChangerComponent.css';
import {useState} from "react";
import {userNameHandler} from "../../../Utils/index.js";
import {SettingsButton} from "../index.js";

const UsernameChangerComponent = () => {
    const [ usernameInput, setUsernameInput ] = useState('');
    const [ currentUsername, setCurrentUsername ] = useState( userNameHandler.getUsername() );

    const handleSaveClick = () => {
        if(usernameInput.trim() !== ''){
        userNameHandler.saveUsername( usernameInput );
        setCurrentUsername( usernameInput );
        setUsernameInput('');
        } else {
            setUsernameInput('');
        }
    }


    return (
        <div className={'username-component-container'}>
            <section>
            <h3>Current username:</h3>
            <h1>{currentUsername}</h1>
            </section>
            <section>
            <input
            type='text'
            value={usernameInput}
            className={'username-input-field'}
            placeholder={'Enter new username'}
            onInput={(e) => setUsernameInput(e.target.value)}
            />
            <SettingsButton label={'Save'} onclick={handleSaveClick}/>
            </section>


        </div>
    );
};

export default UsernameChangerComponent;
