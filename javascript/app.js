$(document).ready(function(){
	$('#startButton').on('click', countdown.start);
	$('#clearButton').on('click', countdown.reset);
	$('#submitButton').on('click', submitAnswers);
});

var answers = ["C", "B", "C", "A", "A", "D", "B", "B", "D", "A"];
var rightAnswers = 0;
var wrongAnswers = 0;

var countdown = {
	time: 60,
	counter: null,

	reset: function(){
		countdown.time = 0;
		$('#timer').html('01:00');
	},

	start: function(){
		countdown.counter = setInterval(function(){
			countdown.count();
		}, 1000);
		if(countdown.time < 0){
			clearInterval(countdown.time);
			alert("Time's Up - Try Again!");
			return;
		}
	},

	count: function(){
		countdown.time--;
		var converted = countdown.timeConverter(countdown.time);
		console.log(converted);
		$('#timer').html(converted);
	},

	stop: function(){
		clearInterval(countdown.counter);
	},

	timeConverter: function(t){
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes * 60);
		if (seconds < 10){
			seconds = "0" + seconds;
		}
		if (minutes === 0){
			minutes = "00";
		}
		else if (minutes < 10){
			minutes = "0" + minutes;
		}
		return minutes + ":" + seconds;
	},

};

