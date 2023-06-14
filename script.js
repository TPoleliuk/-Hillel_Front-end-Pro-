window.onload = function() {
    const table = document.querySelector('.table');

    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        let count = 1;

        for(let i = 1; i <= 10; i++) {
            const newRow = table.insertRow(-1);
            for(let j = 1; j <= 10; j++) {
                const newCell = document.createElement('td');
                newCell.innerHTML = count++;
                newRow.append(newCell);
            };
        };

        table.append(fragment);

    }, 2000);
};

