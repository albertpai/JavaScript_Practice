// All all elements of an array

//Use forEach
var sum = 0;
function add(array) {
    array.forEach(v => sum += v);
    return sum;
}

console.log(add([1,2,3,4,5]))

//Use reduce
function add (array){
    return array.reduce(function(accumulator, value) {return (accumulator + value)});
}
console.log(add([1,2,3,4,5]))

//Use reduce
function add (array){
    return array.reduce((accumulator, value) => accumulator + value);
}
console.log(add([1,2,3,4,5]))