import {useQuery} from '@tanstack/react-query';

const buildURL = ( searchTerm, colorArray, powerPreference, toughnessPreference ) => {
    const searchParams = new URLSearchParams();

    if ( searchTerm ) {
        searchParams.set('name', searchTerm);
    }
    if (colorArray.length > 0) {
        searchParams.set('color', colorArray.join(','));
    }
    let queryString = searchParams.toString();

    if( powerPreference[0] !== 0){
        queryString += encodeURI(`+pow>=${ powerPreference[0]}`);
    }
    //TODO Implement global max power for cards
    if( powerPreference[1] !== 20 ){
        queryString += encodeURI(`+pow<=${ powerPreference[1]}`);
    }

    if( toughnessPreference[0] !== 0 ){
        queryString += encodeURI(`+tou>=${ toughnessPreference[0] }`);
    }

    if( toughnessPreference[1] !== 20 ){
        queryString += encodeURI(`+tou<=${ toughnessPreference[1] }`);
    }

    queryString = queryString.replaceAll('&','+');
    console.log(queryString)
    return `https://api.scryfall.com/cards/search?q=${queryString}`;
}

const fetchResults = async ( url ) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
//TODO Wrap fetch to check localstorage first

const useSearchCards = ( searchTerm, colorArray, powerPreference, toughnessPreference ) => {
    const query = useQuery({
        queryKey:['searchCards'],
        queryFn:() => fetchResults( buildURL(searchTerm,colorArray,powerPreference,toughnessPreference) ),
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