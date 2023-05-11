const smartphones = {
    apple: ["iphone-10", "iphone-11", "iphone-12"],
    samsung: ["Galaxy A32", "Galaxy A03s", "Galaxy A73 5G"],
    oneplus: ["Nord AC2003", "9 LE2113", "8T KB2003"],
};

smartphones[Symbol.iterator] = function() {
    const brands = Object.keys(this);
    const self = this;
    let currentModelIndex = 0;
    let currentBrandIndex = 0;

    return {

        next() {
            const models = self[brands[currentBrandIndex]];

            if (!(currentModelIndex < models.length)) {
                currentBrandIndex++;
                currentModelIndex = 0;
            };
            
            if (!(currentBrandIndex < brands.length)) {
                return {done: true};
            };

            return {done: false, value: `${[brands[currentBrandIndex]]} - ${models[currentModelIndex++]}`};      
        },
    };
};

for (const smartphone of smartphones) {
    console.log(smartphone); 
};
