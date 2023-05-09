// fetch data from server
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

function createImageDiv(image) {
    return `
        <div class="image-wrapper">
            <img src="${image}" alt="image" class="image"/>
        </div>
    `;
};

function getPriceWithDiscount(price, discount) {
    const percent100 = 100;
    const priceWithDiscountInCent = toCent(price) * (percent100 - discount) / percent100;
    return toFloat(priceWithDiscountInCent).toFixed(2);
};

function toCent(price) {
    const multiplier = 100;
    return price * multiplier;
};

function toFloat(priceInCent) {
    const divisor = 100;
    return priceInCent / divisor;
};

function createProductInfo(title, price, discount, description, rating) {
    const priceWithDiscount = getPriceWithDiscount(price, discount);

    return `
        <div class="title-rating">
            <h4>${title}</h4>
            <div class="rating">
                <img src="./tamplate/star.svg" alt="star">
                <p>${rating}</p>
            </div>
        </div>
        <div class="price">
            $${price}, price with discount $${priceWithDiscount}
        </div>
        <div class="description">${description}</div>
    `
};

function createProductItem(product) {
    return `
        <section class="product-item">
            ${createImageDiv(product.thumbnail)}
            <div class="content-wrapper">
                ${createProductInfo(product.title, product.price, product.discountPercentage, product.description, product.rating)}
                <div class="actions">
                    <button id="cart"class="button green-solid cart">
                        Add to Cart
                    </button>
                    <button class="button more">
                        More Details
                    </button>
                </div>
            </div>
        </section> 
    `;
};

function createProductsTamplate(products) {
    return `
        <div class="container">   
            <article class="products">
                ${products.map((product) => 
                    createProductItem(product)
                ).join("")}
            </article>
        </div>
    `;
};


//--------------------------------------------------Homework 32------------------------------------------------------

//формую html-розмітку під фільтр "категорії товарів" (попередньо витягую список таких категорій)
function createCategoriesTamplate(products) {
    const categoriesList = Array.from(new Set(products.map((product) => product.category)));

    return `
        <div class="wrap-categories">
            <p class="filter-name">Product category:</p>
            <div id="wrap-item-category">
                ${categoriesList.map((category) => 
                    `<div>
                        <input type="checkbox" value=${category}>
                        <label class="item-category" for=${category}>${category}</label>
                    </div>`
                ).join("")}
            </div>
        </div>
    `;
};

//формую html-розмітку під фільтр "ціна від-до" 
function createPriceTamplate() {  
    return `
        <div class="wrap-price">
            <p class="filter-name">Product price:</p>
            <label class="item-category" for="min-price">Від</label>
            <input type="number" id="min-price" value="">
            <label class="item-category" for="max-price">До</label>
            <input type="number" id="max-price" value="">
        </div>
    `;
};

//формую html-розмітку фільтрів
function getFiltersTamplate(products) {

    return `
        <div class="container filters"> 
            ${createCategoriesTamplate(products)}
            ${createPriceTamplate(products)}
        </div>
    `;
};


//збираю всі обрані юзером умови фільтрів в один об'єкт
function getFiltersCriteria() {
    const category = [...document.querySelectorAll('#wrap-item-category input:checked')].map(input => input.value);
    const priceMin = document.querySelector('#min-price').value;
    const priceMax = document.querySelector('#max-price').value;

    return {category, priceMin, priceMax};
};

//прописую умови фільтрації списку товарів
function filterProducts(products) {
    const {category, priceMin, priceMax} = getFiltersCriteria();

    return products.filter(product => {
        return ((!category.length || category.includes(product.category)) &&
        (!priceMin || priceMin <= product.price) &&
        (!priceMax || priceMax >= product.price))
    });  
};

//сортую по рейтингу на спад
function sortProducts(products) {
    return products.sort((a, b) => {
        return b.rating - a.rating;
    });    
};

async function application() {
    const { products = [] } = await fetchAllProducts();
    
    //створюю першочерговий темплейт сторінки
    document.getElementById("filters").innerHTML = getFiltersTamplate(products);
    document.getElementById("app").innerHTML = createProductsTamplate(sortProducts(products));

    //змінюю вміст темплейт у випадку внесення змін у інпути
    document.getElementById('filters').addEventListener('input', () => {
        const filteredProducts = filterProducts(products);
        if (!filteredProducts.length) {
            //якщо в результаті фільтрації не знайдено ні одного товару - виводжу "No products found"
            document.getElementById("app").innerHTML = "<p class='no-product'>No products found.</p>"
        } else {
            document.getElementById("app").innerHTML = createProductsTamplate(sortProducts(filteredProducts));
        };
    });
};

application();