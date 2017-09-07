/* 

    Create a function that takes in an array and a number
    1) Multiple the first item in the array by the number
    2) Multiple the last item in the array by the number
    
    3) Return an object that logs out the result
    
*/

var myFunction = function(myArray, myNum) {
    var firstArrayValue = myArray[0];
    alert(firstArrayValue);
    var lastItem = myArray.pop()
    alert(lastItem);
       
}
myFunction([23,44,42], 33);






// Version One

var player = makeGamePlayer("John Smith", 15, 3);
The code above calls function makeGamePlayer and stores the returned value in the variable player. In this case, you may want to define the function like this:

function makeGamePlayer(name, totalScore, gamesPlayed) {
  // Define desired object
  var obj = {
    name:  name,
    totalScore: totalScore,
    gamesPlayed: gamesPlayed
  };
  // Return it
  return obj;
}



// Version Two

    function makeGamePlayer(name,totalScore,gamesPlayed) {
    return {
        name: name,
        totalscore: totalScore,
        gamesPlayed: gamesPlayed
     };
    }




// Version Three

  function makeGamePlayer(name,totalScore,gamesPlayed) {
        //should return an object with three keys:
        // name
        // totalScore
        // gamesPlayed

         var obj = {  //note you don't use = in an object definition
             "name": name,
             "totalScore": totalScore,
             "gamesPlayed": gamesPlayed
          }
         return obj;
    }
    
