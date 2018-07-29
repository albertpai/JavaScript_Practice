function sum (array) {
    return array.reduce(function(total, value){
        return total + value
    })
}
console.log(sum([2, 4, 1]));


//
function sum (array) {
    return array.reduce((total, value) => total + value)
}
console.log(sum([2, 4]));
