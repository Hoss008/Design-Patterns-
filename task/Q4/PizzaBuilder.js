
import Pizza from './Pizza.js'; 

export default class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.size = size;
    return this; 
  }

  setCrust(crust) {
    this.pizza.crust = crust;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}
