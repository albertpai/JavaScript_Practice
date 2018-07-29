
var numbers = [1, 2, 3, 4, 5, 5]

let sum = numbers.reduce((acc, value) => {
    return acc + (value ? value > 3 : 0)
}, 10)

console.log(sum)

//
var numbers = [1, 2, 3, 4, 5, 5]

let sum = numbers.reduce((acc, value) => {
    if (value > 3){acc.push(value)}
    return acc
}, [])

console.log(sum)

//Check!
var numbers = [1, 2, 3, 4, 5, 5]

let sum = numbers.reduce((acc, value) => {
    if (value > 3){acc.push(value)}
    return acc
}, []).reduce((acc, value) => {
    return acc + value;
})

console.log(sum)