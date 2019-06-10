var word = ['a','p','p','l','e'];
var answer = [];
var displayedValue = [];
var letterGuessed = process.argv[2];

function Letter(letterSpace, isCorrect) {
    this.letterSpace = letterSpace;
    this.isCorrect = false;
    this.showAfterGuess = function() {
        for (i=0; i< word.length; i++) {
            
            answer = word[i].split('');
            displayedValue = displayedValue + "_ ";
           
        }

    };
    this.updateBoolean = function(letterGuessed) {
        for (i=0; i < word.length; i++) {

            if (letterGuessed === word[i]) {
                isCorrect = true;
            }

        }
    };
  };

  var newWord = new Letter ('_', false);