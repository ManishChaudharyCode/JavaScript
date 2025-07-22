// Primitive

// 7 : String, Number, Boolearn, null, Undefined, Symbol, Bigint

const score = 100
const  newscore = 120.21

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const Id = Symbol("123")
const anoterId = Symbol("123")

console.log(Id === anoterId);

// Refernce (non-Primitive)

// Arrey, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "manish chaudhary",
    age: 28,
}
const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof anotherId);

//  ***************************************

// stack (primitive), heap (non-primitive)

let myYoutube = "chaiorcode"

let anotheryoutube = myYoutube

anotheryoutube = "python"

console.log(myYoutube);
console.log(anotheryoutube);

let userOne = {
    email: "user@google.com",
    upi: "974734@ypl"
}

let userTwo = userOne

userTwo.email = "msnish@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);