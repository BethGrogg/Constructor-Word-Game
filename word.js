var letter = require("./letter.js");

function Word (word) {
    this.word = word;
    this.wordArray = word.split('');
    console.log(this.wordArray);

    for (i = 0; i < wordArray.length; i++) {
        this.wordArray.push(new Letter(wordArray[i]));
       
    }
    this.wordString = function() {
        this.wordArray.showAfterGuess();
    };

    this.checkTheGuess = function() {
        this.wordArray.updateBoolean();
    };

};



module.exports = Word;