//Return the lengh of the shortest word in a string

const str = 'It turns out random cases can become successful'

function findShort(string) {
	array = string.split(' ').map(v => v.length)
	return Math.min(...array)
}

console.log(findShort(str))


//
function findShort(str) {
	array = str.split(' ').map(v=>v.length)
    return Math.min(...array)
}
