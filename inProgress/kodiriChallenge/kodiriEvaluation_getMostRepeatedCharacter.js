//Get the most repeated characters
//Check!

//Use Reduce
const a = 'kodiri'
const b = 'bootcamp'
const c = ' '
const d = 'JavaScript is very nice'

function getMostRepeatedCharacter(str) {
    return str.split('')
        .reduce((total, cur) => {
            total[cur] = (total[cur] || 0) + 1
            return total
        }, {}
        )
    // .sort(function (a, b) {
    //     return a - b;
    // })
}

console.log(getMostRepeatedCharacter(d))


//https://stackoverflow.com/questions/22590023/finding-the-most-frequent-character-in-a-string-javascript
var exp = 'Hello World';
var expCounts = {};
var maxKey = '';
for (var i = 0; i < exp.length; i++) {
    var key = exp[i];
    if (!expCounts[key]) {
        expCounts[key] = 0;
    }
    expCounts[key]++;
    if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);


// Check!!
const a = 'Hello World'

function mostReapeated(str) {
    var maxKey = ''
    str.split('').reduce(
        (total, item) => {
            if (!total[item]) {
                total[item] = (total[item] || 0) + 1;
            }
            if (maxKey == '' || total[item] > total[maxKey]) {
                maxKey = item;
            }
            return total
        }, {})
    return console.log(`${maxKey}": "${total[item]}`)
}

console.log(mostReapeated(a))