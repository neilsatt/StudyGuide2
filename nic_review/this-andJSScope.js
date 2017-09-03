// 'this' keyword and JS Scope

// You can use 'this' to refer to the Object on which the method is currently being called
// It can also be used inside functions 


var person = {
    getName: function() {
        return 'First name: ' + this.firstName;
    }
} 

var personOne = Object.create(person);
personOne.firstName = 'Ted';

console.log(personOne.getName());



/*  Think of 'this' as a variable assigned to the object whose method was JUST called
    So - if you call the personOne's getName method, then 'this' refers to personOne
    
    ( this points to the object that our getName method is pointing to -> personOne )
    
*/

// 'this' can make methods more versatile by allowing you to add the same method to multiple objects
var speak = function() {
    console.log(this.sound);
}
var cat = {
    sound: 'Meow',
    speak: speak  // add the speak method
};

var dog = {
    sound: 'Woof',
    speak: speak  // add the speak method
};

cat.speak();
dog.speak();


// SCOPE and THIS ------------------------------------------------------------------------------------
/*
    1) When a function is created at the top level (not inside an object or another function), then it is in the GLOBAL SCOPE
    
       the default object in this scope is the window object, so this refers to the window object

*/
function windowSize() {
    var width = this.innerWidth; // returns property of the window object
    console.log(width);
}



