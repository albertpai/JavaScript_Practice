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


let sum1, sum2, sum3, sum4;
for (var i in wild) {
    if (isNaN(wild[i])) {
        for (var j in wild[i]) {
            if (isNaN(wild[i][j])) {
                for (var k in wild[i][j]) {
                    if (isNaN(wild[i][j][k])) {
                        for (var l in wild[i][j][k]) {
                            sum4 += wild[i][j][k][l]
                        }
                    }
                    else { sum3 += wild[i][j][k] + sum4 }
                }
            }
            else { sum2 += wild[i][j] + sum3 }
        }
    }
    else { sum1 += wild[i] + sum2 }
}

console.log(sum1)

/*Test
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


for (i in wild) {
    if (i === obj){
        console.log(wild[i].length)
    }
    else {
        console.log(wild[i])
*/