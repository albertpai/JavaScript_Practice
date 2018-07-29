function getNiceNumber(number) {
    return Math.floor(number);
}
console.log(getNiceNumber(5.934894923034))


function getNiceNumber(number) {
    return Math.ceil(number);
}
console.log(getNiceNumber(5.934894923034))


function getNiceNumber(number) {
    return number.toFixed(number);
}
console.log(getNiceNumber(5.934894923034))

function getNiceNumber(number) {
    return number.toFixed(number) - 4;  // But this is a string
}
console.log(getNiceNumber(5.934894923034))

function getNiceNumber(number) {
    return Numbert(number.toFixed(3));
}
console.log(getNiceNumber())

function getNiceNumber(number) {
    return parseFloat(number.toFixed('3.14'));
}

function getNiceNumber(number) {
    return parseInt('123abc456')
}

function getNiceNumber(number) {
    return Number('123abc456')
}

function getNiceNumber(number) {
    return Math.round(Math.random()*10)

}
console.log(getNiceNumber())

// Heed the probability of random number
function getNiceNumber(names) {
    let randomIndex = Math.floor(Math.random()*names.length);
    return names[randomIndex];
}
console.log(getNiceNumber(['Donald', 'Kim', 'Boris']))

//
