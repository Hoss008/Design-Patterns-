import Document from "./Document.js";
const doc1 = new Document(
  "My Report Header",
  "Page 1 of 10",
  10,
  "This is the main content of the report."
);

doc1.display();

const doc2 = doc1.clone();

doc2.header = "My Cloned Report Header";
doc2.text = "This is a modified copy of the original report.";
// doc2.pages=50;

doc2.display();
doc1.display();
