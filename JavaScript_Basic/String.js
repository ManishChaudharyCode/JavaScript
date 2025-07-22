const name = "Manish"
const repocount = 30

// console.log(name + repocount);

console.log('My name is ${nmae} and my repo Count is ${repocount}');

const gameNmae = new String('manishs-s-com-google')

// console.log(gameNmae[0]);
// console.log(gameNmae.__proto__);
// console.log(gameNmae.indexOf('n'));
console.log(gameNmae.charAt(6));


const NewString = gameNmae.substring(0, 5)
console.log(NewString);

const anotherString = gameNmae.slice(-5, 7)
console.log(anotherString);

const NewStringOne =  "    manish   "
console.log(NewStringOne);
console.log(NewStringOne.trim());

const url = "https://manish.com/manish%20chaudhary"
console.log(url.replace('%20', '-'));

console.log(gameNmae.split('-'));