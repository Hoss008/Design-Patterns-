import Student from "./Student.js";

export default class FacultyStudent extends Student {
  constructor(name) {
    super(name, "Faculty");
  }

  study() {
    console.log(`${this.name} is working on faculty projects.`);
  }
}
