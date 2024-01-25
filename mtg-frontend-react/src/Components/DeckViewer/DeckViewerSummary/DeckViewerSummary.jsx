import './DeckViewerSummary.css';
import {BannerElement} from "../index.js";

const DeckViewerSummary = ({ deckName, deck }) => {
    return (
        <div className={'deck-viewer-summary-component'}>
            <BannerElement text={deckName} />
        </div>
    );
};

export default DeckViewerSummary;