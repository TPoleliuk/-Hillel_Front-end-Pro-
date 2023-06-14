window.onload = function() {
    const body = document.querySelector('.body');

    setTimeout(() => {
        const fragment = document.createDocumentFragment();

        const table = appendNewElement(fragment, 'table', 'table');
        let count = 1;

        for(let i = 1; i <= 10; i++) {
            const newRow = appendNewElement(table, 'tr');

            for(let j = 1; j <= 10; j++) {
                appendNewElement(newRow, 'td', null, count++);
            };
        };

        body.prepend(fragment);

    }, 2000);
};

function appendNewElement (parentEl, childEl, classListEl, innerHtml) {
    const newChildEl = document.createElement(childEl);
    if(classListEl) {
        newChildEl.classList.add(classListEl);
    };
    if(innerHtml) {
        newChildEl.innerHTML = innerHtml;
    };
    parentEl.append(newChildEl);

    return newChildEl;
};
