{
let wild = {
a: 1,
b: {
    c: 2,
    d:{
        e: 7,
        f:{
            g: -2,
            h: 5
        }
    }
}
}


const sum=(o)=>Object.values(o).reduce((a,k)=>isNaN(k)?a+sum(k):a+k,0)



sum(wild)

}

//
{
    let wild = {
    a: 1,
    b: {
        c: 2,
        d:{
            e: 7,
            f:{
                g: -2,
                h: 5
            }
        }
    }
    }
    
    function sum(obj){
      
        return Object.values(obj).reduce((acc,val) => {
    
            if( isNaN(val) ){
              return acc = acc + sum(val) // if object
            } else {
              return acc = acc + val   // if number
            }
    
           } ,0)
    }
    
    sum(wild)
    
    }