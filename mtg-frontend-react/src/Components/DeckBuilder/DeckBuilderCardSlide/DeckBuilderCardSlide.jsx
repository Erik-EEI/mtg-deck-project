import './DeckBuilderCardSlide.css';
import {useGetSymbology} from "../../../Hooks/index.js";
import {useEffect, useState} from "react";

const DeckBuilderCardSlide = ({ card, handlePlusAmount, handleMinusAmount, handleRemove }) => {
    const [ symbolUriArray, setSymbolUriArray ] = useState([]);
    const { symbologyData } = useGetSymbology();
    const xSymbolSrc = "https://svgs.scryfall.io/card-symbols/X.svg";

    const getSymbols = () => {
        const symbolSrcArray = [];

        if(Array.isArray(card.data.color_identity)){
        for(let symbol of card.data.color_identity){
            const symbolSrc = symbologyData.data.find((symbolObject) => symbolObject.loose_variant === symbol).svg_uri;
            symbolSrcArray.push( symbolSrc );
        }
        } else {
            symbolSrcArray.push(xSymbolSrc);
        }

        return symbolSrcArray;
    }
//TODO Refactor to use symbology hook
    useEffect(() => {
        if( symbologyData ){
            setSymbolUriArray( getSymbols() )
        }
    }, [symbologyData]);

    return (
        <div className={'deck-builder-card-slide'}>
            <div className={'deck-builder-card-slide-info'}>
                {symbolUriArray.map((uri) => <img src={uri} key={uri} className={'card-slide-color-icon'} alt={'card color'}/>)}
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
