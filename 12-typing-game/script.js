const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
  'cat',
  'moon',
  'red',
  'blue',
  'elephant',
  'sunshine',
  'lighthouse',
  'harmony',
  'enchanting',
  'velocity',
  'whimsical',
  'tranquil',
  'ponder',
  'nebula',
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium'; 

//focus on input
text.focus();

const timeInterval = setInterval(updateTime, 1000);
//Generate random word from array
function generateRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
//add word to dom
 function addWordToDOM() {
   randomWord = generateRandomWord();
   word.innerText = randomWord;
 }
 addWordToDOM();
//update score
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

//set time update
function updateTime() {
  time--;
  timeEl.innerText = time;

  if (time === 0) {
    clearInterval(timeInterval);
    endgameEl.innerHTML = `
     <h1>Time run out.</h1>
     <p>Your final score is ${score}</p>
     <button onclick="location.reload()">Reload</button>
    `
    endgameEl.style.display = 'flex'
  };
}


text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if(randomWord === insertedText) {
    addWordToDOM();
    updateScore();
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 3;
    } else if (difficulty === 'medium') {
      time += 4;
    } else {
      time += 6;
    }
    updateTime()
  }
 })

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'))