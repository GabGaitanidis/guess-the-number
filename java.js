const button = document.querySelector('button')
const display = document.querySelector('.display')
const input = document.querySelector('input')
const h3 = document.querySelector('h3')

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
  console.log(rounds)
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
  }

  if(rounds == 0 && inputValue != number){
    display.textContent = 'Εχασες'
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