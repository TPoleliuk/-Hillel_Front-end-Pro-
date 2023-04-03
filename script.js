const Arr = [1, 5, 5, 7, 9, 7, 3, 5, 1];

console.log(Arr);

function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        /*1. через цикл, бо якщо таких item декілька в масиві, то потрібно, щоб були видалені всі;
          2. відлік у зворотньому напрямку, бо при видаленні елементу зміщуються індекси,
          і якщо потрібні нам items стояли підряд, 2-й залишиться невидаленим.*/

        if (array[i] === item) {
            array.splice(i, 1);
        };
    };
    return array;
};

console.log(removeElement(Arr, 5));