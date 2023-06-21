import configureTag from './configurationElement.js';

function createElement(nameTag) {
    return function(tagInfo) {
        const newElement = document.createElement(nameTag);

        if (tagInfo) {
            configureTag(newElement, 'add', tagInfo);
        };

        return newElement;
    };
};

export const newButton = createElement('button');
export const newTextArea = createElement('textarea');
export const newDiv = createElement('div');