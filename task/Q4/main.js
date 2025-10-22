
import PizzaBuilder from './PizzaBuilder.js'; 

const builder = new PizzaBuilder();

const myPizza = builder
  .setSize("Large")
  .setCrust("Cheese Stuffed")
  .addTopping("Pepperoni")
  .addTopping("Olives")
  .addTopping("Mushrooms")
  .build();

myPizza.display();
