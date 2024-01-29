import './StatsTable.css';
import {deckInfoService} from "../../../Utils/index.js";

const StatsTable = ({ deck }) => {
    const getAvgManaCost = () => {
        return deckInfoService.calculateAverageValue( deck, 'cmc' );
    }

    const getAvgPower = () => {
        return deckInfoService.calculateAverageValue( deck, 'power' );
    }

    const getAvgToughness = () => {
        return deckInfoService.calculateAverageValue( deck, 'toughness' );
    }

    const getMaxPower = () => {
         return deckInfoService.getCardWithMaxValue( deck, 'power').power;
    }

    const getMaxToughness = () => {
        return deckInfoService.getCardWithMaxValue( deck, 'toughness').toughness;
    }

    const getAvailability = () => {
        const availableGameModes = deckInfoService.getDeckAvailability( deck );
        return availableGameModes.length > 0 ? availableGameModes : 'N/A'
    }


    return (
        <table className={'stat-table'}>
            <thead>
            <tr>
                <th>STAT</th>
                <th>RESULT</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Average Mana Cost</td>
                <td className={'stat-result'}>{getAvgManaCost()}</td>
            </tr>
            <tr>
                <td>Average Power</td>
                <td className={'stat-result'}>{getAvgPower()}</td>
            </tr>
            <tr>
                <td>Average Toughness</td>
                <td className={'stat-result'}>{getAvgToughness()}</td>
            </tr>
            <tr>
                <td>Max Power</td>
                <td className={'stat-result'}>{getMaxPower()}</td>
            </tr>
            <tr>
                <td>Max Toughness</td>
                <td className={'stat-result'}>{getMaxToughness()}</td>
            </tr>
            <tr>
                <td>Availability</td>
                <td className={'stat-result'}>{getAvailability()}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default StatsTable;
