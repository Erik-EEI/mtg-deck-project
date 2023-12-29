import {useQuery} from '@tanstack/react-query';

const fetchSymbology = async () => {
    try {
        const response = await fetch(`https://api.scryfall.com/symbology`);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
//TODO Wrap fetch to check localstorage first

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