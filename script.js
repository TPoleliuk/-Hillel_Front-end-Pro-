const min = 3;
const max = 25;

const A = new Array(13);

console.log(A);

for (i = 0; i < A.length; i++) {
    A[i] = Math.round(Math.random() * (max - min + 1) + min - 0.5); 
    /* вичитала на javascript.info, що ця формула є коректнішою, бо вирівнює ймовірність отримання граничних
    чисел порівняно з іншими числами діапазону */
};

console.log(A);

for (i = 0; i < A.length; i++) {
    if (i % 2 === 1) {
        A[i] = 0;
    }
};

console.log(A);

