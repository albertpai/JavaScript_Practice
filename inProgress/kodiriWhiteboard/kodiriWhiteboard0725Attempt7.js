const wild = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 7,
            f: {
                g: -2,
                h: 5
            }
        }
    }
}

// Put sum inside the function.
// Add sum to Line 22.

function add(nest) {
    let sum = 0;
    for (var i in nest) {
        if (isNaN(nest[i])) {
            sum += add(nest[i])
        }
        else {
            sum += nest[i]
        }
    }
    return sum
}

console.log(add(wild))