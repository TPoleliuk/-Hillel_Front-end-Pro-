const toCoin = require('./toCoin')

const filters = {
    filter_stock: (criteriaValue, item) => criteriaValue === item.productStock.toString(),
    filter_minPrice: (criteriaValue, item) => toCoin(parseFloat(item.productPrice)) >= toCoin(parseFloat(criteriaValue)),
    filter_maxPrice: (criteriaValue, item) => toCoin(parseFloat(item.productPrice)) <= toCoin(parseFloat(criteriaValue)),
    filter_productName: (criteriaValue, item) => item.productName.toString().includes(criteriaValue),
}

function matcher({ key, criteriaValue, item }) {
    const filter = filters[`filter_${key}`];

    if (typeof filter !== 'function') {
        return true;
    };

    if (criteriaValue === 'undefined') {
        return false;
    };

    return filter(criteriaValue, item);
}

function getFilteredData(data, criteria) {
    const criteriaKeys = Object.keys(criteria);

    if(!criteriaKeys.length) {
        return data;
    };

    const filteredData = data.filter((item) => {
        return criteriaKeys.every((key) => {
            return matcher({key, criteriaValue: criteria[key], item});
        });
    });

    return filteredData;
};

function getProductById(id, data) {
    return data.find((item) => item.productId === id)
};

module.exports = {
    getProductById,
    getFilteredData,
}