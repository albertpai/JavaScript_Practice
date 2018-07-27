//String Interpolation

let favoriteAnimal = "Cat";
console.log('My favorite animal: ' + favoriteAnimal);

//String Interpolation II since ES6
function welcome(userName) {
    return `Hello World ${userName}`
}

console.log(welcome('Peter'));


//String Interpolation II since ES6
let myName = 'William Blake';
let myCity = 'London';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);