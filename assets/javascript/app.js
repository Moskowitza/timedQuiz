// Array of our questions
const trivia = [
  {
    question: 'How many wheels are on a car?',
    answers: [1, 2, 3, 4],
    correctAnswer: 4,
  },
  {
    question: 'How many wheels are on a motorcycle?',
    answers: [1, 2, 3, 4],
    correctAnswer: 2,
  },
  {
    question: 'How many wheels are on a unicycle?',
    answers: [1, 2, 3, 4],
    correctAnswer: 1,
  },
  {
    question: 'How many wheels are on a tricycle?',
    answers: [1, 2, 3, 4],
    correctAnswer: 3,
  },
  {
    question: 'How many wheels are on an 18-Wheeler?',
    answers: [1, 2, 3, 18],
    correctAnswer: 18,
  },
];
// The game Div
const gameDiv = document.getElementById('game');
// The timer
const timeDiv = document.getElementById('time');
timeDiv.innerHTML = '<h1>Here we go!</h1>';
let timer = 4;
let gameTimer;
// Count the Timer Down and put it in the DOM
function updateTimer() {
  timer -= 1;
  if (timer > 0) {
    timeDiv.innerHTML = `
      <h1>
      ${timer} second${timer > 1 ? 's' : ''} left 
      </h1>`;
  } else {
    timeDiv.innerHTML = `<h1>Time's UP</h1>`;
  }
}
// Makes a card for each trivia question
function makeCard(obj, index) {
  console.log(obj, index);
  const questionCard = document.createElement('div');
  questionCard.setAttribute('id', `question-${index}`);
  const question = document.createElement('p');
  question.textContent = obj.question;
  const answerContainer = document.createElement('div');
  answerContainer.setAttribute('class', 'answers');
  // loop through answers
  for (let i = 0; i < obj.answers.length; i += 1) {
    const answerLabel = document.createElement('label');
    const answerInput = document.createElement('input');
    answerLabel.setAttribute('for', `question-${index}`);
    answerInput.setAttribute('type', 'radio');
    answerInput.setAttribute('name', `question-${index}`);
    answerInput.setAttribute('value', `${obj.answers[i]}`);
    answerLabel.innerText = obj.answers[i];
    answerContainer.append(answerLabel);
    answerContainer.append(answerInput);
  }
  questionCard.append(question);
  questionCard.append(answerContainer);
  gameDiv.append(questionCard);
}
// StartGame is run in the setTimeout
function startGame() {
  // gameTimer = setInterval(updateTimer, 1000);
  // format Questions into DOM elements
  trivia.forEach((element, i) => {
    makeCard(element, i);
  });
}
startGame();

// function endGame() {
//   // Get NodeList
//   const userResults = document.querySelector('name=["question-1"]');
//   console.log(userResults);
//   // remove game
//   clearInterval(gameTimer);
// }
// setTimeout(() => {
//   endGame();
// }, 4000);
