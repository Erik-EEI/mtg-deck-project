import './ThemeSlide.css';
import {useState} from "react";

const ThemeSlide = ({ theme, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const slideStyle = {
        background: `linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${theme.banner})`,
        border: `solid ${theme.buttonColor} 1px`,
    };

    const hoverStyle = {
        boxShadow: `0 0 10px 5px ${theme.buttonColor}`,
    };

    return (
        <div
            className={'theme-slide-container'}
            style={isHovered ?{...slideStyle, ...hoverStyle} : slideStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(theme)}
        >
            <h1>{theme.name}</h1>
        </div>
    );
};

export default ThemeSlide;
