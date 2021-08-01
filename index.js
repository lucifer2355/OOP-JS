class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => this.name;
  getAge = () => this.age;
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress = () => this.address;
  getPrice = () => this.price;
  getResidents = () => this.residents;

  addResident = (resident) => {
    this.residents.push(resident);
  };
}

const Jon = new Person("Jon", 23);
const David = new Person("David", 21);
const Max = new Person("Max", 25);

const house = new House("bhavnagar", 20000, [Jon, David, Max]);
console.log(house.getResidents());

const Harry = new Person("Harry", 19);
house.addResident(Harry);
console.log(house.getResidents());
