/*
The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.

let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);

result — the single value that is returned.
arr — the array to run the reduce function on.
callback — the function to execute on each element in the array.
initValue — an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.

Our callback function can take four arguments. You will recognize three of the arguments from the map() and filter() methods. The new argument is the accumulator.
accumulator — the accumulator accumulates all of the callbacks returned values.
val — the current value being processed
index — the current index of the value being processed
arr — the original array

https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc


arr.reduce(callback[, initialValue])

Parameters
callback: Function to execute on each element in the array, taking four arguments:
    accumulator: The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
    currentValue: The current element being processed in the array.
    currentIndex:  Optional. The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
    array: Optional. The array reduce() was called upon.
initialValue: Optional.  Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.

Return value
The value that results from the reduction.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function(total,currentValue, index, arr)
Required. A function to be run for each element in the array.
Function arguments:

total:	Required. The initialValue, or the previously returned value of the function
currentValue: Required. The value of the current element
currentIndex: Optional. The array index of the current element
arr: Optional. The array object the current element belongs to

initialValue: Optional. A value to be passed to the function as the initial value

Return Value: Returns the accumulated result from the last call of the callback function

https://www.w3schools.com/jsref/jsref_reduce.asp
*/

//
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


//
const array1 = [3, 6, 9, 12];
const reducer = (acc, value) => acc + value;

console.log(array1.reduce(reducer))
console.log(array1.reduce(reducer, 10))

//Calling reduce() on an empty array without an initial value is an error.
const array1 = [0];
const reducer = (acc, value) => acc + value;

console.log(array1.reduce(reducer))

//index
const array1 = [3, 6, 9, 12];

console.log(array1.reduce((acc, value, index) => index),1)

/*
The first time the callback is called, accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
*/

// No initial value. Index states from 1. Curent value starts from index 1. Index 0 will be assigned to accumulator. One iteration will be missing.
arr = [1,2,3,4]
function sum3(){
    return arr.reduce((acc, v, i) => console.log(`index ${i}, value: ${v}, accumulator: ${acc}`))
}
console.log(sum3(arr))

// An initial value. Index states from 0. Current value starts from index 0.
arr = [1,2,3,4]
function sum3(){
    return arr.reduce((acc, v, i) => console.log(`index ${i}, value: ${v}, accumulator: ${acc}`), 0)
}
console.log(sum3(arr))

//find the maximum of an array

arr = [5,10,14,3]
function max(){
    return arr.reduce(function(pre,cur,inde,arr){return pre>cur?pre:cur;});

}
console.log(max(arr))


//It is safer to provide an initial value because there are three possible outputs without initialValue

var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() without initialValue
let a = [ { x: 22 }, { x: 42 } ].reduce( maxCallback ); 
console.log(a)// 42

let b = [ { x: 22 }            ].reduce( maxCallback ); 
console.log(b) // { x: 22 }

// let c = [                      ].reduce( maxCallback ); // TypeError
console.log(c)

// map/reduce; better solution, also works for empty or larger arrays
var maxCallback2 = ( max, cur ) => Math.max( max, cur );
let d = [ { x: 22 }, { x: 42 } ].map( el => el.x )
                                .reduce( maxCallback2, -Infinity );
console.log(d)

// Add initial value
let e = [0, 1, 2, 3, 4].reduce( (accumulator, currentValue) => accumulator + currentValue, 15 );

console.log(e)


//Sum of values in an object array

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6

//Sum of values in an object array (arrow function)
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6


//Flatten an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
  console.log(flattened) 
  // flattened is [0, 1, 2, 3, 4, 5]


//Flatten an array of arrays (arrow function)
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, cur) => acc.concat(cur),[]
);
console.log(flattened) 


//Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(
    (acc,cur) => {
        if (cur in acc) {
            acc[cur]++
        }
        else {
            acc[cur] = 1
        }
        return acc;
    },{});

console.log(countedNames)

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//Grouping objects by a property
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

function groupBy (objectArray, property) {
    return objectArray.reduce(
        (acc, cur) => {
            var key = cur[property];
            if (!acc[key]){
                acc[key] = []
            }
            acc[key].push(cur)
            return acc;
        }
    ,{});
}


var groupedPeople = groupBy(people, 'age');

console.log(groupedPeople)
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }


//Bonding arrays contained in an array of objects using the spread operator and initialValue

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue

//Use concat
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

  function allbooks () {
    return friends.reduce((acc, cur) => acc.concat(cur.books)
    , [])
}

console.log(allbooks())


//alternatively, use spread syntax
var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];

var allbooks = friends.reduce(
    (acc, cur) => {
        return [...acc, ...cur.books]
        //Important to keep spread syntax in both arguments.
    },[]
)

console.log(allbooks)


//Remove duplicate items in array


