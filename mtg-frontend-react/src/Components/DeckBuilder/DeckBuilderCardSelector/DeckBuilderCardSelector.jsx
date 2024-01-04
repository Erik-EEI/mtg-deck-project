import './DeckBuilderCardSelector.css';
import {useEffect, useState} from "react";
import {sadWizardLogo} from "../../../Assets/index.js";
import {DiscoverCardComponent, SearchLoadingAnimation} from "../../Discover/index.js";

const DeckBuilderCardSelector = ({ cardArray, isLoading }) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ cardsToDisplay, setCardsToDisplay ] = useState(null);

    useEffect(() => {
        if(cardArray) {
            setCardsToDisplay( generateCardsForPage() );
        }
    }, [currentPage, cardArray, isLoading]);

    const generateCardsForPage = ( ) => {
        const cards = [];

        //TODO Raise card/page to constant
        for(let i = 0; i < 6; i++ ){
            const cardIndex = ((currentPage - 1) * 6) + i;
            if(!cardArray[cardIndex]) break;

            cards.push(<p>{cardArray [ cardIndex ].name}</p>)
        }
        return cards;
    }

    return (
        <div className={'deck-builder-card-selector-container'}>
            <button>BACK</button>
            <section>
            {isLoading ? <SearchLoadingAnimation /> : cardsToDisplay }
            </section>
            <button>FORWARD</button>
        </div>
    );
};

export default DeckBuilderCardSelector;