import './DeckBuilderCardSlide.css';
import {arrowLeft, arrowRight} from "../../../Assets/index.js";
const DeckBuilderCardSlide = ({ card, handlePlusAmount, handleMinusAmount, handleRemove }) => {
    return (
        <div className={'deck-builder-card-slide'}>
            <div className={'deck-builder-card-slide-info'}>
                <p>{card.data.colors}</p>
                <p>{card.data.name}</p>
            </div>
            <div className={'deck-builder-card-slide-amount'}>
                <button
                type={'button'}
                onClick={() => handleMinusAmount(card.data.name)}
                >-</button>
                <p>{card.amount}</p>
                <button
                type={'button'}
                onClick={() => handlePlusAmount(card.data.name)}
                >+</button>
                <button
                type={'button'}
                onClick={() => handleRemove(card.data.name)}
                >X</button>

            </div>
        </div>
    );
};

export default DeckBuilderCardSlide;