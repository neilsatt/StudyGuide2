/* 
   - Create a function that accepts an array and number as its parameters
   - Multiply the first number of the array by the number
   - Multiply the last number of the array by the number
   - Create and object that shows the two calculations, and print out the result
   	 using console.log
*/
   
function myFunction(myArray, num) {
	var firstArrayNum = myArray[0]; // stores first number
    var lastArrrayNum = myArray[myArray.length-1]; // stores last number 

	console.log(firstArrayNum);
    console.log(lastArrrayNum);
    
    var firstCalculation = firstArrayNum * num;
    var secondCalculation = lastArrrayNum * num;
    
   var answerObj = {
    firstCalculation: 'First Calculation answer is: '+firstCalculation,
    secondCalculation: 'Second Calculation answer is: '+ secondCalculation,
  };
    
   for(var prop in answerObj) {
    console.log(answerObj[prop]);
    //console.log(prop + ": " +answerObj[prop]);
   }
}

myFunction([5,10,3], 5);
    
