function funcSum() {
    let result = 0;

    return (summand) => {
        result += summand;
        return result;
    };
};

const sum = funcSum();

console.log(sum(3)); 
console.log(sum(5));
console.log(sum(20));