import saveInputValueToLS from './savingValueToLS.js';
import { newInput, newLabel } from '../domHelper/creatingElement.js';
import createWrap from '../domHelper/creatingWrap.js';


const buttonActions = {
    clear() {
        const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];
        inputs.map(input => clearInputValue(input));
    },

    count(target) {
        const input = target.closest('.wrap-block').querySelector('input[type="number"]');
        incrementInputValue(input);
    },

    set() {
        createCheckboxLists();
        openModalWindow();
    },

    ok() {
        setInputValue();
        closeModalWindow();
    },

    cancel() {
        closeModalWindow();
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

function openModalWindow() {
    const modalWindow = document.querySelector('.modal-window');

    modalWindow.style.display = 'flex';
};

function closeModalWindow() {
    const modalWindow = document.querySelector('.modal-window');
    const checkboxLists = document.querySelector('.checkboxLists');
    const inputForNewValue = document.querySelector('.modal-content input[type="number"]');

    modalWindow.style.display = 'none';
    checkboxLists.innerHTML = '';
    inputForNewValue.value = '';
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

function createCheckboxLists() {
    const checkboxLists = document.querySelector('.checkboxLists');
    const inputs = [...document.querySelectorAll('.wrap-block input[type="number"]')];

    inputs.forEach(input => {
        checkboxLists.append(createCheckboxDiv(input));
    });
};

function createCheckboxDiv(input) {
    const { id } = input.dataset;
    const checkbox = newInput({attributes: {'type': 'checkbox', 'id': id}});
    const label = newLabel({attributes: {'for': id}, 'innerHTML': id});
    const checkboxDiv = createWrap({classList: 'checkbox-item'});

    return checkboxDiv(checkbox, label);
};