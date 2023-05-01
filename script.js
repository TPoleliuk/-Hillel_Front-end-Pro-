function cachebleProcess(functionCb) {
    const cachValues = {}; 

    return (n) => {
        return cachValues[n] || (cachValues[n] = functionCb(n));
        //якщо cachValues[n] досі не існує === 'underfined' -> наступний операнд; якщо існує -> повертає значення ключа;
        //наступний операнд: повертає результат роботи Cb-функції і записує його в значення новоствореного ключа cachValues[n];
    };
};

function factorial(n) {
    if (n === 1) {            
        return n;
    };
    const result = n * factorial(n - 1);
    return result;
};

const memoFactorial = cachebleProcess(factorial);

console.log(memoFactorial(3));
console.log(memoFactorial(6));
console.log(memoFactorial(4));

/* Факторіал параметру обчислюється на основі факторіалу найближчого до нього "кешованого" параметру (виключно для ф-ї факторіалу)

function cachebleProcess() {
    const cachObject = {};

    return (n) => {

        if (cachObject[n]) {
            return cachObject[n];    //якщо факторіал даного параметру вже розраховувався - повертаємо раніше обчислене значення;
        } else {
            let closestToN = n - 1;    //якщо ні - шукаємо найближчий до нього "кешований" параметр;
            let factorialOfclosestToN = 1;   //на випадок, якщо такого параметру немає - вказуємо значення "по замовченню" (мінімальне);

            for (closestToN; closestToN >= 1; closestToN--) {
                if (cachObject[closestToN]) {
                    factorialOfclosestToN = cachObject[closestToN];  // коли знаходимо найближчий параметр - записуємо його факторіал
                    break;                                           // і виходимо з циклу
                };
            };
            return cachObject[n] = factorial(n, closestToN, factorialOfclosestToN);
        };

    };
};

function factorial(n, closestToN, factorialOfclosestToN) {
    if (n === closestToN) {            // якщо в рекурсивній функції параметр досяг свого найближчого кешованого параметру
        return factorialOfclosestToN;  // повертаємо факторіал такого параметру
    };
    const result = n * factorial(n - 1, closestToN, factorialOfclosestToN);
    return result;
};

const memoFactorial = cachebleProcess();

console.log(memoFactorial(3));
console.log(memoFactorial(6));
console.log(memoFactorial(4));
*/