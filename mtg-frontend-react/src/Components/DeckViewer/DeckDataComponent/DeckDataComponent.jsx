import './DeckDataComponent.css';
import {ColorIdentityGraph, ColorOrientationDisplay, ManaCurveChart, StatsTable} from "../index.js";

const DeckDataComponent = ({deck} ) => {

    return (
        <div className={'deck-data-container'}>
            <section className={'deck-data-charts-container'}>
                <ManaCurveChart deck={deck} />
                <ColorIdentityGraph deck={deck} />
            </section>
            <div className={'deck-data-line'}></div>
            <ColorOrientationDisplay deck={deck}/>
            <StatsTable deck={deck}/>

        </div>
    );
};

export default DeckDataComponent;
