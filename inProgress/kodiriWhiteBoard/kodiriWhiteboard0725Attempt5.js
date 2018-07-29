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
    for (var i in nest) {
        if (isNaN(nest[i])) {
            for (var j in nest[i]) {
                if (isNaN(nest[i][j])) {
                    for (var k in nest[i][j]) {
                        if (isNaN(nest[i][j][k])) {
                            for (var l in nest[i][j][k]) {
                                console.log(nest[i][j][k][l])
                                sum += nest[i][j][k][l]
                            }
                        }
                        else {
                            sum += nest[i][j][k]
                        }
                    }
                    return sum
                }
                else {
                    sum += nest[i][j]
                }
            }
            return sum
        }
        else {
            sum += nest[i]
        }
    }
    return sum
}

console.log(add(wild))
