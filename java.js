const button = document.querySelector('.guess-btn')
const display = document.querySelector('.display')
const input = document.querySelector('.num-input')
const h3 = document.querySelector('h3')
const displayName = document.querySelector('h2')
const btnName = document.querySelector('.name-btn')
const inputName = document.querySelector('.name')
let player; 
let rounds = 7
function getRandomNumber(){
 return Math.floor((Math.random() * 100) + 1);
}
let number = getRandomNumber()
console.log(number)
function endGame(){
  rounds = 7
  h3.textContent = `Εχεις ${rounds} προσπαθειες`
  number = getRandomNumber()
  console.log(number)
}
function createPlayer(){
  let score = 0
  let inputNameVal = inputName.value
  displayName.textContent = `Player: ${inputNameVal}`
  return function(){
    if(rounds != 0){
      score++
      displayName.textContent = `Player ${inputNameVal} has score: ${score}`
    } else {
      displayName.textContent = 'You Lost!'
      score = 0
      endGame()
    }
    if(score == 5){
      displayName.textContent = 'You won!'
      score = 0
      inputName.value = ''
    }
    
  }
}
function playRound(){
  let inputValue = input.value
  if(inputValue > 100 || inputValue < 0){
    alert('BETWEEN 1 AND 100!!!')
  }
  else if(inputValue > number){
    display.textContent = 'Πιο κατω'
  } else if(inputValue < number){
    display.textContent = 'Πιο πανω'
  } else {
    display.textContent = `Το βρηκες! Ο αριθμος ειναι ${number}`
    endGame()
    player()
  }

  if(rounds == 0 && inputValue != number){
    display.textContent = 'Εχασες'
    player()
    endGame()
  }
}
function playGame(){
  if(input.value){
    rounds--
    h3.textContent = `Εχεις ${rounds} προσπαθειες`
    playRound()
    input.value = ''
  } else {
    alert('Give a number')
  }
}
button.addEventListener('click', () => {
  playGame()
})
btnName.addEventListener('click', () =>{
  player = createPlayer()
})