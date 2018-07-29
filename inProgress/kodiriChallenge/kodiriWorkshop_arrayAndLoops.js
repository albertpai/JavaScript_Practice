//access an array
let fruits = ['apple', 'pear', 'banana', 'pineapple'];
    console.log(fruits[0], fruits[1], fruits[2]);


//array and for loop
let fruits = ['apple', 'pear', 'banana', 'pineapple'];
for (i=0; i <fruits.length; i++) {
    console.log(fruits[i]);
}

//array and for...of loop
// a has been implicitly defined
let fruits = ['apple', 'pear', 'banana', 'pineapple'];
for (a of fruits) {
    console.log(a);
}

//array and forEach
let fruits = ['apple', 'pear', 'banana', 'pineapple'];
fruits.forEach(function (fruit) {
    console.log(fruit);
})

//array and forEach in an arrow fucntion
let fruits = ['apple', 'pear', 'banana', 'pineapple'];
fruits.forEach(fruit => console.log(fruit));