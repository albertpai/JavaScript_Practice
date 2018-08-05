/*
Create a function "enterMatrix" that always return 6

enterMatrix ((bluePill, redPill) => {
    return bluePill * redPill
})(3);

*/

//Attempt 1
enterMatrix ((bluePill, redPill) => {
    bluePill = toString(bluePill).split('').map(v => v === 'l').length
    redPill = toString(redPill).split('').map( v => v === 'l').length
    return bluePill * redPill
})(3);

console.log(enterMatrix('bluePill', 'redPill'))


//Attemp 2. Use IIFE.
var enterMatrix = ((bluePill, redPill = 2) => {
    return console.log(bluePill * redPill)
})(3);


//Attempt 3. Use IIFE. Ensure there is no exception.
enterMatrix = ((bluePill, redPill) => {
    redPill = 6 / bluePill;
    return bluePill * redPill
})(3);
