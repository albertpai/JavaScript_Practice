//Arrow function in Udemy course: JavaScript Fundamentals 2018 ES6 for beginners.

// Type 1
function myFun2 (x){
    return x * 10
 }

console.log(myFun2(10))
console.log(myFun2)


//Type 2
let myFun1 = function (x){
   return x * 10 
}

console.log(myFun1(10))
console.log(myFun1)


// Type 3
let myFun3 = x => x*10

console.log(myFun3(10))
console.log(myFun3)


// Type 1. Assign a value to x.
function myFun2 (x=10){
    return x * 10 
 }

console.log(myFun2())
console.log(myFun2)


//Type 2. Assign a value to x.
let myFun1 = function (x=10){
    return x * 10 
 }
 
 console.log(myFun1(10))
 console.log(myFun1)

 // Type 3. Assign a value to x.
let myFun3 = (x=10) => x*10

console.log(myFun3(10))
console.log(myFun3)

// Input Type 3 on Babel.
var myFun3 = function myFun3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    return x * 10;
  };