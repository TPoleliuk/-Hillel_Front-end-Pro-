let lengthOfArr = prompt("Оберіть довжину масиву."); // залишаю в string, щоб залишити право відміни в першому модальному вікні (виявити null);

if (lengthOfArr !== null) {

    while (!(+lengthOfArr) || (+lengthOfArr) < 0) {     // перевірка, що це НЕ пустий рядок, НЕ NAN, і > 0;
        lengthOfArr = prompt("Введено некорректне значення, спробуйте ще раз.");
    }
    const Arr = new Array (+lengthOfArr);

    alert(`Створено масив довжиною - ${lengthOfArr}. Давайте введемо їхні значення.`);

    for (let i = 0; i < Arr.length; i++) {
        let itemOfArr = prompt(`Введіть значення ${i+1}-го елементу (число >= 0).`); // залишаю в string, щоб НЕ завадити введенню значення 0;

        while (itemOfArr === null || itemOfArr.trim() === "" || isNaN(itemOfArr) || (+itemOfArr) < 0) {

            if (itemOfArr === null) {
                itemOfArr = prompt(`Наповнення масиву потрібно завершити. Введіть, будь ласка, значення ${i+1}-го елементу (число >= 0).`);
            } else {
                itemOfArr = prompt(`Значення некоректне, спробуйте, будь ласка, ще раз ввести значення ${i+1}-го елементу (число >= 0).`);
            };

        };

        Arr[i] = +itemOfArr;
    }
    console.log(Arr);
}

