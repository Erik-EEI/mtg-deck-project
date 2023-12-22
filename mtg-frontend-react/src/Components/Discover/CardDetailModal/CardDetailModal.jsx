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

    return (
        <dialog
            className={'card-data-modal'}
            ref={dialogRef}
            onKeyDown={(event) => handleOnKeyClose(event)}
        >
            <button className={'modal-close-button'} onClick={handleOnClick}>X</button>
            <div className={'card-modal-content'}>
                <img src={cardData.image_uris.art_crop} />
            </div>
        </dialog>
    );
};

export default CardDetailModal;