const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let object ={Min:undefined,Med:undefined,Max:n1}
  let arg = [n1,n2,n3]

  for(let i=0 ;i<arg.length;i++){
      let object ={Min:undefined,Med:undefined,Max:undefined}
      let arg = [n1,n2,n3]
      object.Max = arg[0]
      object.Min = arg[0]
      for (let i = 0; i < arg.length; i++){
          if(arg[i]>object.Max){
              object.Max = arg[i]
          }
      }
      for (let j = 0; j < arg.length; j++){
          if(arg[j]<object.Min){
              object.Min = arg[j]
          }
      }
      for (let i = 0; i < arg.length; i++){
          if(arg[i]!==object.Max && arg[i]!==object.Min){
              object.Med = arg[i]
          }
      }
      return object
  }
}
module.exports = minMedMax
