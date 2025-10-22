export default class Student {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Level: ${this.level}`);
  }
}
