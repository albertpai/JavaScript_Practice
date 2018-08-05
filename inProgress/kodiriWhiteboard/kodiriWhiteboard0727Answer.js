enterTheMatrix ((redPill, bluePill) => {
    return redPill * bluePill
})(3);

function enterTheMatrix (fn){
    return function (redPill){
        return fn (redPill, 2)
    }
}