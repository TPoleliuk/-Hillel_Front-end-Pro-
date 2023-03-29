let lengthOfArr = prompt("Оберіть довжину масиву."); // залишаю в string, щоб залишити право відміни в першому модальному вікні (виявити null);

if (lengthOfArr !== null) {

    while (!(+lengthOfArr) || (+lengthOfArr) < 0) {     // перевірка, що це НЕ пустий рядок, НЕ NAN, і > 0;
        lengthOfArr = prompt("Введено некорректне значення");
    }
    const A = new Array (+lengthOfArr);
    console.log('Length of Array: ' + lengthOfArr);

    let minAllow = prompt(`Введіть мінімально допустиме значення в масиві.`); // залишаю в string, щоб НЕ завадити введенню значення 0;

    while (minAllow === null || minAllow.trim() === "" || isNaN(minAllow)) {
        if (minAllow === null) {
            minAllow = prompt(`Масив потрібно наповнити. Введіть мінімально допустиме значення.`);
        } else {
            minAllow = prompt(`Значення некоректне, спробуйте ще раз.`);
        };
    };
    minAllow = +minAllow;

    let maxAllow = prompt(`Введіть максимально допустиме значення в масиві.`); // залишаю в string, щоб НЕ завадити введенню значення 0;
    
    while (maxAllow === null || maxAllow.trim() === "" || isNaN(maxAllow)) {
        if (maxAllow === null) {
            maxAllow = prompt(`Масив потрібно наповнити. Введіть мінімально допустиме значення.`);
        } else {
            maxAllow = prompt(`Значення некоректне, спробуйте ще раз.`);
        };
    };
    maxAllow = +maxAllow;

    if(maxAllow < minAllow) {      // міняю місцями граничні значення, якщо юзер випадково їх переплутав при введенні;
        minAllow = maxAllow + minAllow;
        maxAllow = minAllow - maxAllow;
        minAllow = minAllow - maxAllow;
    }
    console.log('minAllow: ' + minAllow + ', minAllow: ' + maxAllow);

    for (let i = 0; i < A.length; i++) {
        A[i] = Math.round(Math.random() * (maxAllow - minAllow + 1) + minAllow - 0.5); 
    };

    console.log(A);

    let min = A[0]; 
    let indexMin = 0;
    let max = A[0];
    let indexMax = 0;
    let B = [];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i];
            indexMin = i;
        };
        if (A[i] > max) {
            max = A[i];
            indexMax = i;
        };
    }
    console.log('min (index): ' + min + ' (' + indexMin + '), max (index): ' + max + ' (' + indexMax + ')');

    if (indexMin > indexMax) {
        for (let i = indexMax; i <= indexMin; i++) {
            /* "Елементи масиву між min - max записати масив B" - зрозуміла як "включно з ними".
            Якщо треба без, то for (let i = indexMax + 1; i < indexMin; i++)*/
            B[B.length] = A[i];
        }
    } else {
        for (let i = indexMin; i <= indexMax; i++) {
            B[B.length] = A[i];
        }
    }

    console.log(B);
}

