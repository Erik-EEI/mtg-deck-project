import {useQuery} from '@tanstack/react-query';
import {cacheHandler} from "../Utils/index.js";
//TODO Refactor
const buildURL = ( searchTerm, colorArray, typeSearchTerm, powerPreference, toughnessPreference, ) => {
    const searchParams = new URLSearchParams();

    if ( searchTerm ) {
        searchParams.set('name', searchTerm);
    }
    if (colorArray && colorArray.length > 0) {
        searchParams.set('color', colorArray.join(','));
    }
    if(typeSearchTerm && typeSearchTerm !== ''){
        searchParams.set('type', typeSearchTerm);
    }
    let queryString = searchParams.toString();

    if(powerPreference && powerPreference[0] !== 0){
        queryString += encodeURI(`+pow>=${ powerPreference[0]}`);
    }
    //TODO Implement global max power for cards
    if(powerPreference && powerPreference[1] !== 20 ){
        queryString += encodeURI(`+pow<=${ powerPreference[1]}`);
    }

    if(toughnessPreference && toughnessPreference[0] !== 0 ){
        queryString += encodeURI(`+tou>=${ toughnessPreference[0] }`);
    }

    if(toughnessPreference && toughnessPreference[1] !== 20 ){
        queryString += encodeURI(`+tou<=${ toughnessPreference[1] }`);
    }

    queryString = queryString.replaceAll('&','+');
    console.log(queryString)
    return `https://api.scryfall.com/cards/search?q=${queryString}`;
}

const fetchResults = async ( url ) => {
    try {
        const cachedSearch = cacheHandler.getCache( url );

        if(!cachedSearch){
        const response = await fetch(url);
        const data =  await response.json();

        cacheHandler.saveCache( url, data );
        return data;
        } else {
            return cachedSearch;
        }
    } catch (err) {
        console.log(err);
    }
};

const useSearchCards = ( searchTerm, colorArray, powerPreference, toughnessPreference, typeSearchTerm ) => {
    const query = useQuery({
        queryKey:['searchCards'],
        queryFn:() => fetchResults( buildURL(searchTerm,colorArray,powerPreference,toughnessPreference, typeSearchTerm) ),
        enabled: false,
    });

    return {
        resultCardsData: query.data,
        isResultsLoading: query.isFetching,
        isResultsError: query.isError,
        reFetchSearchCards: query.refetch,
    };
};

export default useSearchCards;
