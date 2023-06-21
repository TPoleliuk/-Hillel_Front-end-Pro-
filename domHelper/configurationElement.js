import TagSettings from "./tagSettingsCollection.js";

export default function configureTag(element, settingsType, properties) {
    const propertiesList = Object.keys(properties).filter(key => {
        return properties[key] && TagSettings[`${settingsType}_${key}`];
    });
    
    if (propertiesList.length) {
        propertiesList.forEach(property => {
            TagSettings[`${settingsType}_${property}`].call(element, properties[property]);
        });
    };
};