// Array of our questions
const trivia = [
  {
    question: 'How many wheels are on a car?',
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer4,
  },
  {
    question: 'How many wheels are on a motorcycle?',
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer2,
  },
  {
    question: 'How many wheels are on a unicycle?',
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer1,
  },
  {
    question: 'How many wheels are on a unicycle?',
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer1,
  },
  {
    question: 'How many wheels are on a tricycle?',
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 5,
    correctAnswer: this.answer3,
  },
  {
    question: 'How many wheels are on an 18-Wheeler?',
    answer1: 16,
    answer2: 18,
    answer3: 20,
    answer4: 22,
    correctAnswer: this.answer2,
  },
];
// The game Div
const gameDiv = document.getElementById('game');
// The timer
const timeDiv = document.getElementById('time');
timeDiv.innerHTML = '<h1>Here we go!</h1>';
let timer = 4;
// Count the Timer Down
function updateTimer() {
  timer -= 1;
  if (timer > 0) {
    timeDiv.innerHTML = `${timer} second${timer > 1 ? 's' : ''} left`;
  } else {
    timeDiv.innerHTML = `Time's UP`;
  }
}
// Makes a card for each trivia question
function makeCard(obj, index) {
  // const triviaCard = document.createElement('div');

  // triviaCard.setAttribute('id', `question-${index + 1}`);

  const cardHTML = `<div id="question-${index + 1}" class="triviaQ">
  <p class="question">${obj.question}</p>
  <input type="radio" name="question-${index + 1}" value="answer1"> ${
    obj.answer1
  } Wheels
  <input type="radio" name="question-${index + 1}" value="answer2"> ${
    obj.answer2
  } Wheels
  <input type="radio" name="question-${index + 1}" value="answer3"> ${
    obj.answer3
  } Wheels
  <input type="radio" name="question-${index + 1}" value="answer4"> ${
    obj.answer4
  } Wheels
  </div>`;
  return cardHTML;
}
// StartGame is run in the setTimeout
function startGame() {
  setInterval(updateTimer, 1000);
  // format Questions into DOM elements
  const cardArray = trivia.map((obj, i) => makeCard(obj, i));
  // add Dom Elements to the form
  for (let i = 0; i < cardArray.length; i += 1) {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = cardArray[i];
    gameDiv.append(questionDiv);
  }
}
startGame();

function endGame() {
  // Get NodeList
  const userResults = document.querySelector('name=["question-1"]');
  console.log(userResults);
  // remove game
}
setTimeout(() => {
  endGame();
}, 4000);
