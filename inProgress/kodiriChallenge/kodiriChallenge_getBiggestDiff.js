function getBiggestDiff(string) {
    let newStr = string.split('')
    return Math.max(...newStr) - Math.min(...newStr)
}

console.log(getBiggestDiff('1361645385'))

//

function divisibles (number){
    let arr = []
    for (i=1; i<= number; i++) {
        if (Number.isInteger(number / i)){
            arr.push(i)
        }
    }
    return arr
}

console.log(divisibles(12))

//
function getBiggestDiff(string) {
	let newStr = string.split('')
	return Math.max(...newStr) - Math.min(...newStr)
}

console.log(getBiggestDiff('1361645385'))