# Projects related to DOM
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 01  Solution

 ```javascript

const buttons= document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "white"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === "purple"){
      body.style.backgroundColor= e.target.id;
    }

    else{
      body.style.backgroundColor= e.target.id;
    }

  });
});


```


## Project 2 Solution 

```javascript

const form= document.querySelector('form')

//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)
 //const weight = parseInt(document.querySelector('#weight').value)


form.addEventListener('submit',function(e){
  e.preventDefault()

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')

if(height==='' || height<0 || isNaN(height)){
  results.innerHTML=`Please give a valid height, Your response ${height}`
}

else if(weight ==='' || weight<0 || isNaN(weight)){
  results.innerHTML=`Please give a valid weight, Your response ${weight}`
}

else {
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  //show the result

  
  
  if(bmi < 18.6){
    results.innerHTML=`<span>your bmi is${bmi} and you are underweight</span>`;
  }
  if(bmi > 18.6 && bmi <24.9){
    results.innerHTML=`<span>your bmi is ${bmi} and you are in normal range</span>`;
  }
  else{
    results.innerHTML=`<span>your bmi is ${bmi} and you are overweight</span>`;
  }
}

//toFixed--> to get values upto that

});
```

## Project 3  Solution

```javascript
const clock =document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function()
{let date= new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## Project 4  Solution
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // will be writing a lot in future validate() method.
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`number you guessed is lesser`);
  } else {
    displayMessage(`number you guessed is higher`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value=''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild()
  playGame=false;
  newGame()
}

function newGame() {
 const newGameButton=document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess=1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11- numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
   playGame=true;
 })
}


```