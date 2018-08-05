/*
getDivisibleValues (12) = [1, 2, 3, 4, 6, 12]
*/

// First try
function getDivisibleValues(number) {
    let arr = []
    for (i = 0; i <= number; i++) {
        if (number % i === 0) {
            arr.push(i)
        }
    }
    return arr
}


//second try
function getDivisibleValues(num) {
    let result = []
    for (i = 0; i <= num; i++) {
        if (num % i === 0) {
            result.push(i)
        }
    }
    return result
}

console.log(getDivisibleValues(247))


//
function getDivisibleValues(num) {
    const factors = Array(num + 1)
    return Array.from(factors, (c, i) => i)
        .filter(c => num % c === 0)
}
console.log(getDivisibleValues(12))

//
function getDivisibleValues(num) {
    const factors = Array(num)
    return Array.from(factors, (c, i) => i + 1).filter(c => num % c === 0)
}
console.log(getDivisibleValues(12))


//
function getDivisibleValues(num) {
    return Array.from(Array(num), (c, i) => i + 1).filter(c => num % c === 0)
}
console.log(getDivisibleValues(12))

//
function getDivisibleValues(num) {
    return Array.from(Array(num), (_, i) => i +1). filter (v => num % v === 0)
}
console.log(getDivisibleValues(15))

//
function getDivisibleValues(numbers) {
return Array.from(Array(numbers), (_,i)=> i + 1)
.filter (v => numbers % v === 0 )
}
console.log(getDivisibleValues(15))