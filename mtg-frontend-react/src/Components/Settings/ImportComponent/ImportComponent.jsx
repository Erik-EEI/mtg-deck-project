
import { useState } from 'react';
import './ImportComponent.css';
import { DefaultButton } from '../../Global/index.js';
import { deckHandler, themeHandler, userNameHandler } from '../../../Utils/index.js';
import {checkIcon, importWizardLogo} from "../../../Assets/index.js";

const ImportComponent = () => {
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleImport = () => {
        if (!file) {
            // Handle the case when no file is selected
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const importedData = JSON.parse(event.target.result);

            const [importedUserName, importedTheme, importedDecks] = importedData;
            userNameHandler.saveUsername(importedUserName);
            themeHandler.changeTheme(importedTheme);
            deckHandler.setAllDecks(importedDecks);

            if( importedData && importedTheme && importedDecks ) setSuccess(true);
        };

        reader.readAsText(file);
    };

    if(success) return (
        <div className={'import-success-container'}>
            <img src={checkIcon} alt={'successful import icon'} />
            <h1>Successful data import</h1>
        </div>
    );

    return (
        <div className={'import-component-container'}>
            <p>Import your settings, decks, and preferences into DeckWizard.</p>
            <img src={importWizardLogo} alt={'Import wizard logo'}/>
            <input type="file" accept=".json" onChange={handleFileChange} />
            <DefaultButton text={'IMPORT'} onClick={handleImport} />
        </div>
    );
};

export default ImportComponent;
