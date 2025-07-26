//   ES6

// class user {
//     constructo(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encrytPassword() {
//         return `${this.password}@123`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase}`
//     }
// }

// const chai = user("tea", "honey@gamil.com", "hon")
// console.log(chai.encrytPassword());
// console.log(chai.changeUsername());


//    behind the scene

function User(username, email, password) {
   this.username = username
   this.email = email
   this.password = password
}

User.prototype.encrytPassword = function () {
   return `${this.password}@1975`
}

User.prototype.changeUsername = function () {
   return `${this.username.toLowerCase()}`
}

const tea = new User("leamon", "honey@gmail.com", "qwerty")


console.log(tea.encrytPassword());
console.log(tea.changeUsername());



