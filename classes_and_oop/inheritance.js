class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);

    }
}

const chai = new Teacher("honey", "honey@gamil.com", "hone@76464")

chai.addCourse()

const leamon = new user("Masala chai")

leamon.logMe()

console.log(chai instanceof Teacher);
