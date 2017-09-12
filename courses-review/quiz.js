var questions = [
    ['How many states in the US?', 50],
    ['How many continents are there?', 7],
    ['How many US presidents have served two terms?', 13]  
];

var correctAnswers = 0;
var question;
var answer;
var responsee;
var html;


function print(message) {
    document.write(message);
}

for(var i = 0; i < questions.length; i++){
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    
    if(response === answer){
        correctAnswers ++;
    }
}

html = "You got " +correctAnswers +" question(s) right.";
print(html);