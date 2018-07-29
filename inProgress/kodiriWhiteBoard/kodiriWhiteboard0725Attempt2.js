wild = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 7,
            e1: 10,
            f: {
                g: -2,
                h: 5,
            }
        }
    }
}


function sum(wild) {
    Object.values(wild).reduce((acc1, v1) => {
        if (typeof v1 === 'object') {
            Object.values(v1).reduce((acc2, v2) => {
                if (typeof v2 === 'object') {
                    Object.values(v2).reduce((acc3, v3) => {
                        if (typeof v3 === 'object') {
                            Object.values(v3).reduce((acc4, v4) => {
                                return acc4 + v4;
                            })
                        }
                        else {
                            return acc3 + v3
                        }
                    })
                }
                else {
                    return acc2 + v2
                }
            })
        }
        else {
            return acc1 + v1
        }
    })
}

console.log(sum(wild));



/*mistakes:
1. Typo: Object
2. Typo: typeof === 'object'
3. Typo: Closing parenthesis of reduce
4. Level of recursion
*/
