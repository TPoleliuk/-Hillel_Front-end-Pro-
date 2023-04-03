const currentString = 'abcdefghijklmnopqdfsdfrstuvwxyz0123456789';
console.log(currentString);

function generateRandomNumber(minOfRange, maxOfRange) {
    return Math.round(Math.random() * (maxOfRange - minOfRange + 1) + minOfRange - 0.5); 
};

function generateKey(length, characters) {
    let min = 0;                                        
    let max = characters.length - 1;                    
    let newString = '';

    for(let i = 0; i < length; i++) {
        newString += characters[generateRandomNumber(min, max)]; 
    };

    return newString;                   
};

const key = generateKey(22, currentString);            
console.log(key);

/*АБО якщо однією функцією:
function generateKey(length, characters) { 
    let min = 0;                                        
    let max = characters.length - 1;       
    let newString = '';

    for(let i = 0; i < length; i++) {
        newString += characters[Math.round(Math.random() * (max - min + 1) + min - 0.5)];
    };

    return newString;                 
};
*/