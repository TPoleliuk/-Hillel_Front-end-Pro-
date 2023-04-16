function assignObjects() {
    const isFlag = typeof arguments[arguments.length - 1] === 'boolean';
    const flagValue = isFlag ? arguments[arguments.length - 1] : false;
    const indexOfLastObj = isFlag ? arguments.length - 2 : arguments.length - 1;
    
    const newObj = {};
    for (let i = 0; i <= indexOfLastObj; i++) {
        for (key in arguments[i]) {
            if (flagValue && key in newObj) continue;
            newObj[key] = arguments[i][key];
        };
    };

    return newObj;
};

console.log(assignObjects({a: 12, b: 3}, {a: 13, h: 0}, {a: 100, b: 200, z: 300}, true));