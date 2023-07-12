export default function saveInputValueToLS(element) {
    const { id } = element.dataset;

    if (id) {
        localStorage.setItem(id, element.value);
    };
};