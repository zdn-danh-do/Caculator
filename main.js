const btnClear = document.getElementById("clear");
const caculatorScreen = document.getElementById("screen");
const inputNumber = document.getElementById("caculator__screen__input");

// Clear Screen
let preValue = "";
btnClear.addEventListener("click", () => {
  inputNumber.value = "";
});

const inputNumberHandle = (number) => {
  let lastChar = inputNumber.value[inputNumber.value.length - 1];

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    if (number === "+" || number === "-" || number === "*" || number === "/") {
      return;
    }
  }
  inputNumber.value += number;
};

const caculatingNumber = () => {
  const divideHandle = () => {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  };
  const multiplyHandle = () => {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  };
  const subtractHandle = () => {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  };
  const addHandle = () => {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  };
  // this is the string that we will be processing eg. -10+26+33-56*34/23
  let inputString = inputNumber.value;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  let numbers = inputString.split(/\+|\-|\*|\//g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  let divide = operators.indexOf("/");
  while (divide != -1) {
    divideHandle();
  }

  let multiply = operators.indexOf("*");
  while (multiply != -1) {
    multiplyHandle();
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    subtractHandle();
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    addHandle();
  }

  inputNumber.value = numbers[0]; // displaying the output
};

const deleteLastChar = () => {
  inputNumber.value = inputNumber.value.slice(0, -1);
};

// OOP

function Caculator(input) {
  this.input = input;
  this.numbers = input.split(/\+|\-|\*|\//g);
  this.operators = input.replace(/[0-9]|\./g, "").split("");
  this.add = this.operators.indexOf("+");
  this.substract = this.operators.indexOf("-");
  this.multiply = this.operators.indexOf("*");
  this.divide = this.operators.indexOf("/");
  this.addHandle = function () {
    // Cộng 2 phần tử lại
    this.numbers.splice(
      this.add,
      2,
      parseFloat(this.numbers[this.add]) +
        parseFloat(this.numbers[this.add + 1])
    );
    this.operators.splice(this.add, 1);
    this.add = this.operators.indexOf("+");
    console.log("add: ", this.numbers);
  };
  this.substractHandle = function () {
    let numbers = this.numbers;
    let substract = this.substract;
    let operators = this.operators;
    this.numbers.splice(
      substract,
      2,
      numbers[substract] - numbers[substract + 1]
    );
    this.operators.splice(substract, 1);
    this.substract = operators.indexOf("-");
  };
  this.multiplyHandle = function () {
    let numbers = this.numbers;
    let operators = this.operators;
    let multiply = this.multiply;

    this.numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    this.operators.splice(multiply, 1);
    this.multiply = operators.indexOf("*");
  };
  this.divideHandle = function () {
    this.numbers.splice(
      this.divide,
      2,
      this.numbers[this.divide] / this.numbers[this.divide + 1]
    );
    console.log("div: ", this.numbers);
    this.operators.splice(this.divide, 1);
    this.divide = this.operators.indexOf("/");
  };
  this.caculator = function () {
    console.log(this.operators);

    while (this.divide != -1) {
      this.divideHandle();
    }

    while (this.multiply != -1) {
      this.multiplyHandle();
    }

    while (this.substract != -1) {
      this.substractHandle();
    }

    while (this.add != -1) {
      this.addHandle();
    }

    return (inputNumber.value = this.numbers[0]);
  };
}

const caculatingNumberByOOPHandle = () => {
  const caculator = new Caculator(inputNumber.value);
  inputNumber.value = caculator.caculator();
};
