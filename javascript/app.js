"use strict";

// All Variables

var triviaGame = {

		questions: {

				q1: {
			question: "How much does the average person spend on cable per year?",
			answers: ["$990", "$740", "$1350", "$1900"],
			correctAnswer: 3,
			correctAnswerPic:
				},
				q2: {
			question: "How many channels does the average person watch consistently?",
			answers: ["3", "4", "7", "5"],
			correctAnswer: 1,
			correctAnswerPic:
				},
				q3: {
			question: "How many shows does the average person watch consistently?",
			answers: ["2", "6", "3", "4"],
			correctAnswer: 3,
			correctAnswerPic:
				},
				q4: {
			question: "How many streaming subscriptions does the average consumer have active?",
			answers: ["3", "5", "7", "1"],
			correctAnswer: 1,
			correctAnswerPic:
				},
				q5: {
			question: "How much is the average streaming subscription per month?",
			answers: ["$15", "$25", "$35", "$50"],
			correctAnswer: 2,
			correctAnswerPic:
				},
				q6: {
			question: "How many streaming media players are in the market today?",
			answers: ["3", "4", "6", "Thousands"],
			correctAnswer: 4, 
			correctAnswerPic:
				},
				q7: {
			question: "How much time does the average consumer watch TV and movies in a week?",
			answers: ["25 Hours", "35 Hours", "45 Hours", "50 Hours"],
			correctAnswer: 2;
			correctAnswerPic:
				},
				q8: {
			question: "What is the number one watched show on cable televsion today?",
			answers: ["Big Bang Theory", "Sunday Night NFL Football", "Walking Dead", "Simpsons"],
			correctAnswer: 3,
			correctAnswerPic:
				},
				q9: {
			question: "What is the longest running show on cable televsion today?",
			answers: ["Law & Order", "Simpsons", "South Park", "Gunsmoke"],
			correctAnswer: 2,
			correctAnswerPic:
				},
				q10: {
			question: "Did you have fun playing this trivia game",
			answers: ["Yes", "No"],
			correctAnswer: 1,
			correctAnswerPic:
				},
		},
	time: 0,
	rightAnswers: 0,
	wrongAnswers: 0,
	noAnswers: 0,
	interval: null,
	questionsArray: [],
	numQuestions: 0,
	userGuess: 0,

	displayTimer: function(timer){
		$('timer').html("Time Remaining" + timer + "Seconds");
	},

	startTimer: function(){
		triviaGame.timer = 60;
		triviaGame.displayTimer(triviaGame.timer);
		triviaGame.interval = setInterval(function() {triviaGame.decrementTimer();}, 1000);
	},

	stopTimer: function(){
		clearInterval(triviaGame.interval);
	},

	decrementTimer: function(){
		triviaGame.timer--;
		triviaGame.displayTimer(triviaGame.timer);

		if (triviaGame.timer == 0) {
			handleTimeout();
		}
	},
	


}