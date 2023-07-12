const fs = require("fs");

const readFile = (url, cb) => {
    fs.readFile(url, "utf-8", (error, data) => {
        const objData = JSON.parse(data);
        cb(objData);
    });
};

module.exports = readFile;