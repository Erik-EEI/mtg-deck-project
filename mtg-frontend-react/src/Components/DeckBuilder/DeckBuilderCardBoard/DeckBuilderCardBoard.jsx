import './DeckBuilderCardBoard.css';
import {DeckBuilderCardSlide} from "../index.js";
import {useEffect, useState} from "react";

const DeckBuilderCardBoard = ({ deck }) => {
    const [slidesToDisplay, setSidesToDisplay] = useState([]);

    useEffect(() => {
        setSidesToDisplay( renderCardSlides() );
    }, [deck]);

    const renderCardSlides = () => {
        const slidesArray = [];

        for(let card in deck.cards){
            slidesArray.push(<DeckBuilderCardSlide key={card} cardData={ deck.cards[card].data }/>);
        }


        return slidesArray;
    }

    return (
        <div className={'deck-builder-card-board'}>
            {slidesToDisplay}
        </div>
    );
};

export default DeckBuilderCardBoard;