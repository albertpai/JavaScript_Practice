var newString;
function repeatStr(n, string) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(string);
    }
    return newString = array.join("");
}
console.log(repeatStr(3, "£"));