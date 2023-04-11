// Задача - 1. Вивести в консоль послідовність чисел у зворотному порядку, використовуючи рекурсивний виклик функції.

function row(n) {
    if (!n) {
        return n;
        /*АБО просто "return", але, як я зрозуміла з дод. матеріалів, це більш доречно як контроль на помилкове вхідне значення,
        а не як зупинка рекурсії.*/
    };
    console.log(n);
    row(n - 1);
};

row(7);

(console.log('-----------------------------------'))

// Задача - 2. Написати рекурсивну функцію sumToArray(n), яка обчислює суму вказаного масиву чисел.

function sumToArray(arr) {
    if (arr.length === 1) {     //АБО if (!arr.length) {return arr.length}, але це дає ще один рекурсивний крок (зайвий).
        return arr[0];
    };
    const sum = arr.shift() + sumToArray(arr);
    return sum;
};

/* АБО викликати ф-ю з новим масивом, скопійованим з 1-го індекса попередньої версії масиву:
function sumToArray(arr) {
    if (arr.length === 1) {     //АБО if (!arr.length) {return arr.length}, але це дає ще один рекурсивний крок (зайвий).
        return arr[0];
    };
    const sum = arr[0] + sumToArray(arr.slice(1));
    return sum;
};
*/

console.log(sumToArray([1, 2, 3, 4, 5, 6]));

(console.log('-----------------------------------'));

// Задача - 3. Написати функцію factorial(n) - яка за допомогою рекурсії рахуватиме значення факторіалу числа n!

function factorial(n) {
    if (n === 1) {             //АБО if (!n) {return 1}, але це дає ще один рекурсивний крок (зайвий). 
        return n;
    };
    const product = n * factorial(n - 1);
    return product;
};

/* За потреби, на початку ф-ї можна зробити котроль: if(n < 1) {return;},
щоб не запускати рекурсію, якщо первинно в якості фактичного аргументу введено таке число.*/

console.log(factorial(5));