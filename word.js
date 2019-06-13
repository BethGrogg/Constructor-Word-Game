var Letter = require("./letter.js");

function Word (word) {
    this.word = word;
    this.wordArray = [];
    word = this.word.split("");
    console.log(word);
      for (i = 0; i < word.length; i++) {
        this.wordArray.push(new Letter(word[i]));
       
    }
    this.wordString = function() {
        answer="";
        for (var i=0; i < this.wordArray.length; i++) {
            answer += this.wordArray[i] + " ";
        }
        console.log(answer);
    };

    this.checkTheGuess = function(input) {
        for (var i=0; i < this.wordArray.length; i++) {
            this.wordArray[i].updateBoolean(input);
        }
        
    };

};



module.exports = Word;