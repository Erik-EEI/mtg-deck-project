const MAX_CACHE_SIZE = 5;

const maintainCacheSize = (cache) => {
    if (Object.keys(cache).length >= MAX_CACHE_SIZE) {
        const oldestSearch = Object.entries(cache).reduce((acc, curr) => (curr[1].searchedAt < acc[1].searchedAt ? curr : acc));
        
        delete cache[oldestSearch[0]];
    }
};

const getCache = (urlKey) => {
    try {
        const cacheStorage = JSON.parse(localStorage.getItem('searchCache')) || {};
        const searchResult = cacheStorage[urlKey];
        return searchResult || null;
    } catch (error) {
        console.error('Error while parsing cache data:', error);
        return null;
    }
};

const saveCache = (urlKey, data) => {
    try {
        let cacheStorage = JSON.parse(localStorage.getItem('searchCache')) || {};
        maintainCacheSize(cacheStorage);

        data.searchedAt = Date.now();
        cacheStorage[urlKey] = data;
        localStorage.setItem('searchCache', JSON.stringify(cacheStorage));
    } catch (error) {
        console.error('Error while saving cache data:', error);
    }
};

export { getCache, saveCache };
