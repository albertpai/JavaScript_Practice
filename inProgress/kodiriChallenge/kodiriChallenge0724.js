//

function howManyCapitals(string) {
	let a = string.split('')
	return a.map(v => {return v === v.toUpperCase()}).length
}

console.log(howManyCapitals(Rockabc))


//

function divideByNextNumber(numberStr) {
	let a = Number(numberStr.split(''))
	let b = String(Number(numberStr)*10).split('').shift().push('1')
	return a.map((v,i) => {Math.floor(a[i] / b[i])})
}
console.log (divideByNextNumber('200'))


//
function divideByNextNumber(numberStr) {
	let a = Number(numberStr.split(''))
	let b = String(Number(numberStr)*10).split('').shift().push('1')
	return a.map((v,i) => {Math.floor(a[i] / b[i])})
}
console.log (divideByNextNumber('200'))