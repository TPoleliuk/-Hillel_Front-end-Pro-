// запит необхідних даних;
const row = +prompt('Введіть необхідну кількість рядків');
const column = +prompt('Введіть необхідну кількість стовпців');
const min = +prompt('Введіть мінімальне число діапазона');
const max = +prompt('Введіть максимальне число діапазона');


// cтворення двовимірного масиву та масиву з сумами значень по стовпцям;
const Arr = new Array (row);
const Result = [];

for (let i = 0; i < Arr.length; i++) {
    Arr[i] = new Array (column);

    for (let j = 0; j < column; j++) {
        if (i === 0) {
            Result[j] = 0;
        };
        Arr[i][j] = Math.round(Math.random() * (max - min + 1) + min - 0.5); 
        
        Result[j] += Arr[i][j];
    };
};

// знаходження стовпця з мінімальною та максимальною сумою значень;
let maxSum = Result[0];
let maxSumIndex = 0;
let minSum = Result[0];
let minSumIndex = 0;

for (let i = 1; i < Result.length; i++) {
    if (Result[i] > maxSum) {
        maxSum = Result[i];
        maxSumIndex = i;
    };

    if (Result[i] < minSum) {
        minSum = Result[i];
        minSumIndex = i;
    };
};

console.log('Кількість рядків:' + row);
console.log('Кількість стовпців:' + column);

console.log(Arr);
console.log(Result);
console.log('В стовпці з індексом ' + '[' + minSumIndex + ']' + ' найменша сума елементів: ' + minSum);
console.log('В стовпці з індексом ' + '[' + maxSumIndex + ']' + ' найбільша сума елементів: ' + maxSum);
