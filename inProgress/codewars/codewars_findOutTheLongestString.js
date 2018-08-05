/*
Codewar 7kyu
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ``
*/

function longest(s1, s2) {
    s1.split('')
    s2.split('')
    let s3 = s1.concat(s2)
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let output = []
    alphabet.forEach((v) => { if (s3.includes(v)) { return output.push(v) } })
    return output.join('')
}

console.log(longest('wegfergkrjgnreog', 'afekaenbfok'))


//
function longest(s1, s2) {
    let str = s1.split('').concat(s2.split(''))
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let output = []
    alphabet.forEach((v) => { if (str.includes(v)) { return output.push(v) } })
    return output.join('')
}
console.log(longest('wegfergkrjgnreog', 'afekaenbfok'))


//guru's solution. Use Set.
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

//clever solution. Use Set.
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

//Use Set
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}

//Use regular expression
function longest(s1, s2) {
    return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

//Brilliant solution. Use sort and filter.
function longest(s1, s2) {
    return (s1+s2).split('').sort().filter((a,b,c)=>a!==c[b-1]).join('');
  }

// Use sort and filter.
const longest = (s1, s2) => Array.from(s1 + s2)
  .sort()
  .filter((x, i, a) => x !== a[i-1])
  .join('');