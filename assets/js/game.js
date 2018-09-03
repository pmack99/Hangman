var wins = 0;
var loss = 0;       
var guessesLeft = 9;
var wordbank = ['yankees', 'braves', 'cardinals', 'redsox', 'whitesox', 'phillies', 'nationals', 'reds', 'bluejays', 'pirates', 'mets', 'rays', 'rangers', 'royals', 'angels','mariners', 'orioles', 'twins', 'cubs', 'astros', 'dodgers', 'rockies', 'marlins' , 'athletics', 'brewers', 'diamondbacks', 'indians', 'giants', 'rockies', 'padres','tigers'];
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
        userGuesses = [];

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
        document.getElementById("guessed").textContent = wrongLetter;
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
                var sound = document.getElementById("audio");
                sound.play();
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
            var sound = document.getElementById("audio_three");
            sound.play();
            guessesLeft--;
            document.getElementById("lives-score").textContent = guessesLeft;
    }
        if(guessesLeft ===0) {
            loss++;
            var sound = document.getElementById("audio_two");
            sound.play();
            document.getElementById("losses-score").textContent = loss;
            userGuesses = [];
            alert("Maybe baseball isn't your thing... You're OUT!");
            startGame();
            
        }
}

startGame();


function winlose(){
    if(winCounter === randWord.length) {
        var sound = document.getElementById("audio_four");
        sound.play();
        wins++;
        document.getElementById("wins-score").textContent = wins;
        userGuesses = 0;
    }


}
