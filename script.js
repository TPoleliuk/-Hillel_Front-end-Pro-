const arr = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8, [4.2, 4.3, 4.4]]]];

// Варіант 1 - змінна під модиф. масив формується за межами ф-ї (інакше елементи 2-ї та більше вкладеності не "пушаться" в основний модиф. масив);

const modifiedArray = [];

function flat_V1(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (Array.isArray(mass[i])) {
            flat_V1(mass[i]);
        } else {
            modifiedArray.push(mass[i]);
        };
    };
    return modifiedArray;
};

console.log(flat_V1(arr));

//-----------------------------------------------------------------

// Варіант 2 - змінна під модиф. масив формується всередині ф-ї, але рекурсивну ф-ю оголошуємо як IIFE, щоб алгоритм не виходив за її межі;

function flat_V2(mass) {
    const modifiedArray = [];
    
    (function flat(mass) {
        for (let i = 0; i < mass.length; i++) {
            if (Array.isArray(mass[i])) {
                flat(mass[i]);
            } else {
                modifiedArray.push(mass[i]);
            };
        };
    })(mass);
    
    return modifiedArray;
};

console.log(flat_V2(arr));

//-----------------------------------------------------------------

// Варіант 3 - змінна під модиф. масив формується всередині ф-ї, але елементи 2-ї та більше вкладеності "пушимо" за сприянням методу concat;

function flat_V3(mass) {
    let modifiedArray = [];
    
    for (let i = 0; i < mass.length; i++) {
        if (Array.isArray(mass[i])) {
            modifiedArray = modifiedArray.concat(flat_V3(mass[i]));
        } else {
            modifiedArray.push(mass[i]);
        };
    };
    
    return modifiedArray;
};

console.log(flat_V3(arr));