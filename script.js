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

function createTitleDiv(title) {
    return `
        <div class="title">
            <h4>${title}</h4>
        </div>
    `;
};

function createPriceDiv(price, discount) {
    const priceWithDiscount = getPriceWithDiscount(price, discount);

    return `
        <div class="price">
            $${price}, price with discount $${priceWithDiscount}
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

function createDescriptionDiv(description) {
    return `
        <div class="description">${description}</div>
    `;
};

function createActionsDiv() {
    return `
        <div class="actions">
            <button id="cart"class="button green-solid cart">
                Add to Cart
            </button>
            <button class="button more">
                More Details
            </button>
        </div>
    `;
};

function createProductItem(product) {
    return `
        <section class="product-item">
            ${createImageDiv(product.thumbnail)}
            <div class="content-wrapper">
                ${createTitleDiv(product.title)}
                ${createPriceDiv(product.price, product.discountPercentage)}
                ${createDescriptionDiv(product.description)}
                ${createActionsDiv()}
            </div>
        </section> 
    `;
};

function createProductsTamplate(products) {
    return `
        <article class="products">
            ${products.map((product) => 
                createProductItem(product)
            ).join("")}
        </article>
    `;
};

// Hometask --- refactoring  ---- decomposition
async function getAllProducts() {
    const response = await fetchAllProducts();
    const products = response.products;

    document.getElementById("app").innerHTML = createProductsTamplate(products);
};

getAllProducts();

