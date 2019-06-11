function Letter(letter) {
    this.letter = letter;
    this.isCorrect = false;
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

 
  module.exports = Letter;