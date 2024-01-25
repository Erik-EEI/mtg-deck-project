import './SummaryCardSlide.css';
import {useEffect, useState} from "react";
import {useGetSymbology} from "../../../Hooks/index.js";

const SummaryCardSlide = ({card, amount}) => {
    const [ symbolUriArray, setSymbolUriArray ] = useState([]);
    const { symbologyData } = useGetSymbology();
    const xSymbolSrc = "https://svgs.scryfall.io/card-symbols/X.svg";

    const getSymbols = () => {
        const symbolSrcArray = [];

        if(Array.isArray(card.color_identity)){
            for(let symbol of card.color_identity){
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
        <div className={'summary-class-slide'}>
            <div className={'summary-class-symbols'}>
                {symbolUriArray.map((uri) => <img src={uri} key={uri} className={'card-slide-color-icon'} alt={'card color'}/>)}
            </div>
            <p className={'summary-slide-name'}>{card.name}</p>
            <p className={'summary-slide-amount'}>{amount}</p>
        </div>
    );
};

export default SummaryCardSlide;