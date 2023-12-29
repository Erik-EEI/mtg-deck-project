import './DiscoverSearchComponent.css';
import {useState} from "react";
import {useGetSymbology} from "../../../Hooks/index.js";
import {ColorSearchOption} from "../index.js";
const DiscoverSearchComponent = ({ fetchRandomCard }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColors, setSearchColors] = useState([]);
    const { symbologyData, isSymbologyError, isSymbologyLoading } = useGetSymbology()

    const generateColorPickers = () => {
        const colors = ["{W}","{U}","{B}","{R}", "{G}"];

        return colors.map((colorCode) =>{
            const icon = symbologyData.data.find((symbolObject) => symbolObject.symbol === colorCode).svg_uri;
            return <ColorSearchOption key={colorCode} colorIcon={icon} colorText={colorCode} selectedValues={searchColors} setSelectedValues={setSearchColors} />
        })
    }

    return (
        <div id='discover-search-component-container'>
            <h2>SEARCH</h2>
            <input
            type='text'
            placeholder='Enter Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p> COLOR </p>
            <section className={'discover-search-color-container'}>
            {symbologyData && generateColorPickers() }
            </section>
            <button onClick={fetchRandomCard}> Surprise me! </button>
        </div>
    );
};

export default DiscoverSearchComponent;