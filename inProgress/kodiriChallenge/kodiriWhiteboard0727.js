enterMatrix ((bluePill, redPill) => {
    bluePill = toString(bluePill).split('').map(v => v === 'l').length
    redPill = toString(redPill).split('').map( v => v === 'l').length
    return bluePill * redPill
})(3);

console.log(enterMatrix('bluePill', 'redPill'))