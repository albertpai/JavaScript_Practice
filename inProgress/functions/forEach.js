/*
typedarray.forEach(callback[, thisArg])

Parameters
callback: Function that produces an element of the new typed array, taking three arguments:
    currentValue: The current element being processed in the typed array.
    index: The index of the current element being processed in the array.
    array: The array forEach() was called upon.
thisArg: Optional. Value to use as this when executing callback.

Return value
undefined.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach


array.forEach(function(currentValue, index, arr), thisValue)

function(currentValue, index, arr): Required. A function to be run for each element in the array. Function arguments:
    currentValue: Required. The value of the current element
    index: Optional. The array index of the current element
    arr: Optional. The array object the current element belongs to
thisValue: Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

Return Value:	undefined

https://www.w3schools.com/jsref/jsref_forEach.asp
*/

array = [10, 2, 3, 5]

// Two steps
var myFunction = function (item, index, array) {
    console.log(item + " " + index + " " + array);
}
console.log("\n");

array.forEach(myFunction);
console.log("\n");

//One step
array.forEach((item)=>console.log(item*2));
console.log("\n");

array.forEach((index)=>console.log(index*3));

