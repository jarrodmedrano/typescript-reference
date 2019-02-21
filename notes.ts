let message:string = 'Hello world';

let counter = 0; //implicit type of number
let counter:number = 1.2; //explicit

let messageRead = false //implicitly becomes a boolean

let messageRead:boolean = false; //explicitly

let person: {firstName: string, lastName: string} = {
    firstName: 'Kobe',
lastName: 'Bryant'
};

let person: any = {
//can have any property
}

person.address = '';

type hasName = { firstName: string, lastName: string };
//specify types in an object

let person: hasName = {
    firstName: 'Kobe',
lastName: 'Bryant'
}

type HasAddress = {
    streetName: string;
}


type Person = {
    Name: HasName,
    Address: HasAddress
}

//type of Person above
let person: Person = {
    Name: {
        lastName: 'Bryant'
}
}

//function type
type messageCreator = (name: string) => string;


function createHellomessage(name: string):string {
//specify string argument and return string
    Return `Hello, my name is ${name}`;
}

//add ? To make argument optional
//function createHellomessage(name: string, extra?:number):string {

//define creator of type messageCreator
//it can only be assigned a function with the function definition messageCreator
const creator: messageCreator = createHellomessage;

const message = creator('Bill');

console.log(message);

//interfaces

interface messageCreator {
    (Name: string) : string
}

type ThreeNames = [string, string, string];
//now you can set persons to persons: ThreeNames

let persons: string[] = ['Kobe', 'Kareem', 'Shaq'];
//Cmd shift B to find the type
//typescript can implicitly define types
let counters: number[] = [0, 1, 2];

type PlayerTuple = [string, number]

let tuple: PlayerTuple = ['Kobe', 5];
//type: string and number
//set type to playerTuple

//ENUMS


enum PlayerPosition {
    Guard,
    Forward,
    Center
}

type Player = [string, PlayerPosition];

let kobe: Player = ['Kobe', PlayerPosition["Guard"]]; //Gets 0

let james: Player = ['James', PlayerPosition.Forward];

let shaq: Player = ['Shaq', PlayerPosition.Center];

let players: Player[] = [kobe, james, shaq];

console.log(players);

//Avoiding Null and undefined

interface Players {
    name: string;
    position: PlayerPosition.Guard
}

let kobes: Players | null = { //union type (nullable)
    name: 'Kobe',
    position: PlayerPosition.Guard
}

// kobes = null;
// kobes = undefined both still valid typescript but you can turn it off in tsconfig

// {
// "compilerOptions": {
// "module": "commonjs",
// "target": "es5",
// "noImplicitAny": false,
// "sourceMap": false,
// "strictNullChecks": true // set undefined or null checks
// }
// }

//this is the same as using the interface keyword
//interface HasName {
//doesn't need to be an instance of the class

type HasName = {
    firstName: string,
    lastName: string
}

type HasAddress = {
    address: string
}
//type alias, intersection type, union type
type Player = (HasName & HasAddress) | null;

const player:Player = {firstName: "Magic", lastName: "Johnson", address: "Staples"}

console.log(player);

//any type doesn't do what you think it does

let myVar:any;

myVar = {};

//myVar can also be assigned to anything

//type inference is number
let counter = 0;

//this works
Counter = myVar;

let str:string = '';

Str = myVar;

//any is a way of opting out of the typescript 2 compiler

//used for 3rd party javascript libraries not written in typescript


//tsconfig change noImplicitAny from false to true


function createmessage(message:string) {

}

console.log(player);

@types/node

@types/lodash

Import * as _ from 'lodash';

//NodeRequirefunction takes an id:string and the return type is any

const _ = require('lodash'); //The _ is type Any

//You can create your own type definitions

My-lodash.d.ts

declare type Lodash = any;

Or

declare interface Firstfunction {
    (Data: any[]): any;
}

declare interface Lodash {
    First:Firstfunction;
}

const _ :Lodash = require('lodash');

Hit cmd space to see type definitions

//Module definitions


declare module “lodash” {


    declare interface Firstfunction {
        (Data: any[]): any;
    }

    declare interface Lodash {
        First:Firstfunction;
    }

    export const _: Lodash;
}

import {_} from “lodash”;

//only need to write type definitions if 3rd party library doesn't have types


//type never

let message :never = buildmessage(“hello World !”);

let counter: number = message;

let str:string = message;

//variable of type never can be assigned to any other variable


let counter = 0;

message = counter;
//doesn't work because type number can't be assigned to never

//variable of type never can be assigned to any other variable, but you cannot assign anything to a variable with a never type

//the only thing you can assign to message is another never variable

//void return type is for functions that don't return anything

function buildmessage(message:string):void {

}

//void is the opposite of any. It has no type at all. 
//avoid void because it produces side effects
//too many void types means we are relying other practices besides functional programming to build our program

//when is a type compatible with another?

//if they have the same set of properties

//this doesn't work in other languages

//type compatibility is based on structural sub typing.
//other languages use nominal sub typing, meaning based on the name.

interface Player {
    firstName: string;
    lastName: string;
}

interface Person {
    firstName: string;
}

let person: Person = {firstName: “Johnny”, lastName: “Bravo” };
//can't add lastName to person

let player:Player = person;

//type person is not assignable to Player because person is missing lastName;

//Add 
debugger;
//To add a breakpoint in the browser;

//Go to edit configurations

//point to the js file not the TS file or debugging will not work

//click the debug mode
