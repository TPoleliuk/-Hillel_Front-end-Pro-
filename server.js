const express = require('express');
const app = express();
const port = 3000;

const products = require('./products');

app.get('/', (req, res) => {
    res.send('Hi! This is homepage!');
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get("/:universalURL", (req, res) => {
    res.send("This URL NOT FOUND");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});