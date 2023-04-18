//Задача 1
const obj = {
    string: 'string',
    number: 100,
    boolean: true,
    array: [1, 2, 3, 4],
    renderObject: renderObject,
};

function renderObject() {
    for(key in this) {
        if (key === 'renderObject') continue;
        document.write(key + ": " + this[key] + '<br>');
    };
};

obj.renderObject();

//Задача 2
data = {
    addRecord: function(){
        for(i = 0; i < arguments.length; i++) {
            for(key in arguments[i]) {
                this[key] = arguments[i][key];
            };
        };
    },
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x) // 50
console.log(data.y) // 20
console.log(data.z) // 30
console.log(data.p) // 600
console.log(data.str) // 'hello'
