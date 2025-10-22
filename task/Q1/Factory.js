import SchoolStudent from "./School.js";
import FacultyStudent from "./Faculty.js";

export default class StudentFactory {
  createStudent(type, name) {
    switch (type.toLowerCase()) {
      case "school":
        return new SchoolStudent(name);
      case "faculty":
        return new FacultyStudent(name);
      default:
        throw new Error("Unknown student type");
    }
  }
}
