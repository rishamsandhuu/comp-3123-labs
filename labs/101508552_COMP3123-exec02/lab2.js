//Exercise 1: Greeter
greeter = (myArray) =>{
    for(let i = 0; i < myArray.length; i++){
    console.log("Hello " + myArray[i])
    }
}

greeter(['Risham','Noor','Kaur'])

//Exercise 2
function capitalizeFirstLetter(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('');
}

console.log(capitalizeFirstLetter("hello")); 

//Exercise 3
const colors = ["red", "green", "blue", "yellow", "purple"];
const capitalizedColors = colors.map(color => capitalizeFirstLetter(color));

console.log(capitalizedColors);

//Exercise 4
function filterLessThanTwenty(arr) {
  return arr.filter(num => num < 20);
}

const numbers = [5, 12, 20, 25, 40];
console.log(filterLessThanTwenty(numbers));


// Exercise 5
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);

console.log("Sum:", sum);       
console.log("Product:", product); 

// Exercise 5
// Base Car class
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

// Sedan subclass 
class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); //calling parent class
    this.balance = balance;
  }

  displaySedanInfo() {
    return `${this.displayInfo()}, Balance: $${this.balance}`;
  }
}

const mySedan = new Sedan("Toyota Camry", 2023, 15000);
console.log(mySedan.displaySedanInfo());
