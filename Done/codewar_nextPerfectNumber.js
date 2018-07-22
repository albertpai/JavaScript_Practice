//*Codewar 7kyu

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
        return Math.pow((root + 1), 2)
    }
    else {
        return -1;
    };
}

//Guru's answer
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let num = Math.sqrt(sq);
  return Number.isInteger(num) ? Math.pow(num+1, 2) : -1 ;
}

// One-line solution. Check!
//     return (int(sq ** 0.5) + 1) ** 2 if str((sq ** 0.5)).split('.')[1] == '0' else -1

// console.log(find_next_square(121))
