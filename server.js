const express = require("express");
const fs = require("fs");
const app = express();
const port = 5000;

// Створити запит, який поверне всі товари відповідний критерію:

// есть на складе\нету\все (query)
// підходить ціновому діапазону від - до (query)
// має бути можливість комбінувати пункт 1 - 2
// отримати всі товари в назвах яких присуджує параметр productName(query) (окремий запит)
// отримати товар за конкретним id - отримаємо лише 1 товар (окремий запит) (params)

const readFile = (cb) => {
    fs.readFile('./model/data.json', "utf-8", (error, data) => {
        const objData = JSON.parse(data);
        cb(objData);
    });
};

const filters = {
    filter_stock: (criteriaValue, item) => criteriaValue == item.productStock.toString(),
    minPrice: (criteriaValue, item) => parseInt(item.productPrice) >= parseInt(criteriaValue),
    maxPrice: (criteriaValue, item) => parseInt(item.productPrice) <= parseInt(criteriaValue),
    productName: (criteriaValue, item) => item.productName.toString().includes(criteriaValue),
}

function matcher({ key, criteriaValue, item }) {
    const filter = filters[`filter_${key}`];

    if (typeof filter !== 'function') {
        return true;
    };

    if (criteriaValue === 'undefined') {
        return false;
    };

    return filter(criteriaValue, item);
}

function getFilteredData(data, criteria) {
    const criteriaKeys = Object.keys(criteria);

    if(!criteriaKeys.length) {
        return data;
    };

    const filteredData = data.filter((item) => {
        return criteriaKeys.every((key) => {
            return matcher({key, criteriaValue: criteria[key], item});
        });
    });

    return filteredData;
};


app.get("/products/", (req, res) => {
    readFile((products) => {
        const filters = req.query;

        const filteredProducts = getFilteredData(products, filters);

        if (!filteredProducts.length) {
            res.status(500).send('Products by these criteria not found')
        } else {
            res.status(200).json(filteredProducts);
        };
    });
});

function findProductById (id, products) {
    return products.find((product) => product.productId == id)
};

app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    
    if (!productId) {
      return res.status(500).send('Product id not found');
    }
  
    readFile((products) => {
      const product = findProductById(productId, products);
  
      if (!product) {
        return res.status(500).send('Product by this ID not found');
      }
  
      res.status(200).json(product);
    });
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});