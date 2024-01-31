import './DeckViewerControls.css'
import {DefaultButton} from "../../Discover/index.js";
import {useNavigate} from "react-router-dom";
import {deckHandler} from "../../../Utils/index.js";

const DeckViewerControls = ({ deckName, deck }) => {
    const navigate = useNavigate();
    const handleDownloadClick = () => {
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

    const handleEditClick = () => {
        navigate(`/build/${deckName}`);
    }

    const handleDeleteClick = () => {
        const shouldDelete = window.confirm(`Are you sure you want to delete the deck "${deckName}"?`);

        if (shouldDelete) {
            deckHandler.deleteDeck(deckName);
            navigate('/my-decks');
        }
    }


    return (
        <div className={'deck-viewer-controls-container'}>
            <DefaultButton text={'EDIT DECK'} onClick={handleEditClick}/>
            <DefaultButton text={'DELETE DECK'}  onClick={handleDeleteClick}/>
            <DefaultButton text={'DOWNLOAD'} onClick={handleDownloadClick} />
        </div>
    );
};

export default DeckViewerControls;
