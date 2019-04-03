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
function makeCard(obj, index) {
  // const triviaCard = document.createElement('div');

  // triviaCard.setAttribute('id', `question-${index + 1}`);

  const cardHTML = `<div id=question-${index + 1}>
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

function startGame() {
  // format Questions into DOM elements
  const cardArray = trivia.map((obj, i) => makeCard(obj, i));
  // add Dom Elements to the form
  console.log(cardArray);
  for (let i = 0; i < cardArray.length; i += 1) {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = cardArray[i];
    gameDiv.append(questionDiv);
  }
}
startGame();
