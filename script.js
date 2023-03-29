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
    console.log('minAllow: ' + minAllow + ', maxAllow: ' + maxAllow);

    for (let i = 0; i < A.length; i++) {
        A[i] = Math.round(Math.random() * (maxAllow - minAllow + 1) + minAllow - 0.5); 
    };

    console.log(A);

    for (let i = 0; i < A.length / 2; i++) {
		   const rightItem = A[A.length-i-1];
           A[A.length-i-1] = A[i];
		   A[i] = rightItem;
	};
 
    console.log(A);
}