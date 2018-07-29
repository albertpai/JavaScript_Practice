//Square every number

function squareDigits(num) {
	array = String(num).split('')
	return Number(array.map(value => Math.pow(value, 2)).join(''))
}

console.log(squareDigits(9119))