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

         //reset
        wrongLetter = [];
        guessesLeft = 9;            
        winCounter = 0;
        underScores = [];

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
    
        document.getElementById("lives-score").textContent = guessesLeft;
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
                winCounter++;
                winlose();
                document.getElementById("user-guess").textContent = underScores.join(" ");

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
        if(guessesLeft ===0) {
            alert("loser");
            loss--;
            document.getElementById("losses-score").textContent = loss;
            userGuesses = [];
            startGame();
            
        }
}

startGame();


function winlose(){
    if(winCounter === randWord.length) {
        alert("winner");
        wins++;
        userGuesses = 0;
        document.getElementById("wins-score").textContent = wins;
        startGame();
        
    }


}
