import Student from "./Student.js";

export default class SchoolStudent extends Student {
  constructor(name) {
    super(name, "School");
  }

  study() {
    console.log(`${this.name} is studying school subjects.`);
  }
}
