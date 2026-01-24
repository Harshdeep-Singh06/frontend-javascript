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



//----------------------------***--------------------------//

// Stack (Primitive),  Heap(Non-Primitive)

let myYoutubename = "Harshdeepsinghdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// In Stack there is copy so value do not change

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "harsh@google.com"

// In Heap the value comes direct from refrence so value changes

console.log(userOne.email);
console.log(userTwo.email);