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

// Варіант 1

function convert_V1(object) {
    newObj = {};

    (function demiConvert (object) {
        for (key in object) {
            if (typeof object[key] === 'object') {
                demiConvert(object[key]);
            } else {
                newObj[key] = object[key];
            };
        };
    })(object);
    
    return newObj; 
};

console.log(convert_V1(obj));

// Варіант 2

function convert_V2(object) {
  newObj = {};
  
  for (key in object) {
    if (typeof object[key] === 'object') {
      newObj = Object.assign(newObj, convert_V2(object[key]));
    } else {
      newObj[key] = object[key];
    };
  };
  
  return newObj; 
};

console.log(convert_V2(obj));
