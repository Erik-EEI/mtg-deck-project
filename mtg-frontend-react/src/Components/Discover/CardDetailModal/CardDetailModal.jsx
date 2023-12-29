import './CardDetailModal.css';
import {useEffect, useRef} from "react";

const CardDetailModal = ({ isModalVisible,handleOnKeyClose,handleOnClick,cardData }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current?.open && !isModalVisible) {
            dialogRef.current?.close();
        } else if (!dialogRef.current?.open && isModalVisible) {
            dialogRef.current?.showModal();
        }
    }, [isModalVisible]);

    if( !cardData ) {
        return 'Loading'
    }

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
                <img src={cardData.image_uris.art_crop} className={'card-modal-art'} />
                <h1>{cardData.name}</h1>
                <div className={'card-modal-main-info'}>
                    <div>
                        <h3>MANA COST</h3>
                        <h3>{cardData.mana_cost}</h3>
                    </div>
                    <div>
                        <h3>CARD TYPE</h3>
                        <h3>{cardData.type_line}</h3>
                    </div>
                    <div>
                        <h3>COLOR</h3>
                        <h3>{cardData.color_identity}</h3>
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