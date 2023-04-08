/* Задача 1. Напиши функцію filter, яка приймає функцію зворотного виклику та масив.
Повертає вона масив значень, котрим ф-я зворотного виклику поверне true.*/

const array_1 = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0;
};

function filter(input, checkingFunction) {
    for (let i = input.length - 1; i >= 0; i--) {
        if (!checkingFunction(input[i])) {
            input.splice(i, 1);
        };
    };
    return input;
};

/* АБО якщо створювати новий масив:

function filter(input, checkingFunction) {
    const newArray = [];
    for (i = 0; i < input.length; i++) {
        if (checkingFunction(input[i])) {
            newArray[newArray.length] = input[i];
        };
    };
    return newArray;
};
*/

console.log(filter(array_1, isEven));

console.log('------------------------------------');

/* задача 2. Реалізувати функцію copy(list) - копіювання масиву. Передбачити можливість передачі другим аргументом функції.
При копіюванні масиву - функція застосовується до кожного елемента масиву, що копіюється.*/

const array_2 = [7, 8, 9, 10, 11, 12];

let multiplyBy10 = (value) => value * 10; 

function copy(list, modifyingFunction) {
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray[newArray.length] = modifyingFunction(list[i]);
    };
    return newArray;
};

console.log(copy(array_2, multiplyBy10));