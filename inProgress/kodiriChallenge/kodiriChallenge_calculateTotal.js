const foo = {
    a: 1,
    b: {
        c: -2,
        d: 4
    },
    e: 3
}

function calculateTotal(object) {
    return Object.values(object).reduce(
        (acc, cur) => {
            if (typeof cur === 'object') {
                acc += calculateTotal(cur)
            } else {
                acc += cur
            }
            return acc
        }
        , 0)
}

console.log(calculateTotal(foo))

//
const foo = {
    a: 1,
    b: {
        c: -2,
        d: 4
    },
    e: 3
}

function calculateTotal(object) {
    return Object.values(object).reduce((a, c) => {
        (typeof c === 'object') ? a += calculateTotal(c) : a += c
        return a
    }, 0)
}

console.log(calculateTotal(foo))


//
const foo = {
    a: 1,
    b: {
        c: -2,
        d: 4
    },
    e: 3
}

function calculateTotal(object) {
    let sum = 0
    Object.values(object).reduce((a,c)=> {return
        (typeof c === 'object')? sum += calculateTotal(c): sum+=a ,0})
}

console.log(calculateTotal(foo))
