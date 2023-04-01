// запит необхідних даних;
const row = +prompt('Введіть необхідну кількість рядків');
const column = +prompt('Введіть необхідну кількість стовпців');
const min = +prompt('Введіть мінімальне число діапазона');
const max = +prompt('Введіть максимальне число діапазона');


// cтворення двовимірного масиву;
const Arr = new Array (row);
let maxSum;
let maxSumIndex;
let minSum;
let minSumIndex;

for (let i = 0; i < Arr.length; i++) {
    Arr[i] = new Array (column);

    for (let j = 0; j < column; j++) {
        Arr[i][j] = Math.round(Math.random() * (max - min + 1) + min - 0.5);
    };
};

console.log('Кількість рядків:' + row);
console.log('Кількість стовпців:' + column);
console.log(Arr);

// пошук стовпця з найбільшою та найменшою сумою елементів;
for (let i = 0; i < column; i++) {
    let sum = 0;

    for (j = 0; j < Arr.length; j++) {
        sum += Arr[j][i];
    }

    console.log('Cума елементів стовпця з індексом ' + '[' + i + "]: " + sum)

    if (i === 0) {
        maxSum =  sum;
        maxSumIndex = i;
        minSum = sum;
        minSumIndex = i;
        continue
    };

    if (sum > maxSum) {
        maxSum = sum;
        maxSumIndex = i;
    };

    if (sum < minSum) {
        minSum = sum;
        minSumIndex = i;
    };
}

console.log('В стовпці з індексом ' + '[' + minSumIndex + ']' + ' найменша сума елементів: ' + minSum);
console.log('В стовпці з індексом ' + '[' + maxSumIndex + ']' + ' найбільша сума елементів: ' + maxSum);