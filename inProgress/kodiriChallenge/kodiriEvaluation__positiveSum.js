//Using map method
function positiveSum(array) {
	var sum = 0;
	array.map(function(value, index){
		if (value> 0){
			sum += value};
	})
	return sum;
}


//To be checked
// positiveSum.reduce(function(a, v){
// 		if (v > 0){
//             a += v};
// 	}
// )