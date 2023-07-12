import saveInputValueToLS from './savingValueToLS.js';
import createChoiceList from '../components/choiceList.js';
import Modal from '../components/modal.js';

const buttonActions = {
    count(target) {
        const input = target.closest('.wrap-block').querySelector('input[type="number"]');
        incrementInputValue(input);
    },

    clear() {
        const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];
        inputs.map(input => clearInputValue(input));
    },

    set() {
        const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];
        const modalWindow = new Modal(createChoiceList(inputs), setInputValue);

        console.log(modalWindow)
        modalWindow.open()
    },
};

export default buttonActions;

function clearInputValue(input) {
    input.value = '';
    saveInputValueToLS(input);
};

function incrementInputValue(input) {
    input.value++;
    saveInputValueToLS(input);
};

function setInputValue() {
    const checkboxCheckedLists = [...document.querySelectorAll('.checkbox-item input[type="checkbox"]:checked')];
    const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];
    const inputForNewValue = document.querySelector('.modal-content input[type="number"]');
    
    checkboxCheckedLists.forEach(checkbox => {
        const inputLists = inputs.filter(input => input.dataset.id === checkbox.id);
        inputLists.forEach(input => {
            input.value = inputForNewValue.value;
            saveInputValueToLS(input);
        });
    });
};