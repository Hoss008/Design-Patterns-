export default class Document {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }

  display() {
    console.log(" Document ");
    console.log(`Header: ${this.header}`);
    console.log(`Footer: ${this.footer}`);
    console.log(`Pages: ${this.pages}`);
    console.log(`Text: ${this.text}`);
    console.log("=====================");
  }

  clone() {
    return new Document(this.header, this.footer, this.pages, this.text);
  }
}
