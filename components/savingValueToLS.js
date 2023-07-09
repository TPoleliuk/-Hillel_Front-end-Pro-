export default function saveInputValueToLS(input) {
    const { id } = input.dataset;

    if (id) {
        localStorage.setItem(id, input.value);
    };
};