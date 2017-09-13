Browser Environment


https://teamtreehouse.com/library/javascript-and-the-dom-2/the-browser-environment/the-browser-environment-review

The ___ is a representation of the document that JavaScript uses to navigate and make changes to a webpage.
    - DOM
    
You can use the document object to select and control elements of the currently loaded webpage.
    - True
    
What is the Document Object?
    - A global object representing the HTML and content of a web page
    
The document object, like all other global variables, is a property of which object?
    - window


/* GETTING A HANDLE ON THE DOM (Selection Review) -----------------------------------------------------------------------------------*/


/* 
What data type does document.getElementsByClassName return?
   - HTML Collection
   
How can you apply changes to all the elements in an HTML collection? 
    - use a loop
    
How would you select the body element using document.getElementsByTagName, and store it in the variable body?
(Hint: Don't forget that this method returns a collection, not a single element.)
   document.getElementsByTagName("body")[0]

*/


/* 
 This code will apply the first color to the first list item, the second color to the second list item and so on. 
 
 But the code is not complete. On line 1 of app.js, set the variable listItems to refer to a collection. 
 
 The collection should contain all list items in the unordered list element with the id of rainbow.
*/

let listItems = document.querySele;
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}
   
   
   
/* Type of DOM Selections */
var myElement = document.getElementById("intro");


/* Find all HTML elements with the same tag name */
var x = document.getElementsByTagName("p");


/* Find all HTML elements with the same class name */
var x = document.getElementsByClassName("intro");


/* Finds first HTML element that matches a CSS Selector  
   Get the first element in the document with class="example" */
var x = document.querySelector(".example");

/* Finds HTML elements that match a CSS selector (id, class names, types, attributes, etc.) */
var x = document.querySelectorAll("p.intro");


// QUIZ

/* How would you select the first element in the DOM with its HTML title attribute set to 'My Title'? */
document.querySelector('[title=MyTitle]');

/* 
How would you use querySelectorAll to obtain a reference to all elements in a document with the class student-info and assign it to the constant studentInfo?
*/
document.querySelectorAll('.student-info')


/* Select all links in the nav element and assign them to navigationLinks. */
let navigationLinks = document.querySelectorAll('nav a');

/* select all links in the unordered list with the id of "gallery" and assign them to galleryLinks */
let galleryLinks;

/* select all images in the footer element and assign them to footerImages */
let footerImages;


/* MAKING CHANGES TO THE DOM */
let inputValue = document.getElementById('linkName').value;

var aTag = document.getElementById('link');  // ADD THE VAR DECLARATION!!!
aTag.textContent = inputValue;

/* How would you set an element's CSS display property to "none" with JavaScript?  */
element.style.display = "none";


/* create a paragraph element and assign it to the newParagraph variable */
let newParagraph = document.createElement('p');  // DON'T ADD GREATER THAN/LESS THAN SIGNS AROUND 'p'. Only do that when writing out html to the page. 

/* Set the class of panel to the newParagraph */
newParagraph.className = "panel";  // CLASS NAME NEEDS TO BE IN QUOTES SINCE IT'S A STRING!!! 

/* Append the newParagraph element to the content DIV element */
contentDiv.appendChild(newParagraph);

/* Select the unordered list element and store it in the variable myList */
let myList = document.querySelector('ul');

/* Select the first list item element and store it in the variable firstListItem  (LOOK AT THE CSS ID!!!) */
let firstListItem = document.getElementById('first');

/* Remove the list item element stored in firstListItem from the DOM */
myList.removeChild(firstListItem);


/* RESPONDING TO USER INTERACTION ----------------------------------------------------------------------------------------------------*/
/* 
How would you set the following function `add` up to run after 5 seconds pass, using Window.setTimeout? In addition, how would you pass `add` the arguments 2 and 2 when it runs?
*/

function add(num1, num2) {
  console.log(num1 + num2);
}

window.setTimeout(add, 5000, 2,2);


/* You can set a listener for an event you want to handle on a sibling of the parent of your target element, because of event delegation. */
False

/* What is the callback function that is passed to addEventListener often called? */
An Event Handler


/* 
In the listener that has been added to the section element, ensure that the text input elements are the only children that trigger the background-changing behavior.
*/
let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if(e.target.tagName === 'INPUT') {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});

