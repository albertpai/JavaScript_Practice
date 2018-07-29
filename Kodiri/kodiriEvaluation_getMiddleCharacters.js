//Return the middle character(s) from a given word

//Use slice
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


//Use a while loop, .shift() and .pop()
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


//Use slice
function getMiddle(word) {
    array = word.split('')
    if (word.length % 2 === 0) {
        var middle = array.slice(word.length / 2 - 1, word.length / 2 + 1)
    }
    else {
        var middle = array.slice(parseInt(word.length / 2), parseInt(word.length / 2) + 1)
    }
    return middle.join('')
}
console.log(getMiddle("Claire"))


//Use slice
function getMiddle(word) {
    let middle = Math.floor(word.length/2)
    if (word.length % 2 === 0)
    return word.split('').slice(middle -1 , middle + 1).join('')
    else
    return word.split('').slice(middle, middle + 1).join('')
}
console.log(getMiddle("Claire"))
console.log(getMiddle("Hello_World"))


//Use a for loop
function getMiddle(word) {
    let array = word.split('')
    for (i=0; array.length>2; i++) {
        array.pop()
        array.shift()
        // array.pop().shift() is not allowed
    }
    return array.join('')
}
console.log(getMiddle("Claire"))
console.log(getMiddle("Hello_World"))