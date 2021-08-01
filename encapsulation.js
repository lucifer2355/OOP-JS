//! Add retention and protection and hiding of data

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._job = "";
  }

  getName = () => this._name;
  getAge = () => this._age;
  setJob = (job) => {
    this._job = job;
  };
}

//* OR

class Person {
  constructor(name, age) {
    _name = name;
    _age = age;
    _job = "";

    getName = () => _name;
    getAge = () => _age;
    setJob = (job) => {
      _job = job;
    };
  }
}
