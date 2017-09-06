/* DOM - different ways to access elements 

    https://www.w3schools.com/js/js_htmldom_elements.asp

*/

// This example finds the element with id="intro":
var myElement = document.getElementById("intro");

// This example finds all <p> elements:
var x = document.getElementsByTagName("p");


// This example finds the element with id="main", and then finds all <p> elements inside "main":
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");


// This example returns a list of all elements with class="intro".
var myClasses = document.getElementsByClassName("example");


// This example returns a list of all <p> elements with class="intro".
var x = document.querySelectorAll("p.intro");

// Get the first element in the document with class="example":
document.querySelector(".example");


/*
    If you want to find all HTML elements that matches a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

    This example returns a list of all <p> elements with class="intro"
*/
var x = document.querySelectorAll("p.intro");