import StudentFactory from "./Factory.js";

const factory = new StudentFactory();

const s1 = factory.createStudent("school", "Mohamed");
const s2 = factory.createStudent("faculty", "Hossam");

s1.displayInfo();
s1.study();

s2.displayInfo();
s2.study();
