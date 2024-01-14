import './ColorSearchOption.css';
import {useEffect, useState} from "react";
const ColorSearchOption = ({ colorIcon, colorText, selectedValues, setSelectedValues}) => {
    const [isColorChosen, setIsColorChosen] = useState(false);

    useEffect(() => {
        if(selectedValues.includes(colorText)) {
            setIsColorChosen( true );
        } else {
            setIsColorChosen( false );
        }
    }, [ selectedValues ]);

    const handleClick = () => {
        if( isColorChosen ){
            const arrayWithoutThisColor =  selectedValues.filter((colorCode) => colorCode !== colorText);
            setSelectedValues(arrayWithoutThisColor);
        } else {
            setSelectedValues([...selectedValues, colorText]);
        }
    }

    return (
        <img
            src={colorIcon}
            className={isColorChosen ? 'color-chooser-icon color-chosen' : 'color-chooser-icon'}
            alt={`${colorText} color chooser icon`}
            onClick={handleClick}
        />
    );
};

export default ColorSearchOption;
