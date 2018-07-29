// assignment
function amISexy (value1, value2){
    return value1 = value2
}
console.log(amISexy(1,1))

// assignment
function amISexy (value1, value2){
    return value1 = value2
}
console.log(amISexy(1,2))

// assignment is always truthy
function amISexy (value1, value2){
    return value1 = value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,2))

//Double equal signs checkes equality
function amISexy (value1, value2){
    return value1 == value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,2))


//Double equal signs convert types automatically
function amISexy (value1, value2){
    return value1 == value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,'1'))

//
function amISexy (value1, value2){
    return value1 == value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,true))

//
function amISexy (value1, value2){
    return value1 == value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(0,false))


// Triple equal sings checkes identity (types and values)
// Triple costs less resources than double equals and works more efficiently!
function amISexy (value1, value2){
    return value1 === value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,true))


//
function amISexy (value1, value2){
    return value1 === value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(1,'1'))


//
function amISexy (value1, value2){
    return value1 === value2?
        'Yes, you are' :
        'No, you are not';
}
console.log(amISexy(32321,'32321'))