var wins = 0;
var loss = 0;       
var guessesLeft = 9;
var wordbank = ['Yankees', 'Braves', 'Cardinals', 'Redsox', 'Whitesox', 'Phillies', 'Nationals', 'Reds', 'BlueJays', 'Pirates', 'Mets', 'Rays', 'Rangers', 'Royals', 'Angels','Mariners', 'Mariners', 'Orioles', 'Twins', 'Cubs', 'Astros', 'Dodgers', 'Rockies', 'Marlins' , 'Athletics', 'Brewers'];
var wrongLetter = [];
var underScores = ["a","b"];
var userGuesses = [];
var randWord;


function startGame(){
    randWord = wordbank[Math.floor(Math.random() * wordbank.length)];
        console.log(randWord);
    for(var i = 0; i < randWord.length; i++)
    {
        underScores.push('_');
        console.log(underScores);
    }
        //document.getElementById('user-guess').textContent = underScores;
    

}

startGame();
