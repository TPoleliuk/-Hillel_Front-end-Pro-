const fetchData = async (url) => {
    return (await fetch(url)).json();
};

export default fetchData;