import './DeckBuilderCardBoard.css';
import {DeckBuilderCardSlide} from "../index.js";
import {useEffect, useState} from "react";
import {EmptyAreaIcon} from "../../Global/index.js";

const DeckBuilderCardBoard = ({ deck, handlePlusAmount, handleMinusAmount, handleRemove }) => {
    const [slidesToDisplay, setSidesToDisplay] = useState([]);

    useEffect(() => {
        setSidesToDisplay( renderCardSlides() );
    }, [deck]);

    const renderCardSlides = () => {
        const slidesArray = [];
        for(let card in deck.cards){
            slidesArray.push(
                <DeckBuilderCardSlide
                    key={card}
                    card={ deck.cards[card] }
                    handleRemove={handleRemove}
                    handleMinusAmount={handleMinusAmount}
                    handlePlusAmount={handlePlusAmount}
                />);
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
