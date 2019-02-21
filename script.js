"use strict";
//string
var myName = 'Jarrod';
//number
var myAge = 27;
//myAge = 'Max'
//boolean
var hasHobbies = false;
//hasHobbies = 1; doesn't work, can't cast type 
//assign types
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
//array
var hobbies = ['Cooking', 'Sports'];
// console.log(typeof hobbies);
hobbies = [100];
//tuples
//arrays with mixed types and limited number of items
var address = ["superstreet", 99];
//enum
//Make numbers more expressive. If you have a couple colors and you want to check in a switch statement which one is chosen.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
var myColor = Color.Green;
// console.log(myColor);
//any
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
//functions
//string refers to return value
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
//void
//nothing to be returned
//gives an error if you do return something
function sayHello() {
    // console.log("Hello");
}
//argument types 
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 4));
//function types
// let myMultiply;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5, 2));
var myMultiply;
myMultiply = multiply;
// console.log(myMultiply);
//Objects
var userData = {
    name: 'Jarrod',
    age: 32
};
//in function the order is important
//in objects the order may change but the names may change.
// userData = {
//     a: "hello",
//     b: 22
// };
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27;
myRealRealAge = '27';
//check types 
var finalValue = 'A string';
if (typeof finalValue == 'string') {
    // console.log('final value is a string')
}
//never
function neverReturns() {
    throw new Error('An error');
}
//Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; //type any
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself2 = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself2.bankAccount.deposit(3000);
console.log(myself2, 'test');
