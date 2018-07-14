//Variable declaration
//Summary:
//       Declaration times    change value                 Scope     Hoisting
//var:   multiple times       Yes                          function  Yes (undefied)
//let:   only once            Yes                          block     No (ReferenceError)
//const: only once            No (unless array or object)  block     No (ReferenceError)


//var and let
//var can be decalared multiple times.
//let can only be declared once.

var camper = 'James';
var camper = 'David';
console.log(camper);

let name = 'Peter';
let name = 'John'; // throws an error
console.log(name);

//Examples from here
//https://hackernoon.com/js-var-let-or-const-67e51dbb716f
//with var (the variable x inside a function is function-scoped.)
var x = "outside";
function foo() {
  var x = "inside";
  console.log(x);
}
foo(); // inside
console.log(x); // outside


//without var
var x = "outside";
function foo() {
  x = "inside";
  console.log(x);
}
foo(); // inside
console.log(x); // inside


//hoisting
var i = 0;
console.log('sup')

//Variable i is hosted by the interpreter, but it is not assigned to zero.
console.log(i); // undefined
var i = 0;

// var's are function-scoped!!
function foo() {
  var i = 0;
}
console.log(i); // ReferenceError: i is not defined

//var’s are not block-scoped!!
var i = 0
if (true) {
  var i = 1;
}
console.log(i); // 1

//let variables are block-scoped!! 
let i = 0;
if (true) {
  let i = 1;
}
console.log(i); // 0

//const, like let, is block-scoped.
if (true) {
  const i = 0;
}
console.log(i); // ReferenceError: i is not defined

//const allows variable mutation
//Array Mutation:
const a = [1];
const b = a;
console.log(a === b); // true
b.push(2);
console.log(a === b); // true
console.log(a); /// [ 1, 2 ]

//Object Mutation:
const obj = {};
obj.i = 1;
console.log(obj); // { i: 1 }

//let and const declarations are not hoisted. Technically, they are hoisted, but they are not initialized to anything.
//var is initialized to undefined.
console.log(a); // undefined
var a = 2;
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Uncaught ReferenceError: c is not defined
let c = 2;

// This code always returns true.
function isEqualTo5(n) {
  return !(n - five);
  var five = 5;
}
console.log(isEqualTo5(4)); // true
// five is undefined.
// !(4 - undefined) === !(NaN) === true

// use const instead to avoid the bug.
function isEqualTo5(n) {
  return !(n - five);
  const five = 5;
}
console.log(isEqualTo5(4)); // ReferenceError: five is not defined


//More tests on const
// const can be decalred only once
const A = 1;
const A = 2; //Identifier 'A' has already been declared.

// const cannot be modified unless it is an array or object.
const A = 1;
const A = 2+1; //Identifier 'A' has already been declared.