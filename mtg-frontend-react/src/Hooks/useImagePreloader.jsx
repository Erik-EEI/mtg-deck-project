import {useEffect, useState} from "react";
import {cardPlaceholder} from "../Assets/index.js";

const useImagePreloader = ( cardData ) => {
    const[ isLoading, setIsLoading ] = useState( true );
    const [ src, setSrc ] = useState( null );
    const provideCardImage = () => {
        if (cardData.highres_image) {
            return cardData.image_uris !== undefined ? cardData.image_uris.large : cardData.card_faces[0].image_uris.large;
        } else {
            return cardPlaceholder;
        }
    };

    useEffect(() => {
        const imageSrc = provideCardImage();
        setSrc( imageSrc )
        setIsLoading( true );

        const phantomImage = new Image();
        phantomImage.src = imageSrc;
        phantomImage.onload = () => setIsLoading( false );

    }, [ cardData ]);

    return {
        isLoading: isLoading,
        src: src
    }
}

export default useImagePreloader;