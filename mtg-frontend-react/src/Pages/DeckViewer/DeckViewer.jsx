import './DeckViewer.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { deckHandler } from "../../Utils/index.js";
import {CardLoadingAnimation} from "../../Components/Discover/index.js";
import {
    DeckDataComponent,
    DeckViewerControls,
    DeckViewerImageContainer,
    DeckViewerSummary
} from "../../Components/DeckViewer/index.js";
import {EmptyAreaIcon} from "../../Components/Global/index.js";

const DeckViewer = () => {
    const { name } = useParams();
    const [currentDeck, setCurrentDeck] = useState(null);

    useEffect(() => {
        const deck =  deckHandler.getDeck( name );

        setCurrentDeck( deck );
    }, [name]);

    if( !currentDeck ) return <div className={'deck-viewer-loading-container'}><CardLoadingAnimation /></div> ;
    if( Object.values( currentDeck ).length < 1) return <EmptyAreaIcon message={'This deck is empty!'}/>
    return (
        <div className={'deck-viewer-container'}>
            <section className={'deck-viewer-controls'}>
                <DeckViewerControls deckName={name} deck={currentDeck}/>
                <DeckViewerImageContainer deck={currentDeck}/>
            </section>
            <section className={'deck-viewer-stats-container'}>
                <DeckDataComponent deckName={name} deck={currentDeck}/>
            </section>
            <section className={'deck-viewer-summary-container'}>
                <DeckViewerSummary deckName={name} deck={currentDeck}/>
            </section>
        </div>
    );
};

export default DeckViewer;
