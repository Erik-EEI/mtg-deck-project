import './DiscoverPageSelector.css';
const DiscoverPageSelector = ({ currentPage, setPage, allResultCount, cardsPerPageCount}) => {
    const handleNextPageButtonClick = () => {
        setPage(currentPage + 1);
    }

    const handlePreviousPageButtonClick = () => {
        setPage(currentPage - 1);
    }

    //TODO Elevate button disable state determining logic from properties of button tags

    return (
        <div className={'discover-page-selector-container'}>
            <button
            className={(currentPage - 1) < 1 ?'page-selector-button disabled-button' : 'page-selector-button'}
            disabled={(currentPage - 1) < 1}
            onClick={handlePreviousPageButtonClick}
            >{'<'}</button>

            <p>{ currentPage } / {Math.ceil(allResultCount / cardsPerPageCount)}</p>

            <button
                className={(currentPage + 1) > (Math.ceil(allResultCount / cardsPerPageCount)) ? 'page-selector-button disabled-button' : 'page-selector-button'}
                disabled={(currentPage + 1) > (Math.ceil(allResultCount / cardsPerPageCount))}
                onClick={handleNextPageButtonClick}
            >{'>'}</button>
        </div>
    );
};

export default DiscoverPageSelector;