var inquirer = require("inquirer");

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