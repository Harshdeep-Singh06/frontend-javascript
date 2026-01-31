// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9]

// let  newNums = myNums.filter((num) => num > 4)
// let  newNums = myNums.filter((num) => {
//     return num>4
// })

// const newNums =[]
// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {title: "Book One", genre:"Fiction", publish: 1981,
        edition: 2014},
    {title: "Book Two", genre:"Non-Fiction", publish:1992 ,
        edition: 2020},
    {title: "Book Three ", genre:"History", publish:1989 ,
        edition: 2089},
    {title: "Book Four ", genre:"Non-Fiction", publish:1984 ,
        edition: 2045},
    {title: "Book Five", genre:"Science", publish:2020 ,
        edition: 2006},
    {title: "Book Six", genre:"Fiction", publish:2006 ,
        edition: 2026}
];

let userBooks = books.filter( (bk) => bk.genre === "History")
userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "Science")
console.log(userBooks);