/*
Codewar 7kyu

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript

What is the difference between parseInt() and Number()?
https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number
*/

function descendingOrder(n) {
    return Number(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(1254859723))


//
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// My answer to the kodiri challange
function descendingOrder(num) {
	return Number(String(num).split('').sort().reverse().join(''))
}