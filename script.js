import { strategies } from './components/tableStrategies.js';

window.onload = function() {
    const body = document.querySelector('body');
    
    body.addEventListener("click", findTableStrategy)
    
    function findTableStrategy(event) {
        const table = event.target.closest("tbody[data-variant-strategy]");

        if (table && strategies[table.dataset.variantStrategy]) {
            strategies[table.dataset.variantStrategy](event.target);
        };
    };
};

