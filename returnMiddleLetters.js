//Return the middle letter(s) from a given word

//using .slice
let word = "ABCDEF"
var array = word.split("")
middleIndex = Math.floor(array.length / 2)
if (array.length % 2 === 0) {
    var middleLetters = array.slice(middleIndex, middleIndex + 2);
}
else {
    var middleLetters = array.slice(middleIndex, middleIndex + 1);
}

console.log(middleLetters);


//using while loop, .shift() and .pop()
var word = "Claire"
var array = word.split("")
while (array.length > 2) {
    array.shift();
    array.pop();
}

console.log(array);


//Turn the previous code into a function

function middleWords(word) {
    var array = word.split("")
    while (array.length > 2) {
        array.shift();
        array.pop();
    }
    return console.log(array);
}

middleWords("Claire")