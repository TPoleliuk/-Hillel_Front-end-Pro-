const obj = {
    a: 10,
    b: 12,
    c: {
        f: 13,
        g: {
            m: 20
        },
    },
};

console.log(obj);

function convert(object) {
    newObj = {};

    (function demiConvert (object) {
        for (key in object) {
            if (typeof object[key] === 'object') {
                demiConvert(object[key]);
            } else {
                newObj[key] = object[key];
            };
        }
    })(object);
    
    return newObj; 
};

console.log(convert(obj));


