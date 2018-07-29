//Return the lengh of the shortest word in a string

function findShort(string) {
	array = string.split(' ').map(v => v.length)
	return Math.min(...array)
}