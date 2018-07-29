/*
arr.find(callback[, thisArg])

Parameters
callback: Function to execute on each value in the array, taking three arguments:
element: The current element being processed in the array.
index: Optional. The index of the current element being processed in the array.
array: Optional. The array find was called upon.
thisArg: Optional. Object to use as this when executing callback.

Return value
A value in the array if an element passes the test; otherwise, undefined.


array.find(function(currentValue, index, arr),thisValue)

function(currentValue, index, arr)
Required. A function to be run for each element in the array.
Function arguments:
    currentValue: Required. The value of the current element
    index: Optional. The array index of the current element
    arr: Optional. The array object the current element belongs to
thisValue: Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

Return Value: Returns the array element value if any of the elements in the array pass the test, otherwise it returns undefined


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


array.find(function(currentValue, index, arr),thisValue)

function(currentValue, index, arr)
Required. A function to be run for each element in the array.
Function arguments:

currentValue: Required. The value of the current element
index: Optional. The array index of the current element
arr: Optional. The array object the current element belongs to

thisValue: Optional. A value to be passed to the function to be used as its "this" value. If this parameter is empty, the value "undefined" will be passed as its "this" value

Return Value:
Returns the array element value if any of the elements in the array pass the test, otherwise it returns undefined

https://www.w3schools.com/jsref/jsref_find.asp
*/