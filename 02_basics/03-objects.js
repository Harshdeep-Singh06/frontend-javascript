// singleton example

const mySym = Symbol("key1")

const JsUser = {
    name: "Harsh",
    "full name": "Harshdeep Singh",
    [mySym]: "mykey1",
    age: 19,
    location: "Rajpura",
    email: "harsh@icloud.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

// change email
JsUser.email = "harsh2026@icloud.com"

// add functions BEFORE freeze
JsUser.greeting = function () {
    console.log("Hello Sir");
}

JsUser.greetingTwo = function () {
    console.log(`Hello MF!, ${this.name}`);
}

// freeze object
Object.freeze(JsUser)

// try to change (won't work)
JsUser.email = "harsh2030@icloud.com"

// call functions
JsUser.greeting()
JsUser.greetingTwo()
