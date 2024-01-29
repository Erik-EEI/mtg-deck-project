import './DeckViewerImageContainer.css';
import {useImagePreloader} from "../../../Hooks/index.js";
import {useEffect, useState} from "react";
import {CardLoadingAnimation} from "../../Discover/index.js";

const DeckViewerImageContainer = ({ deck }) => {
    const { src, isLoading} = useImagePreloader( Object.values(deck)[0]?.data, 'art' );
    const [ backgroundStyle, setBackgroundStyle ] = useState({});

    useEffect(() => {
        if(src && !isLoading){
            setBackgroundStyle({backgroundImage: `url(${src})`});
        }
    }, [isLoading]);

    if (isLoading) return <CardLoadingAnimation />

    return (
        <div className={'deck-viewer-image-container'} style={backgroundStyle}>

        </div>
    );
};

export default DeckViewerImageContainer;
