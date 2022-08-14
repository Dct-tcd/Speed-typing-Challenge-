const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

// function example() {
//   let btn = document.querySelector("#choose");
//  //  let randomNumber = Math.ceil(Math.random() * 100);
//   btn.onclick = function() {
//       givenNumber = document.querySelector("#tim").value;
//      let valueInt = parseInt(givenNumber, 100);
//     //  console.log( givenNumber);
//     //  alert('cjvj');
//   };
// }
// example();
let numberoftime=0;
// numberoftime=parseInt(numberoftime);
quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })
  if (correct) {numberoftime+=1;renderNewQuote1();}
})

let givenNumber=17000;
window.setInterval('refresh(numberoftime)',givenNumber); 

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  startTimer()
}

async function renderNewQuote1() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  // startTimer()
}

let startTime
function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}
// if (getTimerTime()>=parseInt(2)) alert('hj');

// window.setInterval('refresh()', 10000); 	// Call a function every 10000 milliseconds (OR 10 seconds).

// // Refresh or reload page.
function refresh(numberoftime) {
if(numberoftime>3){
  alert('Master 😊😊. You completed  ' + numberoftime + " Challenges");
}
else if (numberoftime==2||numberoftime==3)
{
  alert("You are getting there 😏😏. You completed  " + numberoftime + " Challenge")
}
 else if (numberoftime==1)  alert('Sorry champ 🥺😭🥺🥺😭🥺 , Better luck next time. You completed  ' + numberoftime + " Challenges");
 else {
  alert('Oh! that sucks.😭🥺 . You completed  NO  Challenge');
 }  
 
 window .location.reload();
    numberoftime=0;
}
function refresh1() {
    window .location.reload();
}
renderNewQuote()
