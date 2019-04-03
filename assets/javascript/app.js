const trivia = [
  {
    question: "How many wheels are on a car?",
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer4,
  },
  {
    question: "How many wheels are on a motorcycle?",
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer2,
  },
  {
    question: "How many wheels are on a unicycle?",
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer1,
  },
  {
    question: "How many wheels are on a unicycle?",
    answer1: 1,
    answer2: 2,
    answer3: 4,
    answer4: 5,
    correctAnswer: this.answer1,
  },
  {
    question: "How many wheels are on a tricycle?",
    answer1: 1,
    answer2: 2,
    answer3: 3,
    answer4: 5,
    correctAnswer: this.answer3,
  },
  {
    question: "How many wheels are on an 18-Wheeler?",
    answer1: 16,
    answer2: 18,
    answer3: 20,
    answer4: 22,
    correctAnswer: this.answer2,
  },
];
const gameDiv = document.getElementById("game");
// create a question card
// append it to gameDiv
// set time out to show result card
// update score
// set interval to show new question
// at end of interval, we show results
function makeCard(obj, i) {
  const triviaCard = document.createElement("DIV");
  triviaCard.setAttribute("id", `question-${i}`);
  triviaCard.innerHTML = `
  <p class="question>${obj.question}</p>
  <input type="radio" value="answer1">${obj.answer1}
  <input type="radio" value="answer2">${obj.answer2}
  <input type="radio" value="answer3">${obj.answer3}
  <input type="radio" value="answer4">${obj.answer4}
  `;
}
function startGame() {
  trivia.forEach(obj => makeCard(obj));
}
