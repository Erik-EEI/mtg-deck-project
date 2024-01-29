import './DeckViewerControls.css'
import {DefaultButton} from "../../Discover/index.js";

const DeckViewerControls = ({ deckName, deck }) => {
    const downloadDeck = () => {
        const deckContent = Object.entries(deck)
            .map(([cardName, { amount }]) => `${cardName}: ${amount}`)
            .join('\n');

        const blob = new Blob([deckContent], { type: 'text/plain' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${deckName}.txt`;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };


    return (
        <div className={'deck-viewer-controls-container'}>
            <DefaultButton text={'EDIT DECK'} />
            <DefaultButton text={'DELETE DECK'} />
            <DefaultButton text={'DOWNLOAD'} onClick={downloadDeck} />
        </div>
    );
};

export default DeckViewerControls;
