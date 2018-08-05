// How many capitals

const a = 'jQuery is too old'
const b = 'ReactJS rocks'

function howManyCapitals (str) {
    let c = str.split('').filter(v => v === v.toUpperCase()).pop(' ')
    let d = c.length
    return d
}

console.log(howManyCapitals(b))


//Use filter
const a = 'jQuery is too old'
const b = 'ReactJS rocks'

function howManyCapitals (str) {
    return str.split('').filter(v => v === v.toUpperCase() && v !== ' ').length
}

console.log(howManyCapitals(b))


//Use Reduce
const a = 'jQuery is too old'
const b = 'ReactJS rocks'

function howManyCapitals (str) {
    newStr = str.split('').reduce(
        (total, cur) => {
            if (cur === cur.toUpperCase() && cur !== ' '){
                total.push(cur)
            }
            return total
        }, [])
    return newStr.length
}
console.log(howManyCapitals(a))


//
const a = 'Hello World'

function howManyCapitals(string) {
	let array = string.split('').reduce((acc, cur)=>{
		if (cur === cur.toUpperCase() && cur !== ' '){
		acc.push(cur)
		}
		return acc
	},[])
	return array.length
}

console.log(howManyCapitals(a))