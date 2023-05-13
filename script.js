function* getPartsOfWord (string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        let symbol = yield newString += string[i];

        if (symbol === undefined) continue;
        
        newString += string[++i];
        yield newString + symbol;
    }; 

    return newString;
};
 
const iterator = getPartsOfWord("hello");

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next('!'));
console.log(iterator.next());
console.log(iterator.next('@'));
console.log(iterator.next());

