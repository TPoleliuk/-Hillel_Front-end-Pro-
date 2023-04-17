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

function copy(object, newObj) {
  for (key in object) {
    if (typeof object[key] === 'object') {
      copy(object[key], newObj);
    } else {
      newObj[key] = object[key];
    };
  };
};

function convert_V1(object) {
  const newObj = {};

  copy(object, newObj);

  return newObj;
};

console.log(convert_V1(obj));

// Варіант 2

function convert_V2(object) {
  const newObj = {};
  
  for (key in object) {
    if (typeof object[key] === 'object') {
      Object.assign(newObj, convert_V2(object[key]));
    } else {
      newObj[key] = object[key];
    };
  };
  
  return newObj; 
};

console.log(convert_V2(obj));
