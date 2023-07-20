function createSearchPart(params) {
    const keys = Object.keys(params);
    
    const searchPart = keys.reduce((commonSearch, key, index, array) => {
        if (index === array.length-1) {
            return commonSearch + `${key}=${params[key]}`;
        } else {
            return commonSearch + `${key}=${params[key]}&`;
        };
    }, '?') 

    return searchPart;
};

function createApiUrl(params) {
    const originAndPath = 'https://api.openweathermap.org/data/2.5/weather';
    const search = createSearchPart(params); 
    const url = originAndPath + search;
    return url;
};

export default createApiUrl;