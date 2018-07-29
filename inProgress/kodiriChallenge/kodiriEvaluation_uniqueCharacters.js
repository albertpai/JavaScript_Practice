//Kodiri expert
//Check if all characters of a word is unique.

//incomplete
function hasUniqueChars(str) {
    strLength = str.length
    array = str.toLowerCase().split('').sort()
    array2 = array.forEach((v,i) => v != str[i-1])
    return array2
    //.length === strLength
}

console.log(hasUniqueChars(' nAa'))
console.log(hasUniqueChars('abcdef'))
console.log(hasUniqueChars('++-'))