import './DeckCardComponent.css';
import {useImagePreloader} from "../../../Hooks/index.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const DeckCardComponent = ({ deckName, deckCards }) => {
    const { src, isLoading} = useImagePreloader( Object.values(deckCards)[0]?.data, 'art' );
    const [ backgroundStyle, setBackgroundStyle ] = useState({});
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/view/${deckName}`);
    }

    useEffect(() => {
        if(src && !isLoading){
            setBackgroundStyle({backgroundImage: `url(${src})`});
        }
    }, [isLoading]);

    return (
        <div className="container noselect" onClick={handleClick}>
            <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card" style={backgroundStyle}>
                    <p id="prompt">{deckName}</p>
                    <div className="title">{`View ${deckName}`}</div>
                </div>
            </div>
        </div>
    );
};

export default DeckCardComponent;
