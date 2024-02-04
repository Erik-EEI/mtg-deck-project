import './DeckBuilderCardSelector.css';
import {useEffect, useState} from "react";
import {arrowLeft, arrowRight} from "../../../Assets/index.js";
import {DiscoverCardComponent, SearchLoadingAnimation} from "../../Discover/index.js";

const DeckBuilderCardSelector = ({ cardArray, isLoading, onCardClick, currentPage, setCurrentPage }) => {
    const [ cardsToDisplay, setCardsToDisplay ] = useState(null);

    useEffect(() => {
        if(cardArray) {
            setCardsToDisplay( generateCardsForPage() );
        }
    }, [currentPage, cardArray, isLoading]);

    const generateCardsForPage = ( ) => {
        const cards = [];

        //TODO Raise card/page to constant
        for(let i = 0; i < 3; i++ ){
            const cardIndex = ((currentPage - 1) * 3) + i;
            if(!cardArray[cardIndex]) break;

            cards.push(<DiscoverCardComponent key={cardIndex} cardData={cardArray[cardIndex]} onClick={onCardClick}/> )
        }
        return cards;
    }

    const handleLeftArrowButtonKey = () => {
        setCurrentPage(currentPage - 1);
    }

    const handleRightArrowButtonKey = () => {
        setCurrentPage(currentPage + 1);
    }
// TODO Add conditional rendering for arrows
    return (
        <div className={'deck-builder-card-selector-container'}>
            <button
            type={'button'}
            onClick={handleLeftArrowButtonKey}
            disabled={(currentPage - 1) < 1}
            className={(currentPage - 1) < 1 ? 'arrow-disabled' : ''}
            ><img src={arrowLeft}/></button>
            <section>
                {isLoading ? <SearchLoadingAnimation /> : cardsToDisplay }
            </section>
            <button
            type={'button'}
            onClick={handleRightArrowButtonKey}
            disabled={(currentPage + 1) > (Math.ceil(cardArray?.length / 3))}
            className={(currentPage + 1) > (Math.ceil(cardArray?.length / 3)) ? 'arrow-disabled' : ''}
            ><img src={arrowRight}/></button>
        </div>
    );
};

export default DeckBuilderCardSelector;
