import './DeckDataComponent.css';
import {ManaCurveChart} from "../index.js";

const DeckDataComponent = ({deck, deckName} ) => {
    return (
        <div className={'deck-data-container'}>
            <section className={'deck-data-charts-container'}>
                <ManaCurveChart deck={deck} />
            </section>

        </div>
    );
};

export default DeckDataComponent;