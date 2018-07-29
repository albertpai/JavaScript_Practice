//What is the result?

let message = { noun: 'JavaScripT', adjective: 'RockS' }

function show(message) {
    return Object.keys(message) //['noun', 'adjective']
        .reduce((acc, Key) => {
            let foo = message[Key]
                .split('')
                .filter(c => c === c.toUpperCase(''))
                .join('#');
            if (foo) { acc.push(foo); }
            return acc;
        }, [])
        .join(' & ');
}

console.log(show(message))

//

// let message = {noun: 'JavaScripT', adjective: 'RockS'}

// function (message) {
//     Object.values(message) //['JavaScript', 'Rocks']
//     keyvalues.reduce((acc, Key) => {
//         let foo = message[Key]
//                  .split('')
//                  .filter(c => c === c.toUpperCase(''))
//                  .join('#');

//         if(foo){acc.push(foo);}
//             return acc;
//     }, [])
//     .join(' & ');
// }
// console.log(message)