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

export const newDiv = createElement('div');