import './DeckDataComponent.css';
import {ColorIdentityGraph, ManaCurveChart} from "../index.js";

const DeckDataComponent = ({deck, deckName} ) => {
    return (
        <div className={'deck-data-container'}>
            <section className={'deck-data-charts-container'}>
                <ManaCurveChart deck={deck} />
                <ColorIdentityGraph deck={deck} />
            </section>
            <div className={'deck-data-line'}></div>

        </div>
    );
};

export default DeckDataComponent;