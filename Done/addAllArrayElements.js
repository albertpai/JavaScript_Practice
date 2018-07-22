var sum = 0;
function add(array) {
    array.forEach(v => sum += v);
    return sum;
}

console.log(add([1,2,3,4,5]))