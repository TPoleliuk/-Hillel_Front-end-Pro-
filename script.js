const lineBreak = '<br>';

/* Вивести на сторінку в один рядок через кому числа від 10 до 20. */
document.write('<strong>TASK 1: Вивести на сторінку в один рядок через кому числа від 10 до 20.</strong>' + lineBreak);
const maxNumber1 = 20;
for (let i = 10; i <= maxNumber1; i++) {
    if (i < maxNumber1) {
        document.write(i + ', ')
    } else {
        document.write(i)
    };
};


/* Вивести квадрати чисел від 10 до 20. */
document.write(lineBreak + lineBreak + '<strong>TASK 2: Вивести квадрати чисел від 10 до 20.</strong>' + lineBreak);
const maxNumber2 = 20;
for (let i = 10; i <= maxNumber2; i++) {
    if (i < maxNumber2) {
        document.write(i + '<sup>2</sup> = ' + i * i + ', ')
    } else {
        document.write(i + '<sup>2</sup> = ' + i * i)
    };
};


/* Вивести таблицю множення на 7. */
document.write(lineBreak + lineBreak + '<strong>TASK 3: Вивести таблицю множення на 7.</strong>' + lineBreak);
const maxNumber3 = 10;
for (let i = 1; i <= maxNumber3; i++) {
    if (i < maxNumber3) {
        document.write('7' + ' &#215; ' + i + ' = ' + 7 * i + lineBreak)
    } else {
        document.write('7' + ' &#215; ' + i + ' = ' + 7 * i)
    };
};


/* Знайти суму всіх цілих чисел від 1 до 15. */
document.write(lineBreak + lineBreak + '<strong>TASK 4: Знайти суму всіх цілих чисел від 1 до 15.</strong>' + lineBreak);
let totalSum = 0;
for (let i = 1; i <= 15; i++) {
    totalSum += i;
};
document.write('Total Sum: ' + totalSum);


/* Знайти добуток усіх цілих чисел від 15 до 35. */
document.write(lineBreak + lineBreak + '<strong>TASK 5: Знайти добуток усіх цілих чисел від 15 до 35.</strong>' + lineBreak);
let totalProduct  = 1;
for (let i = 15; i <= 35; i++) {
    totalProduct *= i;
};
document.write('Total Product: ' + totalProduct);


/* Знайти середнє арифметичне всіх цілих чисел від 1 до 500. */
document.write(lineBreak + lineBreak + '<strong>TASK 6: Знайти середнє арифметичне всіх цілих чисел від 1 до 500.</strong>' + lineBreak);
let totalforAvr  = 0;
const maxNumber6 = 500;
for (let i = 1; i <= maxNumber6; i++) {
    totalforAvr += i
};
document.write('Average Number: ' + totalforAvr/maxNumber6);


/* Вивести суму лише парних чисел в діапазоні від 30 до 80. */
document.write(lineBreak + lineBreak + '<strong>TASK 7: Вивести суму лише парних чисел в діапазоні від 30 до 80.</strong>' + lineBreak);
let totalEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 1) continue;
    totalEven += i;
};
document.write('Sum of even numbers: ' + totalEven);


/* Вивести всі числа в діапазоні від 100 до 200 кратні 3. */
document.write(lineBreak + lineBreak + '<strong>TASK 8: Вивести всі числа в діапазоні від 100 до 200 кратні 3.</strong>' + lineBreak);
const maxNumber8 = 200;
const denominator = 3;
for (let i = 100; i <= maxNumber8; i++) {
    if (i % denominator !== 0) continue;
    
    if (i+denominator < maxNumber8) {
        document.write(i + ', ')
    } else {
        document.write(i)
    };
};


/* Дано натуральне число. Знайти та вивести на сторінку всі його дільники. */
/* Визначити кількість його парних дільників. */
/* Знайти суму його парних дільників. */
document.write(lineBreak + lineBreak + '<strong>TASK 9: Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</strong>' + lineBreak);
document.write('<label>Enter any natural number, please <input id="inputNumber"></label> <button type = "button" id="button">Done!</button>' + lineBreak);
const inputNumber = document.getElementById('inputNumber');

document.write('<span>Answer: </span>');
document.write('<span id="answerAllDenominators"></span>');

document.getElementById('button').addEventListener('click', () => {
    document.getElementById('answerAllDenominators').innerHTML = ""
    let amountEvenDenominators = 0;
    let sumEvenDenominators = 0;

    for (let i = 1; i <= +inputNumber.value; i++) {
        if (+inputNumber.value % i !== 0) continue;
        if (i < +inputNumber.value) {
            document.getElementById('answerAllDenominators').innerHTML += i + ", "
        } else {
            document.getElementById('answerAllDenominators').innerHTML += i
        };

        if (i % 2 === 0) {
            amountEvenDenominators++
            sumEvenDenominators += i
        };
    }

    document.getElementById('answerAmountDenominators').innerHTML = amountEvenDenominators;

    document.getElementById('answerSumDenominators').innerHTML = sumEvenDenominators;
})

document.write(lineBreak + lineBreak + '<strong>TASK 10: Визначити кількість його парних дільників.</strong>' + lineBreak);
document.write('<span>Answer: </span>');
document.write('<span id="answerAmountDenominators"></span>');

document.write(lineBreak + lineBreak + '<strong>TASK 11: Знайти суму його парних дільників.</strong>' + lineBreak);
document.write('<span>Answer: </span>');
document.write('<span id="answerSumDenominators"></span>');


/* Надрукувати повну таблицю множення від 1 до 10. */
document.write(lineBreak + lineBreak + '<strong>TASK 12: Надрукувати повну таблицю множення від 1 до 10.</strong>' + lineBreak);
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' &#215; ' + j + ' = ' + i * j + lineBreak)
    };
    document.write(lineBreak);
};