//string

let myName = 'Jarrod';


//number
let myAge = 27;
//myAge = 'Max'

//boolean
let hasHobbies = false;
//hasHobbies = 1; doesn't work, can't cast type 

//assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

//array
let hobbies: any[] = ['Cooking', 'Sports'];
// console.log(typeof hobbies);
hobbies = [100]; 

//tuples
//arrays with mixed types and limited number of items

let address: [string, number] = ["superstreet", 99]

//enum
//Make numbers more expressive. If you have a couple colors and you want to check in a switch statement which one is chosen.

enum Color {
    Gray, //0
    Green = 100, //100
    Blue //101
}

let myColor: Color = Color.Green;

// console.log(myColor);

//any

let car: any = "BMW";

// console.log(car);

car = { brand: "BMW", series: 3}

// console.log(car);

//functions
//string refers to return value
function returnMyName(): string {
    return myName;
}

// console.log(returnMyName());

//void
//nothing to be returned
//gives an error if you do return something
function sayHello(): void {
    // console.log("Hello");
}

//argument types 
function multiply(value1:number, value2:number): number  {
    return value1 * value2;
}

// console.log(multiply(2, 4));

//function types

// let myMultiply;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5, 2));

let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
// console.log(myMultiply);

//Objects

let userData: {name: string, age: number} = {
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

let complex: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    }
}


//type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

//union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';


//check types 
let finalValue = 'A string';
if(typeof finalValue == 'string') {
    // console.log('final value is a string')
}

//never
function neverReturns():never {
    throw new Error('An error');
}

//Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; //type any
canAlsoBeNull = null; 
let canThisBeAny = null;
canThisBeAny = 12;

type BankAccount = {money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value:number): void {
        this.money += value;
    }
};

let myself2: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
}

myself2.bankAccount.deposit(3000);

console.log(myself2, 'test');