class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.count = 0;
        Singleton.instance = this;
    }
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}

const counter1 = new Singleton();
const counter2 = new Singleton();
const counter3 = new Singleton();

counter1.increment();
counter1.increment();
counter1.increment();

console.log(counter1.getCount()); 
console.log(counter2.getCount()); 

console.log(counter1.getCount()); 
console.log(counter1 === counter2); 
