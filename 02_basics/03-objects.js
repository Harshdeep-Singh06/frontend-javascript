// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Harsh",
    "full name": "Harshdeep Singh",
    [mySym]: "mykey1",
    age: 19,
    location: "Rajpura",
    email: "harsh@icloud.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);
// console.log(Jsuser[mySym]);

JsUser.email = "harsh2026@icloud.com"
Object.freeze(JsUser)
JsUser.email = "harsh2030@icloud.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Sir");
}

JsUser.greetingTwo = function(){
    console.log(`Hello MF!, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());