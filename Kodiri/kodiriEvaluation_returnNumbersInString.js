// Return the numbers in a string

function getNumber(string) {
    array = string.split('')
        .filter(item => !isNaN(item))
        .join('')
    return array
}

console.log(getNumber('123abc4de56'))

//
function getNumber(string) {
    return string.split('').filter(item => !isNaN(item)).join('')
}

console.log(getNumber('123abc4de56'))