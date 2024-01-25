import './DeckViewerSummary.css';
import {BannerElement, SummaryCardSlide} from "../index.js";

const DeckViewerSummary = ({ deckName, deck }) => {
    console.log(deck)
    return (
        <div className={'deck-viewer-summary-component'}>
            <BannerElement text={deckName} />
            <div className={'deck-viewer-card-slide-container'}>
                {Object.entries(deck).map((card) => <SummaryCardSlide key={card[0]} card={card[1].data} amount={card[1].amount} />)}

            </div>
        </div>
    );
};

export default DeckViewerSummary;