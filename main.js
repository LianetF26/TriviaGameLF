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

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-name=' " +
            questions[this.currentQuestion].answer[i] +
            "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html("<h2> Out of Time </h2>");
        panel.append("<h3> The correct answer was: </h3>" + questions[this.loadQuestion.currentQuestion].correctAnswer);
        panel.append("<img scr= " + this.questions[this.currentQuestion].image);

        if(game.currentQuestion ===questions.length -1)
        {
            setTimeout(game.results, 3*1000);
        }
        else
        {
            setTimeout(game.nextQuestion, 3*1000);

        }
        
    },

    results: function(){

        clearInterval(timer);
        panel.html("<h2>All done, here's how you did!</h2>");
        $("counter-number").html(game.counter);

        panel.append("<h3>Correct Answers:" + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers:" +game.incorrect + "</h3>");
        panel.append("<h3>Unanswered:" +(questions.length = game.correct + game.incorrect)) + "</h3>);"
        panel.append("<br><button id ='start-over' > Start Over?</button>");
    },

    clicked: function(e){
        clearInterval(timer);
        IDBCursor($(e.target).attr("data-"))
    },

    answeredIncorrectly :function(){
        game.Incorrect++;
        clearInterval(timer);
        panel.html("<h2>NOPE</h2>")
        panel.append("<h3> The correct answer was:" + question[game.correctAnswer].correctAnswer + "</h3>")
        panel.append("<img = scr'" + questions[game.currentQuestion].image +"/>")

        if(game.currentQuestion === questions.length -1)
        {
            setTimeout(game.results, 3 * 1000);

        }
        else
        {
            setTimeout(game.realQuestion, 3 * 1000);
        },

        answeredCorrectly : function()
        panel.html("<h2>CORRECT</h2>")
        
        
    }
    



}