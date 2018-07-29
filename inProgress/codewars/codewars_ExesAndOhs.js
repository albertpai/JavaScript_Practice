function XO(str) {
    arr = str.split('')
    arr1 = arr.filter(e => ['x', 'X'].includes(e))
    arr2 = arr.filter(e => ['o', 'O'].includes(e))
    return (arr1.length === arr2.length) ? true : false
}

console.log(XO('Xxoo'))

// My best solution. Use match and regular expressions
function XO(str) {
    return ((str.match(/[Xx]/g) || []).length === (str.match(/[Oo]/g) || []).length) ? true : false
}

console.log(XO('xdXxOoo'))

// Use match and regular expressions
// x before && is used to protect from checking the length of null.
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
console.log(XO('cccOoo'))


//Use TOLowerCase and filter
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

//TOLowerCase
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//TOLowerCase
function XO(str) {
    return str.toLowerCase().replace(/[^x]/g, "").length === str.toLowerCase().replace(/[^o]/g, "").length
}

//Use replace and RE. A clever solution.
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}
console.log(XO('xdXx46Oouo'))
