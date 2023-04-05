/* 1. Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

const A = ['string', 13, true, undefined, 25, 35, null, 'string 2.0', 110, NaN, 3];
console.log(A);

function averageOfNumbers(arr) {
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            amount++;
        };
    };

    return sum/amount;
};

console.log('Average Of Numbers: ' + averageOfNumbers(A));

console.log('----------------------------------------------');

/* 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (степінь ).
Вивести результат математичної дії, вказаної в змінній znak. Обидва числа і знак виходять від користувача.*/

const firstNumber = +prompt("Введіть перше число.");
const secondNumber = +prompt("Введіть друге число.");
const operation = prompt("Оберіть дію: +, -, *, /, %, ^.");

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+': result = x+y;
        break;
        case '-': result = x-y;
        break;
        case '*': result = x*y;
        break;
        case '/': result = x/y;
        break;
        case '%': result = x%y;
        break;
        case '^': result = Math.pow(x, y);
        break;
    };

    return x + ' ' + znak + ' ' + y + ' = ' + result;
};

console.log(doMath(firstNumber, operation, secondNumber));

console.log('----------------------------------------------');

/* 3. Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.*/

const countRows = +prompt('Введіть к-ть рядків двомірного масиву.');
const countColumns = +prompt('Введіть к-ть стовпців двомірного масиву.');

function fillArray(rows, columns) {
    arr = new Array (rows);

    for (let i = 0; i < rows; i++) {
        arr[i] = new Array (columns);

        for (let j = 0; j < columns; j++) {
            arr[i][j] = prompt(`Задайте елемент масиву [${i}][${j}].`);
        };
    };

    return arr;
};

console.log(fillArray(countRows, countColumns));

console.log('----------------------------------------------');

/* 3. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.*/

const currentString = prompt('Задайте вихідний рядок.');
const symbolsRemove = prompt('Задайте через кому символи, що підлягають видаленню.');

console.log('Вихідний рядок: ' + currentString);
console.log('Символи: ' + symbolsRemove);

function removeElements(string, symbols) {
    const arrayOfString = string.split('');
    const arrayOfSymbols = symbols.split(',');
    
    for (let i = 0; i < arrayOfSymbols.length; i++) {

        for (let j = arrayOfString.length - 1; j >= 0; j--) {
            if (arrayOfSymbols[i] === arrayOfString[j]) {
                arrayOfString.splice(j, 1);
            };
        };

    };

    return arrayOfString.join('');
};

console.log('Модифікований рядок: ' + removeElements(currentString, symbolsRemove));

/*АБО якщо без перетворення рядка в масив:

function removeElements(string, symbols) {
    const arrayOfSymbols = symbols.split(',');
    let newString = '';
    
    for (let i = 0; i < string.length; i++) {
        let isMatch = false;

        for (let j = 0; j < arrayOfSymbols.length; j++) {
            if (string[i] === arrayOfSymbols[j]) {
                isMatch = true;
                break;
            };
        };

        if (!isMatch) {
            newString += string[i];
        };
    };

    return newString;
};
*/