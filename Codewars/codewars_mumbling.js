/*
Codewars 7kyu
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
*/

//
function accum(s) {
    let array = s.split('').reduce((acc, v, i) => {
        if (i === 0) {
            acc.push(v.toUpperCase())
            return acc
        }
        else {
            acc.push("-" + v.toUpperCase())
            for (j = 1; j <= i; j++) {
                acc.push(v.toLowerCase())
            }
            return acc
        }
    }, [])
    return array.join('')
}
console.log(accum('abcde'))

//
function accum(s) {
    return s.split('').reduce((acc, v, i) => {
        if (i === 0) {
            acc.push(v.toUpperCase())
        }
        else {
            acc.push("-" + v.toUpperCase())
            for (j = 1; j <= i; j++) {
                acc.push(v.toLowerCase())
            }
        }
        return acc
    }, []).join('')
}
console.log(accum('abcde'))

//Best practice
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum('abcde'))

//Clever
function accum(s) {
    return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
}
console.log(accum('abcde'))