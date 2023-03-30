// запит необхідних даних;
const Arr = new Array (+prompt('Введіть необхідну кількість елементів'));
const min = +prompt('Введіть мінімальне число діапазона');
const max = +prompt('Введіть максимальне число діапазона');


// cтворення масиву та масиву з сумами значень по стовпцям;

for (let i = 0; i < Arr.length; i++) {
    Arr[i] = Math.round(Math.random() * (max - min + 1) + min - 0.5); 
};

console.log(Arr)

for (let i = 1; i < Arr.length; i += 2) {
    const temp = Arr[i]
    Arr[i] = Arr[i-1];
    Arr[i-1] = temp;
}

console.log(Arr)