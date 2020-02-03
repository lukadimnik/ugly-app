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
// use of spread
const anotherCostsArray = [...costs];
const sillyArray = [...costs];
// adding coppies of two arrays. Added string to the array
const extraSillyArray = [...anotherCostsArray, ...sillyArray, "muahahahaha",];
console.log(extraSillyArray);

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
  // creating an object method in a new way
  let sillyObject = {
    [name]: name,
    [amount]: amount,
    helo(){
      return console.log("returned value from helo function");
    }
  };

  sillyObject.helo();

  // use of .push()
  anotherCostsArray.push(newObject);
  costs.push(anotherObject);
  sillyArray.push(sillyObject);

  // use of .forEach()
  costs.forEach(cost => {
    // let variable declared inside a function (its not visible outside the block)
    let myElement = document.createElement("p");
    // template literals
    myElement.innerText = ` name: ${cost.name}, amount: ${cost.amount}, cost type: ${cost.costType.type}`;
    document.body.appendChild(myElement);
  });

  // use of .filter()
  // using only the second parameter in a function
  let filteredArray = sillyArray.filter((_, index) => index >= 2);

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

// function that returns a function
// use of default value for parameter if no parameter passed to a function
const FuncRetursAFunc = (word="dede") => {
  let firstWord = word;
  //function with two parameters
      return (secondWord, thirdWord) => console.log(`${firstWord} , ${secondWord} , ${thirdWord}`);
  
};
FuncRetursAFunc()("jaaaa", "jojo");
//both parameters passed
FuncRetursAFunc("neeee")("jaaaa","jojo");

// objects
let john = {height: 175, nationality: "english"};
// overwriting the object property
let joe = {...john, nationality: "french"};
console.log(john);
console.dir(joe);

// destructuring
let batman = {height: 180, weight: 90, realName: "Bruce Wayne"};

let {height, weight, realName} = batman;
console.log(height, weight, realName);

// hoisted variable var
// if (1){
//   hoistedName = "Luka";

//   function funnyFunc(){
//     var hoistedNamex = "Noe";
//    return 1 ? hoistedNamex = "Nigel" : hoistedNamex = "Fred";
//   }
//   funnyFunc();
// }

// console.log(hoistedName);

// ternary operator
// 0 is a falsy value
var someVar = 0;
someVar ? someVar = 1: someVar = 2;
console.log(someVar);