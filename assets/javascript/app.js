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

var gameLoop;
var i = 0;
var correct = 0;
var wrong = 0;
var interrupt;
var gameTimer;
var alreadyClicked;

$("#start").on("click", gameLoop);

function gameLoop() {
    $("#start").css("display", "none");
    $(".btn-block").css("display", "block");
    $("h2").css("display", "block");
    $("#game-over").css("display", "none");
    $("#seconds-remaining").text(count);
    $("#question").text(quizzes[i].question);
    $("#answer1").text(quizzes[i].answer1);
    $("#answer2").text(quizzes[i].answer2);
    $("#answer3").text(quizzes[i].answer3);
    $("#answer4").text(quizzes[i].answer4);
    $("#correct-answer").html("&nbsp;");
    interrupt = false;
    alreadyClicked = false;
    var count = 30;
    var counter = setInterval(timer, 1000);

    function timer() {
        count--;
        if (count < 0) {
            clearInterval(counter);
            return;
        };
        $("#seconds-remaining").text(count);
        if (count == 0) {
            $("#question").html("Out of time!");
            $("#correct-answer").html("<strong>Correct Answer:</strong>" + "<br>" + "<strong>" + quizzes[i].correctAnswer + "</strong>" + "<br><br>" + "<img src='assets/images/correctAnswer" + (i + 1) + ".jpg' alt='image'>");
            gameTimer = setTimeout(nextQuestion, 1000 * 2);
            wrong++;
        } else if (interrupt === true) {
            clearInterval(counter);
            $("#seconds-remaining").text("30");
            $("#correct-answer").html("<strong>Correct Answer:</strong>" + "<br>" + "<strong>" + quizzes[i].correctAnswer + "</strong>" + "<br><br>" + "<img src='assets/images/correctAnswer" + (i + 1) + ".jpg' alt='image'>");
            gameTimer = setTimeout(nextQuestion, 1000 * 2);
        } ;
    };
};

function nextQuestion() {
    i++;
    if (i < 7) {
        gameLoop();
    } else {
        $("#start").css("display", "initial");
        $(".btn-block").css("display", "none");
        $("h2").css("display", "none");
        $("#game-over").css("display", "block");
        $("#game-over").html("Correct Answers: " + correct + "<br>" + "Wrong Answers: " + wrong + "<br>" + "New Game?");
        i = 0;
        correct = 0;
        wrong = 0;
    };
};

$(".btn-block").on("click", function () {
    if (alreadyClicked === false) {
    selectedAnswer = $(this).text();
    if (selectedAnswer === quizzes[i].correctAnswer) {
        $("#question").html("That's Correct!");
        correct++;
        interrupt = true;
        alreadyClicked = true;
    } else {
        $("#question").html("Incorrect!");
        wrong++;
        interrupt = true;
        alreadyClicked = true;
    };
    };
});
