const name = "harsh"
const repoCount = 4

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("harsh-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(-1, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 3)
console.log(anotherString);

const newStringOne = "   harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20saini"

console.log(url.replace('%20', '-'))

console.log(url.includes('harsh'))