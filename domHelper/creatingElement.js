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

export const newInput = createElement('input');
export const newLabel = createElement('label');
export const newDiv = createElement('div');