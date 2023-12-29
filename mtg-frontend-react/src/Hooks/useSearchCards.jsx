import {useQuery} from '@tanstack/react-query';

const fetchResults = async () => {
    try {
        const response = await fetch(`https://api.scryfall.com/cards/random`);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
//TODO Wrap fetch to check localstorage first

const useSearchCards = () => {
    const query = useQuery({
        queryKey:['getRandomCard'],
        queryFn:() => fetchResults(),
        enabled: false,
    });

    return {
        randomCardData: query.data,
        isRandomCardLoading: query.isFetching,
        isRandomCardError: query.isError,
        reFetchRandomCard: query.refetch,
    };
};

export default useSearchCards;