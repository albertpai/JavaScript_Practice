/*
7kyu Codewar
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  var vowelsCount = 0;
  var array = str.split('');
  console.log(array)
  array.forEach(function (item) {
    if (item == 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
      vowelsCount += 1
    }
  })
  // enter your majic here
  return vowelsCount;
}

console.log(getCount('eeff'))

//
function getCount(str) {
  var vowelsCount = 0;
  var array = str.split('');
  array.forEach(item => {
    if (item == 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') return vowelsCount += 1
  })
  // enter your majic here
  return vowelsCount;
}

console.log(getCount('hdtkfew'))

// Guru's solution
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(letter => vowels.includes(letter)).length;
}

//
function getCount(str) {
  for (var n = 0, i = 0; i < str.length; i++) {
    if (~[97, 101, 105, 111, 117].indexOf(str.charCodeAt(i))) n++
  }
  return n
}
console.log(getCount('seflijpoijdwpoaw'))

// Excellent salution!
function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}
console.log(getCount('ssssssssss'))


// great solution!
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
console.log(getCount('ssssssssss'))


//
const getCount = s => (s.match(/[aeiou]/ig) || []).length
console.log(getCount('sssasis'))

//
const getCount = (str) => (str.match(/[aeiou]/g) || []).length;

//
const getCount = (str) => str.concat("a").match(/[aeiou]/g).length - 1;

//
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u']; // create array of vowels

  str.split('').forEach(function (item) { //convert string given to array and iterate it
    if (vowels.indexOf(item) >= 0) { vowelsCount++; } // check if each letter is in vowels array and ads 1 if is
  });

  return vowelsCount;
}

