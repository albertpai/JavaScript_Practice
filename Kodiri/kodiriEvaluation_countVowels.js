//See also codewars_numberOfVowels.js
//My answer to kodiri challenge review
function getCount(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u']
	return str.split('').filter(v=>vowels.includes(v)).length
}

console.log(getCount('seflijpoijdwpoaw'))

//
function getCount(word) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    return word.split('').filter(v => vowels.includes(v)).length
}

console.log(getCount('aeriougrt3'))