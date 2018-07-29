
//spread operator. generate an array in a function.
var x = function (...n) {
    console.log(n)
}
x(1, 2, 3, 4)

//gather operator. gather the rest of arguments.
var x = function (x,y,...arr) {
    console.log(arr)
}

x(1, 2, 3, 4, 5, 6, 7)


//works in funciton call
var x = function (x,y,z) {
    console.log(x)
    console.log(y)
    console.log(z)
}

x(...[1, 2, 3, 4, 5, 6, 7])


//works in funciton call and gather arguments as an array
var x = function (x,y,z, ...arr) {
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(arr)
}

x(...[1, 2, 3, 4, 5, 6, 7])


//arguments return an object
var x = function () {
    console.log(arguments)
}

x(1, 2, 3, 4)


//add array elements
var dowhatever = ['have fun', 'have more fun']
var aGoodLife = ['born', 'study with fun', ...dowhatever, 'enjoy old age', 'die in peace']
console.log(aGoodLife)

//Combine two arrays into one
var a = [1, 2, 3]
var b = [4, 5, 6]
a.push(...b)
console.log(a)


//copy an existing array
var array = [2, 4, 6, 8, 10]
var sameArray = array
var newSpreadArray = [...array]
array [0] = -2000
console.log(sameArray)       //still the same array
console.log(newSpreadArray)  //creates a new array


//Get rid of apply when using Math
var array = [12, 24, 26, 68, 100]
var max = Math.max.apply(Math, array)  //traditional way
console.log(max)

var array = [12, 24, 26, 68, 100]
var max = Math.max(...array)  //new way
console.log(max)