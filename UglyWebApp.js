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
  }
];

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

const getValue = elementId => {
  let valueAsText = document.getElementById(elementId).value;
  return Number(valueAsText);
};

const getName = elementId => {
  let valueAsText = document.getElementById(elementId).value;
  return valueAsText;
};

let anotherCostsArray = [...costs];
let sillyArray = [...costs];

const addCost = () => {
  let name = getName("name");
  let amount = getValue("amount");
  let costTypeIndex = getValue("costType");

  let newObject = {
    name,
    amount
  };

  newObject.costType = costTypes[costTypeIndex].type;

  let anotherObject = {
    name: name,
    amount: amount,
    costType: costTypes[costTypeIndex]
  };

  let sillyObject = {
    [name]: name,
    [amount]: amount
  };
  anotherCostsArray.push(newObject);
  costs.push(anotherObject);
  sillyArray.push(sillyObject);

  costs.forEach(cost => {
    let myElement = document.createElement("p");
    myElement.innerText = ` name: ${cost.name}, amount: ${cost.amount}, cost type: ${cost.costType.type}`;
    document.body.appendChild(myElement);
  });

  console.log("another costs array: ", anotherCostsArray);
};

(par => console.log(par))("JIIIIIIHHHAAAAAAA");

(costTypes.map((cost) => console.log(`Name: ${cost.type} , Days:${cost.type}`))(costTypes)