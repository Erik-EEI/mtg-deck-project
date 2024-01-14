import './CardDetailModal.css';
import {useEffect, useRef} from "react";
import {useGetSymbology, useImagePreloader} from "../../../Hooks/index.js";
import {CardLoadingAnimation} from "../index.js";

const CardDetailModal = ({ isModalVisible,handleOnKeyClose,handleOnClick,cardData }) => {
    const dialogRef = useRef(null);
    const { isLoading, src } = useImagePreloader( cardData, 'art' );
    const { symbologyData, isSymbologyLoading } = useGetSymbology();

    useEffect(() => {
        if (dialogRef.current?.open && !isModalVisible) {
            dialogRef.current?.close();
        } else if (!dialogRef.current?.open && isModalVisible) {
            dialogRef.current?.showModal();

        }
    }, [isModalVisible]);

    const mapStringToSymbols = ( str ) => {
        let manaCost = str?.replaceAll('{','')?.replaceAll('}','');
        const symbols = [];

        for( let symbolObject of symbologyData.data ){
            const currentSymbol = symbolObject.symbol.replaceAll('{','').replaceAll('}','');
            const symbol = new RegExp( currentSymbol, 'gi');

            if( symbol.test( manaCost ) ){
                symbols.push( symbolObject.svg_uri )
            }
        }

        return symbols;
    }

    if( !cardData ) {
        return 'Loading'
    }

    //FIXME Mana symbol only maps 1 time / color, even if there is 3 of the same color nex to each other
    //TODO Conditional modal for cards with no text
    //TODO Implement function that replaces color codes with mana emblems

    return (
        <dialog
            className={'card-data-modal'}
            ref={dialogRef}
            onKeyDown={(event) => handleOnKeyClose(event)}
        >
            <button className={'modal-close-button'} onClick={handleOnClick}>X</button>
            <div className={'card-modal-content'}>
                { isLoading ?
                    <CardLoadingAnimation />
                    :
                <img src={src} className={'card-modal-art'} />
                }
                <h1>{cardData.name}</h1>
                <div className={'card-modal-main-info'}>
                    <div className={'card-modal-info-mana'}>
                        <h3>MANA COST</h3>
                        <span>
                        {symbologyData && mapStringToSymbols( cardData.mana_cost ).map((symbolSrc) => {
                            return <img key={symbolSrc} src={symbolSrc} className={'card-detail-modal-symbol'} />
                        })}
                        </span>
                    </div>
                    <div className={'card-modal-info-type'}>
                        <h3>CARD TYPE</h3>
                        <h3>{cardData.type_line}</h3>
                    </div>
                    <div className={'card-modal-info-mana'}>
                        <h3>COLOR</h3>
                        {symbologyData && mapStringToSymbols(cardData.color_identity.join('')).map((symbolSrc) => {
                            return <img key={symbolSrc} src={symbolSrc} className={'card-detail-modal-symbol'} />
                        })}
                    </div>
                </div>
                <div className={'card-modal-sub-info'}>
                    <p className={'card-data-modal-left'}>{cardData.oracle_text}</p>
                    <section className={'card-data-modal-right'}>
                        <p>Released : {cardData.released_at}</p>
                        <p>Set : {cardData.set_name}</p>
                        <p>Set type : {cardData.set_type}</p>
                        <p>Rarity : {cardData.rarity}</p>
                        <p>{cardData.flavor_text}</p>
                    </section>
                </div>
            </div>
        </dialog>
    );
};

export default CardDetailModal;
