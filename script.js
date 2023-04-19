//Задача 1
const obj = {
    string: 'string',
    number: 100,
    boolean: true,
    array: [1, 2, 3, 4],
    renderObject: renderObject,
};

function renderObject() {
    const breakRow = '<br>';
    const colon = ':';
    const space = ' ';
    for(key in this) {
        if (key === 'renderObject') continue;
        document.write(key + colon + space + this[key] + breakRow);
    };
    document.write(breakRow);
};

obj.renderObject();
renderObject.call(obj);
renderObject.apply(obj);

//Задача 2
const data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50,
};

function addRecord() {
    for(i = 0; i < arguments.length; i++) {
        for(key in arguments[i]) {
            this[key] = arguments[i][key];
        };
    };
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x) // 50
console.log(data.y) // 20
console.log(data.z) // 30
console.log(data.p) // 600
console.log(data.str) // 'hello'

console.log('---------------------------')

addRecord.call(data, {x: 110}, {y: 120}, {z: 130, x: 150});

console.log(data.x) // 150
console.log(data.y) // 120
console.log(data.z) // 130
console.log(data.p) // 600
console.log(data.str) // 'hello'

console.log('---------------------------')

addRecord.apply(data, [{x: 210}, {y: 220}, {z: 230, x: 250}]);

console.log(data.x) // 250
console.log(data.y) // 220
console.log(data.z) // 230
console.log(data.p) // 600
console.log(data.str) // 'hello'