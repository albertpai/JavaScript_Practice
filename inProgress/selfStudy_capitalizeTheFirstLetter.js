let a = []
a[0] = "alkene"
a[1] = "alkyne"
a[2] = "arene"
a[3] = "halide"
a[4] = "alcohol"
a[5] = "ether"
a[6] = "monophosphate"
a[7] = "diphosphate"
a[8] = "amine"
a[9] = "imine"
a[10] = "nitrile"
a[11] = "thiol"
a[12] = "sulfide"
a[13] = "disulfide"
a[14] = "sulfoxide"
a[15] = "aldehyde"
a[16] = "ketone"
a[17] = "carboxylic acid"
a[18] = "ester"
a[19] = "thioester"
a[20] = "amide"
a[21] = "acid chloride"
a[22] = "carboxylic acid anhydride"



function capitalizeFirstLetter(string) {
    return string.map(v => {
        let m = v.charAt(0).toUpperCase();
        let n = v.slice(1);
        return m + n;
})
}

console.log(capitalizeFirstLetter(a))
