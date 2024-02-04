import './ExportComponent.css';
import {DefaultButton} from "../../Global/index.js";
import {deckHandler, themeHandler, userNameHandler} from "../../../Utils/index.js";
import {useState} from "react";

const ExportComponent = () => {
    const [fileName, setFileName] = useState('DeckWizardExport');
    const handleExport = () => {
        const userName = userNameHandler.getUsername();
        const theme = themeHandler.getTheme();
        const allDecks = deckHandler.getAllDecks();
        const pageSettings =[ userName, theme, allDecks ];

        const blob = new Blob([JSON.stringify(pageSettings)], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.json`;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    }

    return (
        <div className={'export-component-container'}>
            <p> Export all of your settings, decks and preferences from your DeckWizard site.<br/> Share it with your friends or save it for later.</p>
            <input
            type={'text'}
            value={fileName}
            onInput={(e) => setFileName(e.target.value)}
            />
            <DefaultButton text={'EXPORT'} onClick={handleExport} />
        </div>
    );
};

export default ExportComponent;
