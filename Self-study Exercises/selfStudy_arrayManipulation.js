//Multi-Dimensional arrays

let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray[2][1]);

//.push()
let fruits = ['Apple', 'Banana'];
let addOneItemToEndOfArray = fruits.push('Orange');
console.log(fruits);

//.pop()
let removeLastItemOfArray = fruits.pop();
console.log(fruits);



//.push()
let myArray2 = [["John", 23], ["cat", 2]];
myArray2.push(["dog",3]);
console.log(myArray2);

//.pop()
let removedFromMyArray = myArray2.pop();
console.log(removedFromMyArray);

//.shift()
var removeFirstItemFromArray=myArray2.shift();
console.log(removeFirstItemFromArray);

//.unshift() Add elements in front of an array.
myArray2.unshift(["Paul",35]);
console.log(myArray2);


//use .push and .unshift
let myList=[];
myList.push(["juice", 2]);
myList.push(["Milk", 1]);
myList.unshift(["eggs", 6]);
myList.push(["broccoli", 1]);
myList.unshift(["carrots", 2]);
console.log(myList);