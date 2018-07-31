// push adds elemeents from the end
let characters = ['Donald', 'Kim'];
characters.push('Boris');
console.log(characters)

// unshift adds elements from the beginning
let characters = ['Donald', 'Kim'];
characters.unshift('Boris');
console.log(characters)

// delete leaves an empty place
let characters = ['Donald', 'Kim', 'Boris'];
delete characters[1];
console.log(characters)

// splice
// splice: remove a number of items from a position of an array
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(1, 1);
console.log(characters)

//
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(1, 2);
console.log(characters)

// splice specifies how many elements will be removed.
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(2, 0);
console.log(characters)

// Replace in a traditional way
let characters = ['Donald', 'Kim', 'Boris'];
characters[1] = 'Theresa'
console.log(characters)

// splice can replace with new items
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(1, 2, 'Hello');
console.log(characters)

// splice: returning the deleted elements!
let characters = ['Donald', 'Kim', 'Boris'];
a = characters.splice(1, 1);
console.log(a)

// splice can insert new items into an array!
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(2, 0, 'Theresa');
console.log(characters)

// splice can replace elements
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(1, 1, 'Theresa');
console.log(characters)

//
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(2, 1, 'Theresa');
console.log(characters)

// splice: second number determines how many items will be removed (insertion or replacement)
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(2, 0, 'Theresa', 'Emmanuel');
console.log(characters)

//
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(-2, 0, 'Theresa', 'Emmanuel');
console.log(characters)

// splice(number) remove everything else from the specified index
let characters = ['Donald', 'Kim', 'Boris'];
characters.splice(1);
console.log(characters)


// slice
// slice does not change the original array, but generates a new array.
// slice gives two indexes v.s. splice gives an index and then the number of items to be removed

// slice: declare a new variable. The original array will not be changed.
let characters = ['Donald', 'Kim', 'Boris'];
let selection = characters.slice(0, 2);
console.log(selection)

//
let characters = ['Donald', 'Kim', 'Boris'];
let selection = characters.slice(1, 2);
console.log(selection)