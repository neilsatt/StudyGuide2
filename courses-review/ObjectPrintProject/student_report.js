var message = '';
var student;

// get div id and assign message variable
function print(message){
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// Loop through all of the students in the JSON file
for(var i = 0; i < students.length; i++){
    student = students[i]; // get a reference to an individual student 
    message += '<h2><b>Student: </b>' +student.name + '</h2>'; // keep concatenating to the message var
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    message += '<hr>';
}

print(message);
