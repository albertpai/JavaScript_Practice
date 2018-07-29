/*
Codewar 7Jyu

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


// My solution. Use map and split + reverse + join
function reverseWords(str) {
    array = str.split(' ')
    array2 = array.map(item => { return item.split('').reverse().join('') })
    return array2.join(' ')
}

console.log(reverseWords('hello there!'))

// A shorter version. Use map and split + reverse + join
function reverseWords(str) {
    wordArray = str.split(' ').map(item => { return item.split('').reverse().join('') })
    return wordArray.join(' ')
}

console.log(reverseWords('hello there!'))


// deal with strings only
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWords('hello there!'))


//
function reverseWords(str) {
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}
console.log(reverseWords('hello there!'))
