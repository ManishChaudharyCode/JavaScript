class user {
    constructor(username) {
        this.username = this.username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const hone = new user("Adhit")
//  console.log(hone.createId());

class Teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")

iphone.logMe()

