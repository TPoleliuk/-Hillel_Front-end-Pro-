import { newTextArea, newButton } from '../domHelper/creatingElement.js';
import createWrap from '../domHelper/creatingWrap.js';

export const strategies = {
    flexible(target) {

        switch (target.tagName) {
            case 'TD':
                setEditWrap(target);
                break;
            case 'BUTTON':
                doButtonFunction(target);
                break;
        };

    },

    mixed(target) {
        const table = target.closest("tbody");

        switch (target.tagName) {
            case 'TD':
                if(table.querySelector('.edit-wrap')) {
                    buttonActions.cancel(table.querySelector('.edit-wrap'));
                }
                setEditWrap(target);
                break;
            case 'BUTTON':
                doButtonFunction(target);
                break;
        };
    },

    strong(target) {
        const table = target.closest("tbody");

        switch (target.tagName) {
            case 'TD':
                if(!table.querySelector('.edit-wrap')) {
                    setEditWrap(target);
                };
                break;
            case 'BUTTON':
                doButtonFunction(target);
                break;
        };
    },
};

function createEditWrap(textAreaInnerHTML) {
    const textArea = newTextArea({innerHTML: `${textAreaInnerHTML}`, attributes: {rows: 1}});
    const newBtnWrap = createWrap({classList: 'btn-wrap'});

    const btnWrap = newBtnWrap( 
        newButton({innerHTML: 'Save', attributes: {['data-action']: 'save'}}),
        newButton({innerHTML: 'Cancel', attributes: {['data-action']: 'cancel'}})
        );

    const newEditWrap = createWrap({classList: 'edit-wrap'});

    return newEditWrap(textArea, btnWrap);
};

function setEditWrap(cell) {
    const text = cell.innerHTML;
    cell.innerHTML = '';
    cell.append(createEditWrap(text));
};

function doButtonFunction(button) {
    const {action} = button.dataset;

    if(action && buttonActions[action]) {
        buttonActions[action](button);
    };
};

const buttonActions = {
    save(target) {
        const cell = target.closest('td');
        const newText = cell.querySelector('textarea').value;
        cell.innerHTML = newText;
    },

    cancel(target) {
        const cell = target.closest('td');
        const oldText = cell.querySelector('textarea').innerHTML;
        cell.innerHTML = oldText;
    },
};