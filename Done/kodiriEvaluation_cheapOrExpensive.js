/*
isFruitCheap({
    fruit: 'Apple',
    price: '2',
}) === 'expensive'

isFruitCheap({
    fruit: 'Banana',
    price: '1.49',
}) === 'cheap'

return 'cheap' is the price or below £2.
return 'expensive' if the price is higher.
*/

//normal if statement
function isFruitCheap(fruits) {
	if (Number(fruits.price) < 2){
		return 'cheap'
	}
	else {
		return 'expensive'
	}
}

console.log(isFruitCheap({
    fruit: 'Apple',
    price: '2',
}))

console.log(isFruitCheap({
    fruit: 'Banana',
    price: '1.49',
}))


//Shorthand if statement
function isFruitCheap(fruits) {
    return Number(fruits.price) < 2 ? 'cheap' : 'expensive'
}

console.log(isFruitCheap({
    fruit: 'Apple',
    price: '2',
}))

console.log(isFruitCheap({
    fruit: 'Banana',
    price: '1.49',
}))