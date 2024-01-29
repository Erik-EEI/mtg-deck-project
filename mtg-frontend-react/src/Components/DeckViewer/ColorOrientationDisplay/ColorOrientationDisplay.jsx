import './ColorOrientetionDisplay.css';
import {deckInfoService} from "../../../Utils/index.js";

const ColorOrientationDisplay = ({ deck }) => {

    const generateOrientationText = () => {
        const colorCodes = {
            'B': 'Black',
            'U': 'Blue',
            'R': 'Red',
            'W': 'White',
            'G': 'Green'
        }
        const colorOrientationArray =  deckInfoService.getColorOrientation( deck );
        const mappedColors = colorOrientationArray.map((colorCode) => colorCodes[colorCode]);

        return `Deck Color Orientation: ${mappedColors}`;
    }

    return (
        <h1 className={'color-orientation'}>{generateOrientationText()}</h1>
    );
};

export default ColorOrientationDisplay;
