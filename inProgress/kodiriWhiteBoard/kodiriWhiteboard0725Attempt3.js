const wild = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 7,
            f: {
                g: -2,
                h: 5,
            }
        }
    }
}


arr = Object.keys(wild).map(key => wild[key])


console.log(arr);