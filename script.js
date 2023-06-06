class Person {
    constructor (name, age) {
      this.name = name;
      this.age = age;
    }

    outputInfoPerson() {
        console.log(this)
    }
};
  
const person1 = new Person('Tania', 27);
const person2 = new Person('Sasha', 17);
const person3 = new Person('Valera', 28);
  
console.log(person1, person2, person3);

class Car {
    constructor (...arg) {
        [this.mark, this.model, this.productionYear, this.registrationNumber] = arg;
    }

    setOwner(person) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            console.log(`${person.name} is under 18 years old`)
        }
    }

    outputInfoCarAndOwner() {
        console.log(this);
        if (this.owner) {
            this.owner.outputInfoPerson();
        }
    }
}

const car1 = new Car('Toyota', 'Rav4', 2020, 'AA1111AA')
const car2 = new Car('BMW', 'X6', 2022, 'AA2222AA')
console.log(car1, car2);

car1.setOwner(person1)
car1.setOwner(person2)
console.log(car1, car2);

car1.outputInfoCarAndOwner();
car2.outputInfoCarAndOwner();