class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => this.name;
  getAge = () => this.age;
}

const person1 = new Person("jon", 23);
console.log(person1.getName());
console.log(person1.getAge());
