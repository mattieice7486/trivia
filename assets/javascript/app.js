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

$("#start").on("click", gameStart);
function gameLoop(i) {
    $("#start").css("display","none");
    $("h3").css("display","block");
    $("h2").css("display","block");
    $("#question").text(questions[i]);
    $("#answer1").text(answer1[i]);
    $("#answer2").text(answer2[i]);
    $("#answer3").text(answer3[i]);
    $("#answer4").text(answer4[i]);
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
            $("#question").html("Out of time!" + "<br>" + "<strong>" + trueAnswer[0] + "</strong>");
                setTimeout(nextQuestion, 1000 * 2);
                function nextQuestion() {
                    $("#question").text(questions[1]);
                    $("#answer1").text(answer1[1]);
                    $("#answer2").text(answer2[1]);
                    $("#answer3").text(answer3[1]);
                    $("#answer4").text(answer4[1]);
                    for (i = 0; i < questions.length; i++) {
                    };
                    gameLoop();
                };
        };
    };
};

$("#answer1").on("click", function() {
    alert(answer1);
    if (answer1[0]) {
        alert("right answer");
    }
});
$("#answer2").on("click", function() {
    alert(answer2);
});
$("#answer3").on("click", function() {
    alert(answer3);
});
$("#answer4").on("click", function() {
    alert(answer4);
});



   