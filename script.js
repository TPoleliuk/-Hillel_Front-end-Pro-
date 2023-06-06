class Hamburger {

    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }

    static STUFFING_POTATOES = {
        price: 15,
        calories: 10,
    }

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0,
    }

    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    }

    constructor(size, stuffing) {
        this['sizeFeatures'] = size;

        // раптом людинка на дієті і хоче тільки булочку і котлетку, без додаткової начинки :)
        if (stuffing) {
            this['stuffingFeatures'] = stuffing;
        };
    }

    addTopping(topping) {
        // якщо додається перший допінг
        if (!this['toppingFeatures']) {
            this['toppingFeatures'] = [topping];
        // якщо додається 2-й і більше допінг
        } else {
            this['toppingFeatures'].push(topping);
        };
    }

    deleteTopping(topping) {
        const indexOfTopping = this.toppingFeatures.indexOf(topping);

        if (this.toppingFeatures && indexOfTopping >= 0) {
            // якщо допінга 2 і більше
            if (this.toppingFeatures.length > 1) {
                this.toppingFeatures.splice(indexOfTopping, 1); 
            // якщо видаляється останній допінг
            } else {
                delete this.toppingFeatures;
            };
        };
    }

    calculateCalories() {
        // сума калорій всього допінгу (якщо допінгу немає - 0)
        const toppingCalories = this.toppingFeatures
            ? this.toppingFeatures.reduce((total, topping) => {
                return total + topping.calories;
            }, 0)
            : 0;
        
        // калорії додаткової начинки (якщо додаткової начинки немає - 0)
        const stuffingCalories = this.stuffingFeatures
            ? this.stuffingFeatures.calories
            : 0;

        return this.sizeFeatures.calories + toppingCalories + stuffingCalories;
    }

    calculatePrice() {
        // ціна всього допінгу (якщо допінгу немає - 0)
        const toppingPrice = this.toppingFeatures
            ? this.toppingFeatures.reduce((total, topping) => {
                return total + topping.price;
            }, 0)
            : 0;
        
        // ціна додаткової начинки (якщо додаткової начинки немає - 0)
        const stuffingPrice = this.stuffingFeatures
            ? this.stuffingFeatures.price
            : 0;

        return this.sizeFeatures.price + toppingPrice + stuffingPrice;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories: ${hamburger.calculateCalories()}`);
console.log(`Price: ${hamburger.calculatePrice()} tugrik`);

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log(`Price with sauce: ${hamburger.calculatePrice()} tugrik`);

console.log(hamburger);
