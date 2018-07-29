/*
Square Every Digit

squareDigits(9119) === 811181; //returned 9117
You are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(x) {
    string = x.toString();
    array = string.split("");
    array2 = array.map(item =>  Math.pow(item, 2));
	return Number(array2.join(""))
}

console.log(squareDigits(9119))


//
function squareDigits(num) {
	array = String(num).split('')
	return Number(array.map(value => Math.pow(value, 2)).join(''))
}

console.log(squareDigits(9119))

//
function squareDigits(number){
    a = String(number).split('')
        .map(v => Math.pow(v, 2))
        .join('')
    return Number(a)
}

console.log(squareDigits(9119))

//
function squareDigits(number){
return Number(String(number).split('')
       .map(v => Math.pow(v, 2))
       .join(''))
}

console.log(squareDigits(9119))