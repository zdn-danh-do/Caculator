function Caculator(input) {
  this.input = input;
  this.numbers = input.split(/\+|\-|\*|\//g);
  this.operators = input.replace(/[0-9]|\./g, "").split("");
  this.add = this.operators.indexOf("+");
  this.substract = this.operators.indexOf("-");
  this.multiply = this.operators.indexOf("*");
  this.divide = this.operators.indexOf("/");
  this.addHandle = function () {
    this.numbers.splice(
      this.add,
      2,
      parseFloat(this.numbers[this.add]) +
        parseFloat(this.numbers[this.add + 1])
    );
    this.operators.splice(this.add, 1);
    this.add = this.operators.indexOf("+");
  };
  this.substractHandle = function () {
    let numbers = this.numbers;
    let substract = this.substract;
    let operators = this.operators;
    numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
    operators.splice(substract, 1);
    this.substract = operators.indexOf("-");
  };
  this.multiplyHandle = function () {
    let numbers = this.numbers;
    let operators = this.operators;
    let multiply = this.multiply;

    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    this.multiply = operators.indexOf("*");
  };
  this.divideHandle = function () {
    let numbers = this.numbers;
    let operators = this.operators;
    let divide = this.divide;
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    this.divide = operators.indexOf("/");
  };
  this.caculator = function () {
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
