const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task 
    //  DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is compelete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promised consumed")
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Asytnc task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolve");

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "honey", email: "honeychaudhary@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function (reject, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})

promiseFour.
    then(function (user) {
        console.log(user);
        return user.username
    })
    .then(function (username) {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected")
    )

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javaScript", password: "6542" })
        } else {
            reject("ERROR: js went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/manishchaudhary")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);

//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/manishchaudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))