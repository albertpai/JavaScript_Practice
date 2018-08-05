/*
removeCharacters('a!b!c', ['!']) === 'abc'; //Nothing returned

removeCharacters(
    'a#b#!c', ['#', '!']
) === 'abc'; //Nothing returned

removeCharacters('a#b#!c', ['?']) === 'a#b#!c'; //Nothing returned

removeCharacters('a#b#!c', []) === 'a#b#!c'; //Nothing returned
We want to strip some characters out of the given string
*/

//unfinished
function removeCharacters(string, blackList) {
	let remove = blackList.split('');
	let newStr = string.split('').map(
		cur => {
			if (remove.includes(cur)) {
				string.replaces(/cur/g, '');
			}
			return string;
		});
	return newStr.join('');
}

console.log(removeCharacters(a));

//
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	newStr.reduce((_, cur, i) => {
		if (blackList.includes(cur)) {
			return newStr.splice(i, 1)
		} else
			return newStr
	}, [])
	return newStr.join('')
}
console.log(removeCharacters('a#b#!c', ['#', '!']));

//
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	newStr.reduce((_, cur, i) => { (blackList.includes(cur)) ? newStr.splice(i, 1) : newStr }, [])
	return newStr.join('')
}
console.log(removeCharacters('a#b#!c', ['#', '!']));

//

function removeCharacters(string, blackList) {
	let newStr = string.split('');
	newStr.reduce((_, c, i) => { (blackList.includes(c)) ? newStr.splice(i, 1) : newStr }, [])
	return newStr.join('')
}
console.log(removeCharacters('a!b!c', ['!']));

//
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	newStr.reduce((acc, c, i) => {
		(blackList.includes(c)) ? acc.push(newStr.splice(i, 1)) : acc.push(newStr)
	}, [])
	return newStr.join('')
}

console.log(removeCharacters('a!##b#!c', ['#', '!']));

//
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	return newStr.reduce((acc, c) => {
		if (!blackList.includes(c)) {
			acc.push(c)
		}
		return acc
	}, []).join('')
}

console.log(removeCharacters('a!##b#!c', ['#', '!']));



//
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	return newStr.reduce((acc, c, i) => {
		if (!blackList.includes(c)) {
			acc.push(c)
			return acc
		}
		return acc
	}, []).join('')
}

console.log(removeCharacters('a!##b#!c', ['#', '!']));


//Short version!!
function removeCharacters(string, blackList) {
	let newStr = string.split('')
	return newStr.filter((c) => !blackList.includes(c)).join('');
}

console.log(removeCharacters('a!##b#!c', ['#', '!']));
