import saveInputValueToLS from "./components/savingValueToLS.js";
import buttonActions from "./components/buttonActions.js";

window.onload = function() {
    const body = document.querySelector('body');
    const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];

    function getInputValueFromLS(input) {
        const { id } = input.dataset;
        const value = localStorage.getItem(id) ? localStorage.getItem(id) : '';

        return value;
    };

    inputs.forEach(input => input.value = getInputValueFromLS(input));

    function onClickHandler(event) {
        const { action } = event.target.dataset;

        if (action && buttonActions[action]) {
            buttonActions[action](event.target);
        };
    };

    function onInputHandler(event) {
        const input = event.target;
        saveInputValueToLS(input);
    };

    body.addEventListener("click", onClickHandler);
    body.addEventListener("input", onInputHandler);
};