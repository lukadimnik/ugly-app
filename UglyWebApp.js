// use of const - only the outer layer e.g. first bracked is constant.
// content of array can be manipulated
// use of trailing comma
const costTypes = [
  {
    type: "daily",
    days: 1
  },
  {
    type: "weekly",
    days: 7
  },
  {
    type: "monthly",
    days: 30
  },
  {
    type: "yearly",
    days: 365
  },
];

// adding object as another objects property
const costs = [
  {
    name: "rent",
    amount: 450,
    costType: costTypes[2]
  },
  {
    name: "phone bill",
    amount: 25,
    costType: costTypes[2]
  },
  {
    name: "food",
    amount: 10,
    costType: costTypes[0]
  },
  {
    name: "cinema ticket",
    amount: 15,
    costType: costTypes[1]
  },
  {
    name: "taxes",
    amount: 4000,
    costType: costTypes[3]
  }
];
// use of arrow function with brackets
// not using brackets when having only one 
// saving a function in a variable
const getValue = elementId => {
  let valueAsText = document.getElementById(elementId).value;
  return Number(valueAsText);
};

const getName = elementId => {
  let valueAsText = document.getElementById(elementId).value;
  return valueAsText;
};
// use of let
// use of spread
let anotherCostsArray = [...costs];
let sillyArray = [...costs];

const addCost = () => {
  let name = getName("name");
  let amount = getValue("amount");
  let costTypeIndex = getValue("costType");

// adhoc creating new object
// creating new object properties in a new way - same as let newObject = {name: name, amount: amount}
  let newObject = {
    name,
    amount
  };
// adding new attribute attribute to object
  newObject.costType = costTypes[costTypeIndex].type;

  let anotherObject = {
    name: name,
    amount: amount,
    costType: costTypes[costTypeIndex]
  };

  // creating object by naming properties based on values of the variable
  let sillyObject = {
    [name]: name,
    [amount]: amount
  };

  // use of .push()
  anotherCostsArray.push(newObject);
  costs.push(anotherObject);
  sillyArray.push(sillyObject);

  // use of .forEach()
  costs.forEach(cost => {
    let myElement = document.createElement("p");
    // template literals
    myElement.innerText = ` name: ${cost.name}, amount: ${cost.amount}, cost type: ${cost.costType.type}`;
    document.body.appendChild(myElement);
  });

  // use of .filter()
  let filteredArray = sillyArray.filter((_, index) => index % 2);

  console.log("filtered array", filteredArray);

  console.log("another costs array: ", anotherCostsArray);
};

// use of immediately executing function
// use of implicit return in arrow function
(par => console.log(par))("JIIIIIIHHHAAAAAAA");

// using .map()
(()=>costTypes.map(cost => console.log(`Name: ${cost.type} , Days:${cost.type}`)))
(costTypes);

// class definition
// extends creates a child Class from a parent Class
class Vehicle {
  name;
  constructor(){
    this.name = "lorem ipsum";
  }
}

class Car extends Vehicle {
  color;
  brand;
  constructor(color, brand){
    super(name);
    this.color = color;
    this.brand = brand;
  }

  getColor(){
    return this.color;
  }
  getBrand(){
    return this.brand;
  }
  setColor(color){
    this.color = color;
  }
}

let myCar = new Car("red", "BMW");
console.dir(myCar);