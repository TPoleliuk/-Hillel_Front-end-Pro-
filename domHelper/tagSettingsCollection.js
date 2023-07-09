const TagSettings = {
    add_classList(classList) {
        this.classList.add(classList);
    },

    add_innerHTML(innerHTML) {
        this.innerHTML += innerHTML;
    },

    add_attributes(attributes) {
        const attributesList = Object.keys(attributes);

        if (attributesList.length) {
            attributesList.forEach(attribute => {
                this.setAttribute(attribute, attributes[attribute]);
            });
        };
    },
};

export default TagSettings;