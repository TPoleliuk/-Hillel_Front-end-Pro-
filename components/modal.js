import { newDiv } from '../domHelper/creatingElement.js';

export class Modal {
    #modal;
    #template = `
        <div class="modal-content">
            <h4>Choose block(-s) to set value:</h4>
            <div class="choiceList"></div>
            <h4>Write value:</h4>
            <label>
                <input type="number">
            </label>
            <div class="wrap-button">
                <button data-modal-action="ok">OK</button>
                <button data-modal-action="cancel">Cancel</button>
            </div>
            
        </div>
    `;

    #modalButtonActions;

    constructor(choiceList, cb) {
        this.#modal = newDiv({classList: 'modal-window', innerHTML: this.#template});
        this.#modal.querySelector('div.choiceList').replaceWith(choiceList);
        this.#modalButtonActions = {
            ok: () => {
                cb();
                this.close();
            },
            cancel: () => {
                this.close();
            },
        };

        document.body.prepend(this.#modal);
    };

    open() {
        this.#modal.style.display = 'flex';
        this.#modal.addEventListener("click", (event) => {
            const { modalAction } = event.target.dataset;
            if (modalAction && this.#modalButtonActions[modalAction]) {
                this.#modalButtonActions[modalAction]();
            }
        });
    };

    close() {
        this.#modal.remove();
    };
};

export default Modal;