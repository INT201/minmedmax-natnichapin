const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let object ={min:undefined,med:undefined,max:undefined}
    let arg = [n1,n2,n3]
    object.max = arg[0]
    object.min = arg[0]
    for (let i = 0; i < arg.length; i++){
        if(arg[i]>object.max){
            object.max = arg[i]
        }
    }
    for (let j = 0; j < arg.length; j++){
        if(arg[j]<object.min){
            object.min = arg[j]
        }
    }
    for (let i = 0; i < arg.length; i++){
        if(arg[i]!==object.max && arg[i]!==object.min){
            object.med = arg[i]
        }
    }
    return object
}
module.exports = minMedMax
