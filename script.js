obj = {
    result: '',
    copy: function(buffer) {
        this[buffer] = this.result;
        return this;
    },
    clear: function() {
        this.result = 0;
        return this;
    },
    doFunction: function(func, x, y) {
        this.result = func(x, y)
        return this;
    },
    target: function(property) {
        this.doFunction = (func, x, y) => {
            this[property] = func(x, y);
            return this;
        };
        this.clear = () => {
            this[property] = 0;
            return this;
        };
        return this;
    },
};

function sum(x, y) {
    return x + y;
};

function mul(x, y) {
    return x * y;
};


obj.doFunction(sum, 2, 3).copy('nom_name').clear().target('summary').doFunction(sum, 2, 4)
console.log(obj.result);
console.log(obj.nom_name);
console.log(obj.summary);
