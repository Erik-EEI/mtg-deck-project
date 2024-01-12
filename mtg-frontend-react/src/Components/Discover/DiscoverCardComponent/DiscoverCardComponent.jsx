import './DiscoverCardComponent.css';
import { useEffect } from "react";
import {useImagePreloader} from "../../../Hooks/index.js";
import {CardLoadingAnimation} from "../index.js";

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
                className={'discover-card'}
                onClick={() => onClick(cardData)}
                alt={cardData.name}
                />
            }
        </div>
    );
};

export default DiscoverCardComponent;
