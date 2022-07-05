// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

// Challenge 1

function sumOfNumbers(arrayOfNumbers) {
  var results =  arrayOfNumbers.reduce((accumulator,previousNumber) =>{
      return accumulator + previousNumber
    })
  return results;
}
sumOfNumbers([5,6,7,8,9])


function countEvenNumbers(arrayOfNumbers) {
    let addSum=0;
    for(number of arrayOfNumbers){
        if(number % 2 == 0){
            console.log(number)
            addSum += number
            console.log(addSum)
        }
    }
countEvenNumbers([9,10,11,12,13])

// Challenge 3
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers.map(number =>{
        return Math.trunc((number *9/5) + 32) 
    });
}
celsiusToFahrenheit([20,35,76,90.43])

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

