//Задача 2 (з ДЗ 24)
const data = {
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
};

/* АБО якщо потрібно трансформувати псевдомасив arguments в повноцінний масив:
function addRecord() {
    const arrFromArg = [].slice.call(arguments);   // const arrFromArg = [].slice.apply(arguments);
    arrFromArg.forEach(arg => {
        for(key in arg) {
            this[key] = arg[key];
        };
    });
};
*/

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

console.log('---------------------------')

