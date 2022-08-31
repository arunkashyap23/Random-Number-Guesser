let min=1,max=10,winningNum=randomNumber(min,max),guessLeft=3;

//UI elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

//Assigning Max and Min Number
minNum.textContent = min;
maxNum.textContent = max;

//Add Event Listener on Guess Button
guessBtn.addEventListener('click',function(){

    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess>10 || guess<1){
        setMessage(`Please Enter Number Between ${min} & ${max}`,'red');
    }else{
        //If WON
        if(guess === winningNum){

            gameOver(`You WON. Correct Number was ${winningNum}`, 'green');

        }else{
            guessLeft -= 1;

            if(guessLeft === 0){

                gameOver(`Game Over. The Correct Guess Was ${winningNum}`, 'red');

            }else{

                setMessage(`You Have ${guessLeft} guesses Left`,'red');

                guessInput.value = '';
            }
        }
    }
});

//Game Over
function gameOver(msg,color){

    setMessage(msg,color);

    guessInput.disabled = true;

    playAgain();
}


//Set Message
function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
    guessInput.style.borderColor = color;
}

//Random Number
function randomNumber(min,max){
    return Math.floor((Math.random() * (max-min+1)) + min);
}

//play again
function playAgain(){
    guessBtn.value = 'Play Again';

    guessBtn.addEventListener('mousedown',function(e){
        if(e.target.value === 'Play Again'){
            window.location.reload();
        }
        e.preventDefault();
    });
}