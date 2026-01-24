// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherid = Symbol("123")

// console.log(id === anotherid);

const bigNumber = 4756238347632893232n



// Refrence (Non Primitive)
// Type of Non primitive is always object 
// Array, Objects, Functions

const heros = ["Thor, Captain America, Ironman"]
let myObj = {
    name: "harsh",
    age: 22,
}

const myFunction = function(){  //Function type function object
    console.log("Hello World");
}

console.log(typeof myFunction);