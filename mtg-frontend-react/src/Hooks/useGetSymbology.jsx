import {useQuery} from '@tanstack/react-query';

const getCachedSymbology = () => JSON.parse(localStorage.getItem('symbologyCache'));
const cacheSymbologyData = ( data ) => localStorage.setItem('symbologyCache', JSON.stringify(data));
const fetchSymbology = async () => {
    try {
        const symbologyContainer = getCachedSymbology();
        if(symbologyContainer) return symbologyContainer;
        else {
        const response = await fetch(`https://api.scryfall.com/symbology`);
        const data = await response.json();

        cacheSymbologyData( data );

        return data;
        }
    } catch (err) {
        console.log(err);
    }
};

const useGetSymbology = () => {
    const query = useQuery({
        queryKey:['getSymbology'],
        queryFn:() => fetchSymbology(),
        enabled: true,
    });

    return {
        symbologyData: query.data,
        isSymbologyLoading: query.isFetching,
        isSymbologyError: query.isError,
    };
};

export default useGetSymbology;
