// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
  var results =  arrayOfNumbers.reduce((accumulator,previousNumber) =>{
      return accumulator + previousNumber
    })
  return results;
}


function countEvenNumbers(arrayOfNumbers) {
    let addSum=0;
    for(number of arrayOfNumbers){
        if(number % 2 == 0){
            console.log(number)
            addSum += number
            console.log(addSum)
        }
    }



function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers.map(number =>{
        return Math.trunc((number *9/5) + 32) 
    });
}


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

