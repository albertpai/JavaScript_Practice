/*
The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.

let newArr = oldArr.filter(callback);

newArr — the new array that is returned
oldArr — the array to run the filter function on
callback — the function used to test each element of the oldArr. Returning true keeps the element, returning false to not keep it.

Our callback function can take three arguments:
element — the current element of the array
index — the current index of the value being processed
arr — the original array

https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206


var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

Parameters
callback: Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
    element: The current element being processed in the array.
    index Optional: The index of the current element being processed in the array.
    array Optional: The array filter was called upon.
thisArg Optional: Optional. Value to use as this when executing callback.

Return value
A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


array.filter(function(currentValue, index, arr), thisValue)

function(currentValue, index,arr): Required. A function to be run for each element in the array. Function arguments:
    currentValue: Required. The value of the current element
    index: Optional. The array index of the current element
    arr: Optional. The array object the current element belongs to
thisValue: Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

Return Value:	An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array.

https://www.w3schools.com/jsref/jsref_filter.asp
*/