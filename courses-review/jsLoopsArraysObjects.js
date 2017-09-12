<!-- https://teamtreehouse.com/library/javascript-loops-arrays-and-objects -->

/* 
When should you use loops?
    - When you want the code to repeat over and over a certain number of times.

In this challenge, you will create a while loop that prints to the document 26 times. 
We've added a variable named count, use it to track the number of times the loop runs. 
Don't forget to use the document.write() method inside the loop.

*/
while(count <=25) {
 document.write(count);
 count++;
}

/* Endless loop example -  counter will always be greater than zero*/
var counter = 0;
while (counter >= 0){
    document.write ('stuff');
    counter++;
}

/* Rewrite as a do-while loop */
var secret = 
while ( secret !== "sesame" ) {
  secret = prompt("What is the secret password?");    
}
document.write("You know the secret password. Welcome.");


var secret;
do {
    secret = prompt("What is the secret password?");
}
while (secret !== "sesame");
    
document.write("You know the secret password. Welcome.");


/* BE SURE TO ADD VAR TO FOR LOOPS!!! */
for (var i=4; i<=156; i++){
  console.log(i);
}


/* Array methods */

/* add to the end of the array using push */
var myArray = [2,5,4,7,44];
myArray.push(33, 65);

/* add to the beginning using unshift */
myArray.unshift(45, 87);

myArray.shift(); // remove the first item in the array


/* Log out the items in the array, in order */
var temperatures = [100,90,99,80,70,65,30,10];

for (var i = 0; i < temperatures.length; i++){
   alert(temperatures[i]);
}

/* Use the array method that combines all of the items in an array into a single string. In the final string, the array items should be separated by a comma AND a space. Finally, log the final string value to the console. */

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

console.log(months.join(', '));

/* Two Dimensional Arrays - array with 4 arrays inside */
var coordinates = [
      [2,5],
      [4,8],
      [7,5],
      [7,9]
];



/* BUILD A QUIZ CHALLENGE */







