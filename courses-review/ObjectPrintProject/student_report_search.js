var message = '';
var student;
var search;

function print(message){
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = '<h2>Student: ' +student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}

while(true){
    search = prompt('Search for a student: type a name [Ted], or type "quit" to end');
    if(search === null || search.toLowerCase() === 'quit'){
        break;
    }
    for(var i = 0; i<students.length; i++){
        student = students[i];
        if(student.name === search){
            message = getStudentReport(student);
            print(message);
        }
    }
}
