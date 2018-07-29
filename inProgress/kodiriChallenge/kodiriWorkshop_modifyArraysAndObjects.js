//
let characters = ['Donald','Kim'];
characters.push('Boris');
console.log(characters) 

//push

//unshift

// delete
let characters = ['Donald','Kim', 'Boris'];
delete characters[1];
console.log(characters) 

// splice: returning the remaining elements after deletion
let characters = ['Donald','Kim', 'Boris'];
characters.splice(1,1);
console.log(characters) 

// splice: returning the deleted elements
let characters = ['Donald','Kim', 'Boris'];
a = characters.splice(1,1);
console.log(a) 


// splice: adding elements to a specific place and push other items to the right
let characters = ['Donald','Kim', 'Boris'];
characters.splice(1,0,'Theresa');
console.log(characters) 

// splice: adding an element and delete one item = replace
let characters = ['Donald','Kim', 'Boris'];
characters.splice(1,1,'Theresa');
console.log(characters) 

// splice: adding elements
let characters = ['Donald','Kim', 'Boris'];
characters.splice(2, 0, 'Theresa', 'Emmanuel');
console.log(characters) 

// splice: remove everything else
let characters = ['Donald','Kim', 'Boris'];
characters.splice(1);
console.log(characters) 

// slice: declare a new variable. The original array will not be changed.
let characters = ['Donald','Kim', 'Boris'];
let selection = characters.slice(1,2);
console.log(selection) 


// Spread Operators + Gather operator = Gather operator
let characters = ['Donald','Kim', 'Boris'];
let newCharacters = ['Tom','Jerry'];
console.log([...characters, ...newCharacters]) 


//forEach 
let characters = ['Donald','Kim', 'Boris'];
let newCharacters = ['Tom','Jerry'];
newCharacters.forEach((newCharacters, index) => {
    characters[index] = newCharacters;
})
console.log(characters) 


//splice 
let characters = ['Donald','Kim', 'Boris'];
let newCharacters = ['Tom','Jerry'];
newCharacters.forEach((newCharacters, index) => {
    characters.splice(index, 1, newCharacters);
})
console.log(characters) 

//reverse
let characters = ['Donald','Kim', 'Boris'];
characters.reverse();
console.log(characters) 

// How to replace the last two items in the first array with Tom and Jerry?
let characters = ['Donald','Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom','Jerry'];

characters.pop(newCharacters[4]);
characters.pop(newCharacters[5]);
characters.push(newCharacters[0]);
characters.push(newCharacters[1]);
console.log(characters) 

// How to replace the last two items in the first array with Tom and Jerry?
//Not working
let characters = ['Donald','Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom','Jerry'];
newCharacters.forEach(function(value, index){
    characters.splice((index+4), 1, array[index]);
})
console.log(characters) 


// How to replace the last two items in the first array with Tom and Jerry?
//Not working
let characters = ['Donald','Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom','Jerry'];
characters.splice(4, 2);
characters = characters.concat(newCharacters);

console.log(characters) 



// How to replace the last two items in the first array with Tom and Jerry?
//Not working
let characters = ['Donald','Kim', 'Boris', 'Jameson', 'Arnold', 'Chris'];
let newCharacters = ['Tom','Jerry'];
characters3 = [...characters, ...newCharacters];

console.log(characters3) 



//How to replace elements in array with elements of another array
var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var anotherArr = [ 1, 2, 3 ];
Array.prototype.splice.apply(arr, [5, anotherArr.length].concat(anotherArr));
console.log(arr);

// delete an itme in an object
 let character = {
     firstName: 'Donald',
     lastName: 'Trump'
 }
 delete character
 console.log(characters) 
