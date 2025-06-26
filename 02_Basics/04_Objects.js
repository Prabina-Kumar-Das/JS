// const tinderUser = new Object() // Singleterm Object

const tinderUser = {} // Non-Singleterm Object

tinderUser.name = "Prabina"
tinderUser.Id = "1234"
tinderUser.isLogin = false

// console.log(tinderUser)

const regularUser = {
    email : "Prabinadas4422@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Prabina",
            lastname : "Das"
        }
    }
}
// console.log(regularUser.fullname.userfullname); // { firstname: 'Prabina', lastname: 'Das' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} //you are gonna use this in mostof the cases.

// console.log(obj4);


console.log(tinderUser)
console.log(Object.keys(tinderUser));
