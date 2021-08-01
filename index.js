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
}
