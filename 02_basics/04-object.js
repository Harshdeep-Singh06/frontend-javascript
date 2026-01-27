// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Cherry"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Saini"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

// const obj3 = {obj1, obj2}  //Wrong method to combine
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
    } ,
    {
    } ,
    {
    } ,
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "OOlong"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" = "harsh",
//     "coursename": "js",
//     "price": "free",
// }

[
    {},
    {},
    {}
]