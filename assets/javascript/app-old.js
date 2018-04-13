var quiz1 = {
    question: "How many amendments are in the U.S. Constitution?",
    answer1: "20",
    answer2: "23",
    correctAnswer: "27",
    answer4: "32",
};

var quiz2 = {
    question: "What is NOT a branch of the U.S. government?",
    correctAnswer: "Senate",
    answer2: "Legislative",
    answer3: "Judicial",
    answer4: "Executive",
};

var quiz3 = {
    question: "What year was the U.S. Constitution ratified?",
    answer1: "1776",
    answer2: "1861",
    answer3: "1812",
    correctAnswer: "1787",
};

var quiz4 = {
    question: "How many presidents have there been in the U.S.?",
    answer1: "41",
    answer2: "42",
    answer3: "43",
    correctAnswer: "45",
};

var quiz5 = {
    question: "Where was the Declaration of Independence signed?",
    correctAnswer: "Philadelphia",
    answer2: "New York City",
    answer3: "Washington D.C.",
    answer4: "Boston",
};

var quiz6 = {
    question: "Which is NOT one of the original 13 colonies?",
    answer1: "New Hampshire",
    correctAnswer: "Vermont",
    answer3: "Virginia",
    answer4: "Delaware",
};

var quiz7 = {
    question: "Which president served 2 non-consecutive terms?",
    answer1: "John Adams",
    correctAnswer: "Grover Cleveland",
    answer3: "William Henry Harrison",
    answer4: "Theodore Roosevelt",
};

var questions = [
    "How many amendments are in the U.S. Constitution?",
    "What is NOT a branch of the U.S. government?", 
    "What year was the U.S. Constitution ratified?", 
    "How many presidents have there been in the U.S.?", 
    "question5", 
    "question6", 
    "question7"
    ];
var answer1 = [
    "20", 
    "Senate", 
    "1776", 
    "41", 
    "answer1E", 
    "answer1F", 
    "answer1G"
    ];
var answer2 = [
    "23", 
    "Legislative", 
    "1861", 
    "42", 
    "answer2E", 
    "answer2F", 
    "answer2G"
    ];
var answer3 = [
    "27", 
    "Judicial", 
    "1812", 
    "43", 
    "answer3E", 
    "answer3F", 
    "answer3G"
    ];
var answer4 = [
    "32", 
    "Executive", 
    "1787", 
    "45", 
    "answer4E", 
    "answer4F", 
    "answer4G"
    ];
var trueAnswer = [answer3[0], answer1[1], answer4[2], answer4[3], answer1[4], answer2[5], answer3[6]];
var gameStart = gameLoop;

for (i = 0; i < 7; i++) {    };

$("#start").on("click", gameStart);

function gameLoop() {
    var questionNumber = quiz1;
    $("#start").css("display","none");
    $("h3").css("display","block");
    $("h2").css("display","block");
    $("#question").text(quiz1.question);
    $("#answer1").text(quiz1.answer1);
    $("#answer2").text(quiz1.answer2);
    $("#answer3").text(quiz1.correctAnswer);
    $("#answer4").text(quiz1.answer4);
    var count = 3;
    var counter = setInterval(timer, 1000);



    function timer() {
        
        count--;

        if (count < 0) {
            clearInterval(counter);
            return;
        }
        $("#seconds-remaining").text(count);
        if (count == 0) {
            $("#question").html("Out of time!" + "<br>" + "<strong>" + quiz1.correctAnswer + "</strong>");
                setTimeout(nextQuestion, 1000 * 2);
                function nextQuestion() {
                    $("#question").text(quiz2.question);
                    $("#answer1").text(quiz2.answer1);
                    $("#answer2").text(quiz2.answer2);
                    $("#answer3").text(quiz2.answer3);
                    $("#answer4").text(quiz2.answer4);
                    gameLoop();
                };
        };

};
};
$("#answer1").on("click", function() {
    if (quiz1.correctAnswer) {
        alert("right answer");
    } else {
        alert("wrong answer");
};
});
$("#answer2").on("click", function() {
    if (quiz1.correctAnswer) {
        alert("right answer");
    } else {
        alert("wrong answer");
};
});
$("#answer3").on("click", function() {
    if (quiz1.correctAnswer) {
        alert("right answer");
    } else {
        alert("wrong answer");
    };
});
$("#answer4").on("click", function() {
    if (quiz1.correctAnswer) {
        alert("right answer");
    } else {
        alert("wrong answer");
    };
});



   