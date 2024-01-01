import './DiscoverCardComponent.css';
import { cardPlaceholder } from "../../../Assets/index.js";
import { useEffect, useState } from "react";

const DiscoverCardComponent = ({ cardData, onClick }) => {
    const [image, setImage] = useState(null);
    const [isLoadingImage, setIsLoadingImage] = useState(false);

    useEffect(() => {
        setImage(provideCardImage());
    }, [cardData]);

    const provideCardImage = () => {
        if (cardData.highres_image) {
            return cardData.image_uris !== undefined ? cardData.image_uris.large : cardData.card_faces[0].image_uris.large;
        } else {
            return cardPlaceholder;
        }
    };

    if(isLoadingImage){
        return <p>LOADING IMAGE</p>
    }

    return (
        <div className='card-container'>
            {image !== cardPlaceholder && (
                <img
                    src={image}
                    className='discover-card'
                    onClick={() => onClick(cardData)}
                    alt={cardData.name}
                    onLoadStart={() => setIsLoadingImage( true )}
                    onLoadedData={() => setIsLoadingImage( false )}
                />
            )}
            {image === cardPlaceholder && (
                <div className='placeholder-overlay'>
                    <p className='card-no-image-text'>{cardData.name}</p>
                    <img
                        src={image}
                        className='discover-card placeholder'
                        onClick={() => onClick(cardData)}
                        alt={cardData.name}
                    />
                </div>
            )}
        </div>
    );
};

export default DiscoverCardComponent;
