var inquirer = require("inquirer");
var word = require("./word.js");

var movies = ["Princess Bride", "Return of the Jedi", "Wonder Woman", "Black Panther", "Frozen", "Despicable Me"];
var hiddenWord = movies[Math.floor(Math.random() * movies.length)];



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