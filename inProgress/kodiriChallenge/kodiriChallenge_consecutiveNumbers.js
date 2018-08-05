// Second try, fails
function areNumbersConsecutive(num) {
    num.split('').reduce((v, i) => {
        if ((i !== num.length) && (Number(num[i + 1]) - v === 1)) {
            return total + 1;
        } else {
            return total;
        }
    }, 0)
        (total === num.length - 1) ? true : false
}

console.log(areNumbersConsecutive('123'))


//Third Try

function areNumbersConsecutive(num) {
    let total = 0
    num.split('').reduce(
        (acc, c, i) => {
            if (Number(num[i+1]) - c === 1 && i != num.length) {
                total = acc + 1
            }
            return total
        }
        , 0)
    if (total === num.length - 1) {
        return true
    }
    else {
        return false
    }
}

console.log(areNumbersConsecutive('234567'))


//Fourth try

function areNumbersConsecutive(num) {
    let count = 0
    num.split('').forEach((c, i) => {
            if (Number(num[i+1]) - c === 1 && i != num.length) {
                count += 1
            }
            return count
        })
    return (count === num.length - 1)? true : false
}

console.log(areNumbersConsecutive('234567'))