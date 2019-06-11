var inquirer = require("inquirer");
var word = require("./word.js");
var wordDisplay = "";
var movies = ["Princess Bride", "Return of the Jedi", "Wonder Woman", "Black Panther", "Frozen", "Despicable Me"];

function Word (word) {
  this.word = word;
  this.wordArray = word.split('');
  console.log(this.wordArray);
  this.objectArray = [];

  for (i = 0; i < this.wordArray.length; i++) {
  
   
      if (this.wordArray[i] == ' ') {
       wordDisplay = wordDisplay + '  ';
    }  else {
        wordDisplay = wordDisplay + '- ';
      };
    
      var letterCheck = new Letter(this.wordArray[i]);
      this.objectArray.push(letterCheck);
      console.log(this.objectArray);
     
     letterCheck.showAfterGuess();
  };
  console.log(wordDisplay);
  this.wordString = function() {
      this.wordArray.showAfterGuess();
  };

  this.checkTheGuess = function() {
      this.wordArray.updateBoolean();
  };

};

function Letter(letter) {
  this.letter = letter;
  this.isCorrect = false;
  console.log("letter: " + this.letter);
  this.showAfterGuess = function() {
    console.log("in here");
      if (this.isCorrect) {
          return this.letter;
      } else {
          return '_';
      }

  };
  this.updateBoolean = function(letterGuessed) {

    if (letterGuessed === this.letter) {
        this.isCorrect = true;
    };

};
};        


var wordToGuess;
function newGame() {
  var hiddenWord = movies[Math.floor(Math.random() * movies.length)];
  wordToGuess = new Word(hiddenWord);
};

function askForGuess() {
  var questions = [
    {
      type: 'input',
      name: 'letter',
      message: 'What letter do you want to guess?'
      
    }
  ];
 
var letter;
inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    console.log(answers.letter);
    
  });


};

newGame();
askForGuess();


