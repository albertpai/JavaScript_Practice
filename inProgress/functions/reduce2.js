function sum (arr) {
    arr.reduce ((acc, v) => {
        return acc + v;})
}

let a = [1, 2, 3];

console.log(sum(a))