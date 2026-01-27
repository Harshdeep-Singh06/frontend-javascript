function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 7);

// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a valid name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("harsh"))
// console.log(loginUserMessage())

function calculateCarPrice(val1,...num1){
    return num1
}
// console.log(calculateCarPrice(200,400,500))

const user ={
    username: "harsh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 100
})

const newMyArray = [200,400,500,300]
function returnSecondValue(getArray){
    return getArray[1]
}