var wins = 0;
var loss = 0;       
var guessesLeft = 9;
var wordbank = ['Yankees', 'Braves', 'Cardinals', 'Redsox', 'Whitesox', 'Phillies', 'Nationals', 'Reds', 'BlueJays', 'Pirates', 'Mets', 'Rays', 'Rangers', 'Royals', 'Angels','Mariners', 'Mariners', 'Orioles', 'Twins', 'Cubs', 'Astros', 'Dodgers', 'Rockies', 'Marlins' , 'Athletics', 'Brewers'];
var wrongLetter = [];
var underScores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;


function startGame(){
    //pick random word
    randWord = wordbank[Math.floor(Math.random() * wordbank.length)];
        console.log(randWord);
    for(var i = 0; i < randWord.length; i++)
    {
        //puts the new info (word length) into the underscores array
        underScores.push('_');

    }
        //prints underscores to screen 
        document.getElementById('user-guess').textContent = underScores.join(" ");
    
        //reset
        wrongLetter = [];
        guessesLeft = 9;
        
        document.getElementById("lives-score").textContent = guessesLeft;
}

function winLose(){
    if (winCounter === randWord.length)
{
        alert("Winner");
        startGame();
}
else if(guessesLeft ===0)
{
        alert("loser");
        startGame();

}


//event.key will save the key pressed
document.onkeyup = function(event){
    userGuesses = event.key;

    //checking of the userGuess is a letter in the word
    if (randWord.indexOf(userGuesses) > -1) 
    { 
        for(var i = 0; i < randWord.length; i++)
        {
            if(randWord[i] === userGuesses)
            {
                underScores[i] = userGuesses;
                console.log(underScores);
                document.getElementById("user-guess").textContent = userGuesses;
                winCounter++;
                winLose();
                wins++;
                }
            }

    }

    else
    {
        wrongLetter.push(userGuesses);
        document.getElementById("guessed").textContent = wrongLetter;
        guessesLeft--;
        document.getElementById("lives-score").textContent = guessesLeft;
    }
}
}
startGame();
