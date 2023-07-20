import tagSettings from "./tagSettingsCollection.js";

export default function configureTag(element, settingsType, properties) {
    const propertiesList = Object.keys(properties).filter(key => {
        return properties[key] && tagSettings[`${settingsType}_${key}`];
    });
    
    if (propertiesList.length) {
        propertiesList.forEach(property => {
            tagSettings[`${settingsType}_${property}`].call(element, properties[property]);
        });
    };
};