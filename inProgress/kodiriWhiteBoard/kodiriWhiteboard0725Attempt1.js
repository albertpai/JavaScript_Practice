/*
Create the sum function
*/

let wild = {
	a:1,
	b: {
	  c:2,
	  d:{
		  e:7,
		  f:{
			  g: -2,
			  h: 5
		  }
	  }
	}
}


var sum = function (wild) {
    Object.values(wild).reduce((acc1, v1) => {
        if (typeof v1 === 'object') {
            Object.values(v1).reduce((acc2, v2) => {
                if (typeof v2 === 'object') {
                    Object.values(v2).reduce((acc3, v3) => {
                        return acc3 + v3;
                    })
                }
                return acc2 + v2;
            })
        }
        return acc1 + v1;
    })
}

console.log(sum(wild))



//wild
//wild.b
//wild.b.d
//wild.b.d.f