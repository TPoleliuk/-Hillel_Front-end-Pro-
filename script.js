window.onload = function() {
    const slider = document.querySelector('.slider-range');
    const numberInput = document.querySelector('.input-number');
    const rangeDiagram = document.querySelector('.range-diagram');
    const commissionDiagram = document.querySelector('.commission-diagram');
    const resultTags = [...document.querySelector('.results').children]
    const commissionValue = {
        '2%': {from: 0, to: 19},
        '4%': {from: 20, to: 49},
        '6%': {from: 50, to: 74},
        '8%': {from: 75, to: 100},
    }

    slider.addEventListener("input", onRangeInputHandler);
    numberInput.addEventListener("input", onNumberInputHandler);

    function onRangeInputHandler() {
        numberInput.value = this.value;
        rangeDiagram.style.height = `${this.value}px`;
        commissionDiagram.style.height = `${calculateCommission(commissionValue, this.value)}px`
        showResult(resultTags, rangeDiagram.style.height, commissionDiagram.style.height);
    };

    function onNumberInputHandler() {
        let value = this.value;

        if(!this.checkValidity()) {
            value = 0;
        };

        slider.value = value;
        rangeDiagram.style.height = `${value}px`;
        commissionDiagram.style.height = `${calculateCommission(commissionValue, value)}px`;
        showResult(resultTags, rangeDiagram.style.height, commissionDiagram.style.height);
    };

    function calculateCommission(commissionObj, inputValue) {
        for(let key in commissionObj) {
            if (inputValue >= commissionObj[key].from && inputValue <= commissionObj[key].to) {
                return toCoef(parseInt(key)) * inputValue;
            };
        };
    };

    function toCoef(persantage) {
        return persantage / 100;
    }

    function showResult(tags, ...arg) {
        tags[0].innerHTML = `Range value: ${arg[0]}`;
        tags[1].innerHTML = `Commission value: ${arg[1]}`;
        tags[2].innerHTML = `Total: ${parseInt(arg[0]) + parseInt(arg[1])}px`;
    }
};

