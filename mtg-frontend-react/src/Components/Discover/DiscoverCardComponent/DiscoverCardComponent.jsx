import './DiscoverCardComponent.css';
import { useEffect } from "react";
import {useImagePreloader} from "../../../Hooks/index.js";
import {CardLoadingAnimation} from "../index.js";
import {cardPlaceholder} from "../../../Assets/index.js";

const DiscoverCardComponent = ({ cardData, onClick }) => {
    const { isLoading, src } = useImagePreloader( cardData, 'card' );

    useEffect(() => {

    }, [cardData, isLoading]);

    return (
        <div className='card-container'>
            {isLoading ?
                <CardLoadingAnimation />
                :
                <img
                src={src}
                className={ src === cardPlaceholder ? 'discover-card placeholder' : 'discover-card'}
                onClick={() => onClick(cardData)}
                alt={cardData.name}
                />
            }
            {
                src === cardPlaceholder && <p onClick={() => onClick(cardData)} className={'placeholder-text'}>{cardData?.name}</p>
            }
        </div>
    );
};

export default DiscoverCardComponent;
