const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let object ={min:undefined,mid:undefined,max:undefined}
    let objectIndex ={minIndex:undefined,midIndex:undefined,maxIndex:undefined}
    let arg = [n1,n2,n3]
    object.max = n1
    object.min = n1
    for (let i = 0; i < arg.length; i++){
        if(arg[i]>object.max){
            object.max = arg[i]
            objectIndex.maxIndex=i
        }
    }
    for (let j = 0; j < arg.length; j++){
        if(arg[j]<object.min){
            object.min = arg[j]
            objectIndex.minIndex=j
        }
    }
    for (let k = 0; k < arg.length; k++){
        if(k!==objectIndex.maxIndex&&k!==objectIndex.minIndex){
            object.mid = arg[k]
        }
    }

    return object
}
module.exports = minMedMax
