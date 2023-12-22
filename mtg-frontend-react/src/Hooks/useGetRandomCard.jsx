import {useQuery} from '@tanstack/react-query';

const fetchRandomCard = async () => {
    try {
        const response = await fetch(`https://api.scryfall.com/cards/random`);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
//TODO Wrap fetch to check localstorage first

const useGetRandomCard = () => {
    const query = useQuery({
        queryKey:['getRandomCard'],
        queryFn:() => fetchRandomCard(),
    });

    return {
        randomCardData: query.data,
        isRandomCardLoading: query.isFetching,
        isRandomCardError: query.isError,
        reFetchRandomCard: query.refetch,
    };
};

export default useGetRandomCard;