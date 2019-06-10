var letter = require("./letter.js");



function Word (wordArray) {
    this.wordArray = wordArray;
    this.wordString = function() {
        newWord.showAfterGuess();
    };

    this.checkTheGuess = function() {
        newWord.updateBoolean();
    };

};

var newWordToGuess = new Word (hiddenWord);