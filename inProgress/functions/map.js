/*
The map() method is used to apply a function on every element in an array. A new array is then returned.

let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});

newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
index — the current index of the value being processed
arr — the original array

https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783


var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

Parameters
callback: Function that produces an element of the new Array, taking three arguments:
     currentValue: The current element being processed in the array.
    index: Optional. The index of the current element being processed in the array.
    array: Optional. The array map was called upon.
thisArg Optional: Value to use as this when executing callback.

Return value
A new array with each element being the result of the callback function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


array.map(function(currentValue, index, arr), thisValue)

function(currentValue, index, arr): Required. A function to be run for each element in the array.
Function arguments:
    currentValue: Required. The value of the current element
    index: Optional. The array index of the current element
    arr: Optional. The array object the current element belongs to
thisValue: 	Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

Return Value: An Array containing the results of calling the provided function for each element in the original array.

https://www.w3schools.com/jsref/jsref_map.asp
*/


//Mapping an array of numbers to an array of square roots
var a = [1, 2, 3, 4, 5];
a = a.map (v => v*2);
console.log(a);


var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
//.map() generates a new array / list in a new variable

console.log(numbers.map(Math.sqrt))
//Another way to show the resulting array


//Using map to reformat objects in an array
var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
var rObj = {};
rObj[obj.key] = obj.value;
return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

console.log(reformattedArray)
console.log(kvArray)
// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]


//Mapping an array of numbers using a function containing an argument
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]




//Using map generically
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
console.log(a)
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
// Array.prototype.map.call can be used to process a string directly


//Using map generically querySelectorAll
//Check!
// https://alligator.io/js/queryselector-queryselectorall/
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});

//
let a = ['1', '2', '3'].map(parseInt);
console.log(a)

//
let b = ['1', '2', '3'].map( str => parseInt(str) );
console.log(b)

//Check
let c = ['1', '2', '3'].map(returnInt); // [1, 2, 3]
console.log(c)

//
let d = ['1', '2', '3'].map(Number)
console.log(d)

 