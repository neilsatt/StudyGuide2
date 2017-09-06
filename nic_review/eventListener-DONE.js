// https://teamtreehouse.com/library/javascript-and-the-dom-2/responding-to-user-interaction/adding-an-event-listener

// Select the button with the ID "makeItRed" and assign it to the button variable.

const warning = document.getElementById("warning");
let button = document.getElementById("makeItRed");


// Add a click event listener on the button. Pass an empty function in as the second parameter.
button.addEventListener('click', function() {
    
});


// In the button click handler apply the background color of "red" to the warning div.
button.addEventListener('click', function() {
    warning.style.backgroundColor = 'red';
});