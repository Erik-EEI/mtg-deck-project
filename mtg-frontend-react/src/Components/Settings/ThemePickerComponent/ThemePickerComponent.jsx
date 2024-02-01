import './ThemePickerComponent.css';
import {ThemeSlide} from "../index.js";
import {BLUE_THEME, GREEN_THEME, RED_THEME} from "../../../Constants/themeProperties.js";

const ThemePickerComponent = ( ) => {


    return (
        <div className={'theme-picker-container'} >
            <ThemeSlide theme={RED_THEME} />
            <ThemeSlide theme={GREEN_THEME} />
            <ThemeSlide theme={BLUE_THEME} />
        </div>
    );
};

export default ThemePickerComponent;
