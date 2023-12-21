import "./Home.css";
import {HomeButton} from "../../Components/Home/index.js";
import { backgroundVideo } from '../../Assets';
import {useEffect, useRef} from "react";
const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 0.7;
    }, []);


    return (
        <div id="home-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-background"
                ref={ videoRef }
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <HomeButton />
        </div>
    );
};
export default Home;