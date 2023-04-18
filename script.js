let ladder = {
    step: 0,
    up: function () {
        this.step++;
        console.log(this)
        return this;
    },
    down: function () {
        this.step--;
        console.log(this)
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        console.log(this)
        return this;
    },
};

ladder.up().up().down().showStep(); // 1