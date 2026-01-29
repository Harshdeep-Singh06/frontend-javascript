// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const nums of arr) {
    // console.log(nums);    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log("Each chr is",greet);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    "game1" : "CoC",
    "game2" : "Sky"
}

for (const [names, value] of myObject) {
    // console.log(names, ":-", value );
}

