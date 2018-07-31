// Spread operator = Gather operator = Rest operator
// Good for interview!
let characters = ['Donald', 'Kim', 'Boris'];
let newCharacters = ['Tom', 'Jerry'];
console.log([...characters, ...newCharacters])


// Use forEach to replace the first two items
let characters = ['Donald', 'Kim', 'Boris'];
let newCharacters = ['Tom', 'Jerry'];
newCharacters.forEach((newCharacters, index) => {
    characters[index] = newCharacters;
})
console.log(characters)


// Use forEach and splice to do the same
let characters = ['Donald', 'Kim', 'Boris'];
let newCharacters = ['Tom', 'Jerry'];
newCharacters.forEach((newCharacters, index) => {
    characters.splice(index, 1, newCharacters);
})
console.log(characters)


//Use slice to copy an array
let characters = ['Donald', 'Kim', 'Boris'];
let newArray =characters.slice(0)
console.log(newArray)


//reverse
let characters = ['Donald', 'Kim', 'Boris'];
characters.reverse();
console.log(characters)

//Use reverse to replace Chris with Tom and replace Arnold with Jerry
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];

characters.reverse().splice(0, 2, 'Tom', 'Jerry')
console.log(characters.reverse())

// Try pop and push
// How to replace the last two items in the first array with Tom and Jerry?
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];

characters.pop(newCharacters[4]);
characters.pop(newCharacters[5]);
characters.push(newCharacters[0]);
characters.push(newCharacters[1]);
console.log(characters)

// An experiment that needs to be debugged
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];
newCharacters.forEach((newCharacter, index)=>{
    characters[characters.length - index] = newCharacter
});
console.log(characters)

//
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];
newCharacters.forEach((newCharacter, index)=>{
    characters[characters.length - 1 - index] = newCharacter
});
console.log(characters)


// How to replace the last two items in the first array with Tom and Jerry (in order)?
// Use forEach and splice
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];
newCharacters.forEach(function (value, index) {
    characters.splice((index + 4), 1, value)
})
console.log(characters)

// Use concat
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];
characters.splice(4, 2);
characters = characters.concat(newCharacters);
console.log(characters)


// Use spread operator
let characters = ['Donald', 'Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom', 'Jerry'];
characters3 = [...characters, ...newCharacters];
console.log(characters3)


//How to replace elements in array with elements of another array
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var anotherArr = [1, 2, 3];
Array.prototype.splice.apply(arr, [5, anotherArr.length].concat(anotherArr));
console.log(arr);


// Deal with objects
// Add a property 'age'
let character = {
    firstName: 'Donald',
    lastName: 'Trump'
}
character.age = 20
console.log(character) 

// Modify a property
let character = {
    firstName: 'Donald',
    lastName: 'Trump'
}
character.firstName = 'Kim'
console.log(character) 

// delete an itme in an object
let character = {
    firstName: 'Donald',
    lastName: 'Trump'
}
delete character.firstName
console.log(character) 
