
export default class Pizza {
  constructor() {
    this.size = null;
    this.crust = null;
    this.toppings = [];
  }

  display() {
    console.log("=== Your Pizza Order ===");
    console.log(`Size: ${this.size}`);
    console.log(`Crust: ${this.crust}`);
    console.log(`Toppings: ${this.toppings.join(", ") || "None"}`);
    console.log("=========================");
  }
}
