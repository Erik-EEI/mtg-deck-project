import './ThemePickerComponent.css';
import {ThemeSlide} from "../index.js";
import {BLACK_THEME, BLUE_THEME, GREEN_THEME, RED_THEME, WHITE_THEME} from "../../../Constants/themeProperties.js";
import {themeHandler} from "../../../Utils/index.js";

const ThemePickerComponent = ( ) => {

    const handleSlideClick = ( theme ) => themeHandler.changeTheme( theme );

    return (
        <div className={'theme-picker-container'} >
            <ThemeSlide theme={RED_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={GREEN_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={BLUE_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={WHITE_THEME} onClick={handleSlideClick}/>
            <ThemeSlide theme={BLACK_THEME} onClick={handleSlideClick}/>
        </div>
    );
};

export default ThemePickerComponent;
