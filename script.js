
function SuperMath() {

    this.check = function(obj, verification) {
        verification = (verification === undefined)
            ? confirm(`Хочете здійснити дію ${obj.znak} з Х: ${obj.X} та Y: ${obj.Y}`)
            : verification;
        
        if(verification) {
            this.operation(obj.X, obj.Y, obj.znak)
        } else {
            this.input();
            this.check(obj, true);
        }
    }

    this.input = function () {
        obj.X = +prompt('Введите число X:');
        obj.Y = +prompt('Введите число Y:');
        obj.znak = prompt('Введіть математичну дію (+, -, /, * або %)');
     }
};

SuperMath.prototype.operation = function(a, b, znak) {
    switch(znak) {
        case '+':
            alert(a + b);
            break;
        case '-':
            alert(a + b);
            break;
        case '/':
            if (b == 0) {
                alert('На 0 ділити не можна.');
                b =  +prompt('Введіть нове значення Y:');
                alert(a / b)
            } else {
                alert(a / b)
            };
            break;
        case '*':
            alert(a * b);
            break;
        case '%':
            if (b == 0) {
                alert('На 0 ділити не можна, а отже і знайти залишок з ділення.');
                b =  +prompt('Введіть нове значення Y:');
                alert(a % b)
            } else {a
                alert(a % b)
            };
            break;
        };
};

const obj = {
    X: 12,
    Y: 3,
    znak: '+',
};

const functionConstructor = new SuperMath();

functionConstructor.check(obj);