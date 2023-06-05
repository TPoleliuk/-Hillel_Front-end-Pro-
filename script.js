class Person {
    constructor (name, gender) {
      this.name = name;
      this.gender = gender;
    }
};
  
const person1 = new Person('Tania', 'female');
const person2 = new Person('Sasha', 'male');
const person3 = new Person('Vika', 'female');
const person4 = new Person('Valera', 'male');
  
console.log(person1, person2, person3, person4);
  
//-----------------------------------------------------
  
class Apartment {
    residents = [];
  
    addResident(person) {
      this.residents.push(person)
    }
};
  
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
  
console.log(apartment1, apartment2, apartment3);
  
apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);
apartment3.addResident(person4);
  
console.log(apartment1, apartment2, apartment3);
  
//-----------------------------------------------------
  
class House {
    apartments = [];
  
    constructor (maxNumberOfApartments) {
      this.maxNumberOfApartments = maxNumberOfApartments;
    }
  
    addApartment(apartment) {
      if(this.apartments.length === this.maxNumberOfApartments) {
        console.log('This house is full');
      } else {
        this.apartments.push(apartment);
      };
    }
};
  
const house1 = new House(2)
console.log(house1);
  
house1.addApartment(apartment1);
house1.addApartment(apartment2);
console.log(house1);
  
house1.addApartment(apartment3);
console.log(house1);