const Jsuser = {
    name : "Prabina",
    age : 18,
    location : "BBSR",
    email : "prabindas442@gmail.com",
    isLogin : false,
    lastLoginDays : ["Monday", "Tuesday"]
}
// console.log(Jsuser.name);
// console.log(Jsuser["name"]);

// console.log(typeof Jsuser);
Jsuser.email = "Pkdas4423@gmial.com"
// Object.freeze(Jsuser) //for freezing purpose
// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello JS user");
}
// console.log(Jsuser.greetings); //Hello JS user
// console.log(Jsuser.greetings()); //undefined

Jsuser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greetingsTwo());



