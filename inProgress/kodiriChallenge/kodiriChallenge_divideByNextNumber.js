

//Use forEach
var array2 = [];
function divideByNextNumber(numberStr) {
    var array = numberStr.split('');
    array.forEach(function (value, index) {
        digit = Math.floor(value / array[index + 1])
        return array2.push(digit)
    })
    array2.pop();
    array2.push(array[numberStr.length - 1]);
    return array2.join('')
}

console.log(divideByNextNumber('86421'))


//Use Map, push, pop
function divideByNextNumber(numberStr) {
    array = numberStr.split('')
    array.push('1')
    array2 = array.map((item, index) => {
        return Math.floor(Number(item) / Number(array[index + 1]))
    })
    array2.pop()
    return array2.join('')
}

console.log(divideByNextNumber('8425'))

//Use Map and re-assignment
function divideByNextNumber(numberStr) {
    array = numberStr.split('')
    array2 = array.map((item, index) => {
        let divisor = Number(array[index + 1])
        return Math.floor(Number(item) / divisor)
    })
    array2[array2.length - 1] = numberStr[numberStr.length - 1]
    return array2.join('')
}

console.log(divideByNextNumber('8433'))


//Use map pop push
function divideByNextNumber(numberStr) {
    array = numberStr.split('');
    let divisor = array.map((item, index) => { return array[index + 1] })
    divisor.pop();
    divisor.push('1');
    let quotient = [];
    for (i = 0; i < numberStr.length; i++) {
        quotient.push(Math.floor(numberStr[i] / divisor[i]))
    }
    x = quotient.join('')
    return x;
}

console.log(divideByNextNumber('8433'))


//Use map, push, slice and pop

function divideByNextNumber(numberStr) {
    let array = numberStr.split('')
    array.push('1')
    quotient = array.map((e, i) => Math.floor(Number(array.slice(i, i + 1)) / Number(array.slice(i + 1, i + 2))))
    quotient.pop()
    return quotient.join('')
}

console.log(divideByNextNumber('823453'))


// Use map and mathematical operation. A more tidy approach.
function divideByNextNumber(numberStr) {
    let dividend = numberStr.split('')
    let divisor = String((Number(numberStr) * 10) + 1).split('')
    divisor.shift()
    return dividend.map((v, i) => Math.floor((dividend[i] / divisor[i]))).join('')
}

console.log(divideByNextNumber('1246478'))


// Use map and mathematical operation.  
function divideByNextNumber(numberStr) {
    let dividend = numberStr.split('')
    let divisor = String((Number(numberStr) * 10) + 1).split('')
    divisor.shift()
    return dividend.map((v, i) => ~~(dividend[i] / divisor[i])).join('')
}

console.log(divideByNextNumber('1246478'))