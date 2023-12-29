import { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import './ToughnessSelectorComponent.css';


const ToughnessSelectorComponent = ({ setPowerPreference, setToughnessPreference }) => {
    const [minPower, setMinPower] = useState(0);
    const [maxPower, setMaxPower] = useState(20);
    const [minToughness, setMinToughness] = useState(0);
    const [maxToughness, setMaxToughness] = useState(20);
    const handlePowerSliderInput = (e) => {
        setMinPower(e.minValue);
        setMaxPower(e.maxValue);
        setPowerPreference([ minPower, maxPower]);
    };

    const handleToughnessSliderInput = (e) => {
        setMinToughness(e.minValue);
        setMaxToughness(e.maxValue);
        setToughnessPreference([ minToughness, maxToughness ]);
    };


    return (
        <div>
            <label> POWER </label>
            <MultiRangeSlider
                min={0}
                max={20}
                step={1}
                minValue={minPower}
                maxValue={maxPower}
                onInput={(e) => {
                    handlePowerSliderInput(e);
                }}
                className={'toughness-selector-slider'}
                />
            <label> TOUGHNESS </label>
            <MultiRangeSlider
                min={0}
                max={20}
                step={1}
                minValue={minToughness}
                maxValue={maxToughness}
                onInput={(e) => {
                    handleToughnessSliderInput(e);
                }}
                className={'toughness-selector-slider'}
            />
        </div>
    );
};

export default ToughnessSelectorComponent;
