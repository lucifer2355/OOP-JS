class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => this.name;
  getAge = () => this.age;
}

class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () =>
    console.log(
      `Hello, I'm a programmer! My name is ${this.getName()} and I work for ${
        this.company
      }`
    );
}

const programmer = new Programmer("jon", 23, "Amazon", 20000, "JavaScript");
programmer.sayHi();
