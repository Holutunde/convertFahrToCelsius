convertFahrToCelcius = (F) => {
   if(Array.isArray(F) && typeof(F) === "object"){
       let output = JSON.stringify(F)
       console.log(`${output} is not a valid number but a/an array.`)
   }else if(!Array.isArray(F) && typeof(F) === "object"){
        let value = JSON.stringify(F)
        console.log (`${(value)} is not a valid number but a/an object.`)
   }else{
   let val = Number(F)
      const ans = ((val) - 32) * 5/9; 
      console.log (`${ans.toFixed(4)}`)  
  } 
}

convertFahrToCelcius(0)
convertFahrToCelcius("0")
convertFahrToCelcius([1,2,3])
convertFahrToCelcius({temp: 0})