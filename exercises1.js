//Do not change any of the function names

var multiply = (x) => {return x * 10};

var subtractFive = (num) => {return num - 5};

var areSameLength = (str1, str2) => (str1.length === str2.length) ? "true" : "false";

var areEqual = (x, y) => (x === y) ? "true" : "false";

var lessThanNinety = (num) => (num < 90) ? "true" : "false";

var greaterThanFifty = (num) => (num > 50) ? "true" : "false";

var add = (x, y) => x + y;

var divide = (x, y) => x / y;

var multiply = (x, y) => x * y;

var getRemainder = (x, y) => x % y;

var isEven = (num) => (num % 2 === 0) ? "true" : "false"

var isOdd = (num) => (num % 2 !== 0) ? "true" : "false";

var square = (num) => {return num * num};

var cube = (num) => {return num * num * num};

var raiseToPower = (num, exponent) => {return Math.pow(num, exponent)};

var roundNumber = (num) => {return Math.round(num)};

var roundUp = (num) => {return Math.ceil(num)};

var addExclamationPoint = (str) => {return str + "!"};

var combineNames = (firstName, lastName) => {return firstName + " " + lastName};

var getGreeting = (name) => {return "Hello " + name};

//If you can't remember these area formulas then head over to Google or look at the test code.

var getRectangleArea = (length, width) => {return length * width};

var getTriangleArea = (base, height) => {return (base * height) / 2};

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  return Math.PI (radius * radius);
}
var getCircleArea = (radius) => {return Math.PI * (radius * radius) };

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
