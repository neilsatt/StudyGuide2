/* 

    Create a function that takes in an array and a number
    1) Multiple the first item in the array by the number
    2) Multiple the last item in the array by the number
    
    3) Return an object that logs out the result
    
    https://stackoverflow.com/questions/12272239/javascript-function-returning-an-object
    
*/

function myFunction(myArray, num) {
	var firstArrayNum = myArray[0];
    var lastArrayNum = myArray.pop(); 
    //Test
	console.log(firstArrayNum);
	console.log(lastArrayNum);
    
    var calculationOne = firstArrayNum * num;
    var calculationTwo = lastArrayNum * num;
    //Test two
	console.log(calculationOne);
	console.log(calculationTwo);
    
      var obj = {
    	firstCalculationTotal:  'First : '+calculationOne,
    	secondCalculationTotal: 'Second: ' +calculationTwo
  	};
  // Return it
  return obj;
      
}

var returnValue = myFunction([34,55,32], 7);
console.log(returnValue)
    
