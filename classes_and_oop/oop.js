const user = {
    username: "honey",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from databae");
        // console.log(`username: ${this.username}`);
        // console.log(this);       
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
   return this
}
 const userOne = new  User("honey", 9, true);
 const userTwo = new User("vivak", 19, false);
 console.log(userOne);
 console.log(userTwo);
 
 
