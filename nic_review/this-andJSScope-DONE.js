https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work

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


/* 
    2) Global Variables become properties of the window object, which means you can access global variables using the window object. 
      
*/

var width = 600;

var shape = {
    width: 300;
}

var showWidth = function() {
    document.write(this.width);
};

showWidth(); // 600


/* 
    3) When a function is defined inside an object, it becomes a method. In a method, 'this' refers to the containing method. 
      
*/

var shape = {
    width: 300,
    getArea: function() {
        return this.width;  // same as shape.width
    }
}

shape.getArea(); // 300 


/* 
    4) If a named function has been defined in global scope, and it is then used as a method of an object, 'this' refers to teh object it is contained within. 
       Same showWidth as #2, but it is assigned as a method of an object    
      
*/

var width = 600;

var shape = {
    width: 300
};

var showWidth = function() {
    document.write(this.width);
};

shape.getWidth = showWidth;

shape.getWidth();

