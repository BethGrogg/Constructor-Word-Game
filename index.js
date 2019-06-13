var inquirer = require("inquirer");
var Word = require("./word.js");
var wordDisplay = "";
var movies = ["Princess Bride", "Return of the Jedi", "Wonder Woman", "Black Panther", "Frozen", "Despicable Me"];
var hiddenWord = movies[Math.floor(Math.random() * movies.length)];
var wordToGuess = new Word(hiddenWord);
var incorrectLetters = [];
var guessesLeft = 9;

function askForGuess() {
  var questions = [
    {
      type: 'input',
      name: 'letter',
      message: 'What letter do you want to guess?'
      
    }
  ];
 

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    
 // answers.updateBoolean(answers.letter);
  questions.push(answers.toString());
    
  });


};


askForGuess();


