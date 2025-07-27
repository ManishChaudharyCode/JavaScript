class user{
    constructor(email, password){
          this.email = email
          this.password = password
 } 

 get email(){
    return this._email.toUpperCase()
 }

 set email(value){
    this._email = value
 }
 get password(){
    return `${this._password}@ggs`
 }
 set password(value){
     this._password = value
 }
} 

const honey = new user("hon@gmail.coom", "123")
// console.log(honey.password);
// console.log(honey.email);




    //  Object getter and settert js

//  const User = {
//     _email: "123@gmail.com",
//     _password: "abc@123",

//     get email(){
//          return this._email.toUpperCase()
//     },

//     set email(value){
//          this._email = value
//     }


//  } 
 
//  const tea = Object.create(User)
//  console.log(tea.email);
 

    //    use of function getter and setter js 


function User(email, password){
   this.email = email
   this.password = password

   Object.defineProperty(this, 'email', {
        get: function(){
            return  this._email.toUpperCase()
        },
        set: function(value){
              this._email = value
        }
   })

   Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(){
        this._password = value    }
   })
}  

const tea = new user("honeych@gmail.com", "133qw12")
console.log(tea.email);
console.log(tea.password);
