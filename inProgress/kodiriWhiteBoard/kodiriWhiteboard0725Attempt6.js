const wild = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 7,
            f: {
                g: -2,
                h: 5,
            }
        }
    }
}


let sum = 0;
function add(nest) {
    for (i in nest) {
        if (isNaN(nest[i])) {
            add(nest[i])
        }
        else {
            sum += nest[i]
        }
    }
    return sum
}

console.log(add(wild))