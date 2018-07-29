//basic funtion
function reusableFunction (){
    console.log("Hello World");
}
reusableFunction();


//object in a function
function welcome(user) {
    return `Hello World, ${user.name.firstName}`
}

let user1 = {
    age: 43,
    email: '123@gmail.com',
    name: {
        firstName: 'John',
        lastName: 'Lewis'
    }
}
console.log(welcome(user1));

//access an object where keys have spaces
function welcome(user) {
    return `Hello World, ${user['user name'].firstName}`
}

let user1 = {
    age: 43,
    email: 'john@lewis.com',
    "user name": {
        firstName: 'John',
        lastName: 'Lewis'
    }
}
console.log(welcome(user1));

