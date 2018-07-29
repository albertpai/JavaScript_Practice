//find the sume of arr = [1,2,3,4] with forEach, map and reduce.

//forEach
arr = [1,2,3,4]
function sum1(){
    let total = 0
    arr.forEach(v => total += v)
    return total
}
console.log(sum1(arr))

//map
arr = [1,2,3,4]
function sum2(){
    let total = 0
    arr.map(v => total += v)
    return total
}
console.log(sum2(arr))

//reduce
arr = [1,2,3,4]
function sum3(){
    return arr.reduce((acc, v)=> acc + v)
}
console.log(sum3(arr))

//

