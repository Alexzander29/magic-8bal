$(document).ready(function () {
var magic8Ball = {};
$("#answer").hide();
magic8Ball.answers = ["yes", "No", "Maybe" , "Unable to say","TOTALLY", "Ask Again", "DOUBT NOTHING AND SUCCEED AT ALL"];

magic8Ball.shake = function (question) {
	var fortune = this.answers[Math.floor(Math.random()*this.answers.length)];
	$("#answer").text(fortune);
	$("#answer").fadeIn(2000);
	$("#eight-ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#eight-ball").effect("shake");
};
var onClick = function () {
	$("#answer").hide();
	setTimeout(
    function() {
    	var question = prompt("Ask Me Anything");
		magic8Ball.shake(question);
    }, 500);
	
};
$("#questionButton").click(onClick);
	});
