/*
Descending Order

descendingOrder(0) === 0; 

descendingOrder(1) === 1; 

descendingOrder(123456789) === 987654321; 
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221
*/

//My answer to practice
function descendingOrder(num) {
    newNum = num.toString().split('').sort().reverse().join('')
	return Number(newNum)
}

console.log(descendingOrder(48978924))