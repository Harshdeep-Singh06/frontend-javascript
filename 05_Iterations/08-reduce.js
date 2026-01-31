const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval)=>(acc + currval), 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js",
        price: 99
    },
    {
        itemName : "python",
        price: 9
    },
    {
        itemName : "Cp",
        price: 999
    },
    {
        itemName : "ruby",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(priceToPay);
