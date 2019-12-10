console.log(__dirname, __filename);

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Look closely, my name is ${this.name} and I am ${this.age} years old`);
  }
}

module.exports = Person;
