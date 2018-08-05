/*
How to merge two arrays in JavaScript and de-duplicate items
https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
*/

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
// Merges both arrays and gets unique items
var array3 = array1.concat(array2).unique(); 

console.log(array3)


// https://gist.github.com/telekosmos/3b62a31a5c43f40849bb

var uniqueArray = function(arrArg) {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
  };
  
  var uniqEs6 = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
  }
  
  var test = ['mike','james','james','alex'];
  var testBis = ['alex', 'yuri', 'jabari'];
  console.log(uniqueArray(test.concat(testBis)));

  //
  [ ...new Set([1, 2, 3, 1, 2, 3]) ] // [1, 2, 3]