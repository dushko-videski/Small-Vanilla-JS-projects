let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//UI elements
let game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('.guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//assign min ann max
minNum.textContent = min
maxNum.textContent = max

//event listeren for playagain btn

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }

})

//event listener for guesses
guessBtn.addEventListener('click', e => {
  let guess = parseInt(guessInput.value)

  //validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Внеси број помеѓу ${min} и ${max} !!!`, 'red')
  }

  if (guess === winningNum) {
    //game over - won    
    gameOver(true, `${winningNum} е точниот број. Честито !`)
  } else {
    //if wrong number
    guessesLeft -= 1

    if (guessesLeft === 0) {
      //game over - lost
      gameOver(false, `Играта заврши, изгубивте. Точниот број беше ${winningNum}.`)

    } else {
      //game continues, wrong answer

      //change border of input field to RED
      guessInput.style.borderColor = 'red'
      //clear input
      guessInput.value = ''
      // print how meny trys are left
      setMessage(`${guess} не е точниот број. Имате уште ${guessesLeft} обиди!`, 'red')
    }

  }
})

//-------------- HELPER METHODS --------------

//-------- game over-------------
function gameOver(won, msg) {
  let color
  won === true ? color = 'green' : color = 'red'
  //disable input
  guessInput.disabled = true
  //change border of input field to green
  guessInput.style.borderColor = color
  // set winning message
  setMessage(msg, color)

  guessBtn.value = 'Играј повторно'
  guessBtn.className = 'play-again'
}

//----------Set message----------
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}

//----- get winning number -------
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

