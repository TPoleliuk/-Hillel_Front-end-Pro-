window.onload = function () {
    const inputs = [...document.querySelectorAll('.input-text')];
    const textArea = document.querySelector('.textarea');
    let oldCommonValue = getNewCommonValue(inputs);

    setInterval(() => {
        const newCommonValue = getNewCommonValue(inputs);

        if (oldCommonValue !== newCommonValue) {
            oldCommonValue = newCommonValue;
            textArea.value = newCommonValue;
        }
    }, 4000);
};

function getNewCommonValue (arrInputs) {
    let inputNumber = 1;

    const newCommonValue = arrInputs.reduce((commonText, inputText) => {
        if (inputNumber === arrInputs.length) {
            return commonText + `${inputNumber++}. ${inputText.value || '-'}.`
        };
        return commonText + `${inputNumber++}. ${inputText.value || '-'},\n`;
    }, '');
    
    return newCommonValue;
};