const express = require("express");
const app = express();
const port = 5000;

const readFile = require('./utils/readFile.js');
const { getProductById, getFilteredData} = require('./utils/filters.js')

const url = './model/data.json';

app.get("/products/", (req, res) => {
    readFile(url, (products) => {
        const filters = req.query;

        const filteredProducts = getFilteredData(products, filters);

        if (!filteredProducts.length) {
            res.status(500).send('Products by these criteria not found')
        } else {
            res.status(200).json(filteredProducts);
        };
    });
});


app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    
    if (!productId) {
      return res.status(500).send('Product id not found');
    }
  
    readFile(url, (products) => {
      const product = getProductById(productId, products);
  
      if (!product) {
        return res.status(500).send('Product by this ID not found');
      }
  
      res.status(200).json(product);
    });
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});