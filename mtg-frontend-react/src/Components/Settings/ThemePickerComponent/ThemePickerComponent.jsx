import './ThemePickerComponent.css';
import {ThemeSlide} from "../index.js";
import {BLUE_THEME, GREEN_THEME, RED_THEME} from "../../../Constants/themeProperties.js";
import {themeHandler} from "../../../Utils/index.js";

const ThemePickerComponent = ( ) => {

    const handleSlideClick = ( theme ) => {
        themeHandler.changeBackground( theme );
        themeHandler.changeNavButtonColor( theme );
        themeHandler.changeShadowColor( theme );
        themeHandler.changeDefaultButtonColor( theme );
    }


    return (
        <div className={'theme-picker-container'} >
            <ThemeSlide theme={RED_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={GREEN_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={BLUE_THEME} onClick={handleSlideClick}/>
        </div>
    );
};

export default ThemePickerComponent;
