var quiz1 = {
    question: "How many amendments are in the U.S. Constitution?",
    answer1: "20",
    answer2: "23",
    answer3: "27",
    correctAnswer: "27",
    answer4: "32",
};

var quiz2 = {
    question: "What is NOT a branch of the U.S. government?",
    correctAnswer: "Senate",
    answer1: "Senate",
    answer2: "Legislative",
    answer3: "Judicial",
    answer4: "Executive",
};

var quiz3 = {
    question: "What year was the U.S. Constitution ratified?",
    answer1: "1776",
    answer2: "1861",
    answer3: "1812",
    answer4: "1787",
    correctAnswer: "1787",
};

var quiz4 = {
    question: "How many presidents have there been in the U.S.?",
    answer1: "41",
    answer2: "42",
    answer3: "43",
    answer4: "45",
    correctAnswer: "45",
};

var quiz5 = {
    question: "Where was the Declaration of Independence signed?",
    correctAnswer: "Philadelphia",
    answer1: "Philadelphia",
    answer2: "New York City",
    answer3: "Washington D.C.",
    answer4: "Boston",
};

var quiz6 = {
    question: "Which is NOT one of the original 13 colonies?",
    answer1: "New Hampshire",
    answer2: "Vermont",
    correctAnswer: "Vermont",
    answer3: "Virginia",
    answer4: "Delaware",
};

var quiz7 = {
    question: "Which president served 2 non-consecutive terms?",
    answer1: "John Adams",
    answer2: "Grover Cleveland",
    correctAnswer: "Grover Cleveland",
    answer3: "William Henry Harrison",
    answer4: "Theodore Roosevelt",
};

var quizzes = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7];

var gameStart = gameLoop;
var i = 0;

// for (i = 0; i < 7; i++) {    };

$("#start").on("click", gameStart);

function gameLoop() {
    var questionNumber = quiz1;
    $("#start").css("display", "none");
    $("h3").css("display", "block");
    $("h2").css("display", "block");
    $("#question").text(quizzes[i].question);
    $("#answer1").text(quizzes[i].answer1);
    $("#answer2").text(quizzes[i].answer2);
    $("#answer3").text(quizzes[i].answer3);
    $("#answer4").text(quizzes[i].answer4);
    console.log("quiz" + i);
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
            $("#question").html("Out of time!" + "<br>" + "<strong>" + quizzes[i].correctAnswer + "</strong>");
            setTimeout(nextQuestion, 1000 * 2);
            function nextQuestion() {
                i++;
                gameLoop();
            };
        };

    };
};
$("#answer1").on("click", function () {
    if ($(this) === quizzes[i].correctAnswer) {
        alert(quizzes[i].correctAnswer);
    } else {
        alert("wrong answer");
    };
});
$("#answer2").on("click", function () {
    if ($(this) === quizzes[i].correctAnswer) {
        alert(quizzes[i].correctAnswer);
    } else {
        alert("wrong answer");
    };
});
$("#answer3").on("click", function () {
    if ($(this) === quizzes[i].correctAnswer) {
        alert(quizzes[i].correctAnswer);
    } else {
        alert("wrong answer");
    };
});
$("#answer4").on("click", function () {
    if ($(this) === quizzes[i].correctAnswer) {
        alert(quizzes[i].correctAnswer);
    } else {
        alert("wrong answer");
    };
});



