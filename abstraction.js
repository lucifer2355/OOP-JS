//! Way of hiding the implementation details nd showing only the functionality to the user

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = "";
  }

  getName = () => this.name;
  getAge = () => this.age;
  setJob = (job) => {
    this.job = job;
  };
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

const house = new House("New York", 20000, []);
house.addResident(Jon);

Jon.setJob("Developer");

console.log(house.getResidents());
