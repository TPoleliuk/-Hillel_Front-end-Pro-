window.onload = function() {
    const body = document.querySelector('body');

    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        fragment.prepend(createTable(10, 10))
        body.prepend(fragment);
    }, 2000);
};


//-------------------------------------------------------------------

//коллекція функцій при роботі з елементами тегу
const settingProperties = {
    add_classList(classList) {
        this.classList.add(classList);
    },

    add_innerHTML(innerHTML) {
        this.innerHTML = innerHTML;
    },

    add_attributes(attributes) {
        const attributesList = Object.keys(attributes);

        //якщо об'єкт з атрибутами не пустий
        if (attributesList.length) {
            attributesList.forEach(attribute => {
                this.setAttribute(attribute, attributes[attribute]);
            });
        };
    },
};

//-------------------------------------------------------------------

//функція-декоратор під різні теги
function createElement(nameTag) {
    return function(tagInfo) {
        const newElement = document.createElement(nameTag);

        if (tagInfo) {
            //знаходимо список ключів, value яких --> true
            const settingsList = Object.keys(tagInfo).filter(key => tagInfo[key]);

            if (settingsList.length) {
                settingsList.forEach(setting => {
                    //для кожного ключа викликаємо за наявності відповідну функцію з колекції
                    if (settingProperties[`add_${setting}`]) {
                        settingProperties[`add_${setting}`].call(newElement, tagInfo[setting]);
                    }
                });
            };
        };

        return newElement;
    };
};

const newTable = createElement('table');
const newRow = createElement('tr');
const newCell = createElement('td');

//-------------------------------------------------------------------

function createTable(numberRow, numberColumn) {
    const table = newTable();
    let count = 1;

    for(let i = 1; i <= numberRow; i++) {
        table.append(createRow(numberColumn, count));
        count += numberColumn;
    };

    return table;
};

function createRow(numberCell, cellInnerHTML) {
    const row = newRow();

    for (let i = 1; i <= numberCell; i++) {
        const cell = newCell({innerHTML: cellInnerHTML++})
        row.append(cell);
    };

    return row;
};