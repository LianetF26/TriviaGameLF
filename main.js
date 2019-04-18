var panel = $("#quiz-area");

var countStartNumber = 30;

//Question Set
var questions = [

    {
        question: "Mark Zuckerberg is the founding director of which site?",
        answers:["FackBook","Twitter","Instagram", "Myspace"],
        correctAnswer: "FaceBook",
        image: "Assets\Facebook gif.gif",

    },
    {
        question: "What’s the coloured part of the human eye called?",
        answers:["Pupil","Cornea","Iris", "Sclera"],
        correctAnswer: "Iris",
        image: "Assets\Eye gif.gif",

    },
]

//variable to hold out setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0){
            console.log("TIMES UPPP");

            game.timeUp();
        }
    },

    loadQuestion: function(){
        timer = setInterval
    }

}