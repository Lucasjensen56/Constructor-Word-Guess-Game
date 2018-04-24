var Letter = function(guessLetter) {

    this.letter = guessLetter;

    this.appear = false;

    this.showLetter = function() {
        if (this.letter === " ") {
            this.appear = true;
            return ' ';
        } if (this.appear === false) {
            return " _ ";
        } else {
            return this.letter;
        }
    }
}

console.log(this.appear);

module.exports = Letter;