import {useQuery} from '@tanstack/react-query';

const buildURL = ( searchTerm, colorArray ) => {
    const searchParams = new URLSearchParams();

    if ( searchTerm ) {
        searchParams.set('name', searchTerm);
    }
    if (colorArray.length > 0) {
        searchParams.set('color', colorArray.join(','));
    }

    let queryString = searchParams.toString();
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

const useSearchCards = ( searchTerm, colorArray ) => {
    const query = useQuery({
        queryKey:['searchCards'],
        queryFn:() => fetchResults( buildURL(searchTerm,colorArray) ),
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