let myName = "honey     ";
let myChannel = "game     ";

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);

    }
}

Object.prototype.honey = function(){
    console.log(`honey is present in all objects`);
    
}

Array.prototype.heyhoney = function(){
    console.log(`Honey Says Hello`);
    
}
// heroPower.honey()
// myHeros.honey()

// heroPower.heyhoney()
myHeros.heyhoney()

                //   inheritancre

const user = {
    name: "honey",
    email: "honey@gmail.com "
}                
const Teacher = {
    makeVideos: true
}  

const TechingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'js assignment',
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = user

// modern syntax

object.setPrototypeOf(TechingSupport, Teacher)

let anotherUsername = "chaiaurcode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"honey".trueLength()


                                        // CALL 


function SetUsername(username) {
    // complex DB Calls 
    this.username = username
} 

function createUser (username, email, password){
   SetUsername.call(this, username)
   this.email = email
   this.password = password
}

const chai = new createUser("tea", "honey@gmail.com", "123455")
console.log(chai);
