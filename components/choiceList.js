import { newInput, newLabel, newDiv } from '../domHelper/creatingElement.js';
import createWrap from '../domHelper/creatingWrap.js';

export default function createChoiceList(options) {
    const choiceList = newDiv({classList: 'choiceList'});

    options.forEach(option => {
        choiceList.append(createCheckboxItem(option));
    });

    return choiceList;
};

function createCheckboxItem(option) {
    const { id } = option.dataset;
    const checkbox = newInput({attributes: {type: 'checkbox', id: id}});
    const label = newLabel({attributes: {for: id}, innerHTML: id});
    const checkboxItem = createWrap({classList: 'checkbox-item'});

    return checkboxItem(checkbox, label);
};