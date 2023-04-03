const currentString = 'abcdefghijklmnopqdfsdfrstuvwxyz0123456789';
console.log(currentString);

function generateRandomNumber(minOfRange, maxOfRange) {
    return Math.round(Math.random() * (maxOfRange - minOfRange + 1) + minOfRange - 0.5); //рандомно генеруємо число в заданому діапазоні;
};

function generateKey(length, characters) {
    let arrayFromCurrentString = characters.split('');  //перетворюємо посимвольно строку в масив;
    let min = 0;                                        //мін. значення індексу в діапазоні, по якому здійснюватиметься пошук;
    let max = arrayFromCurrentString.length - 1;        //макс. -//-;
    let arrayForNewString = [];

    for(let i = 0; i < length; i++) {
        arrayForNewString[i] = arrayFromCurrentString[generateRandomNumber(min, max)]; //length разів рандомно генеруємо № індексу зі строки;
    };

    return arrayForNewString.join('');                   //формуємо з отриманого масиву строку;
};

const key = generateKey(22, currentString);             //записуємо результат роботи функції в змінну key;
console.log(key);

/*АБО якщо однією функцією:
function generateKey(length, characters) {
    let arrayFromCurrentString = characters.split('');  
    let min = 0;                                        
    let max = arrayFromCurrentString.length - 1;       
    let arrayForNewString = [];

    for(let i = 0; i < length; i++) {
        arrayForNewString[i] = arrayFromCurrentString[Math.round(Math.random() * (max - min + 1) + min - 0.5)];
    };

    return arrayForNewString.join('');                  
};
*/