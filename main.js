// create a quiz class
class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questions.index = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }
guess(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.qustionIndex++;
}

isEnded() {
  return this.questionIndex === this.questions.lenght;
}

}

//creating a question class

class Question{
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  //add a property
  isCorrectAnswer(choice) {
    return this.answer === choice;
}
}

//display a qustion
  function displayQuestion() {
    if (quiz.isEnded()) {
      showScores();
    } else {
      let questionElement =document.getElementById("question");
      questionElement.innerHTML =quiz.getQuestionIndex().text;

      //show option
      let choices = quiz.getQuestionIndex().choices;
      for (let i = 0; i <choices.length; i++) {
        let choiceElement = document.getElementById("choice"
        +i);
        choiceElement.innerHMTL = choices[i];
        guess("btn" + i, choices[i]);
      }

      showProgress();
  }

};


// GUESS FUNCTION
function guess(id, guess) {
  let button =document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    displayQuestion();
  }
}

//SHOW Progress

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let progressElement = document.getElementById("progress");
  progressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}
  `;
  
}

//SHOW SCORE
function showScores() {
  let quizEndHTML = 
  `
  <h1>Quiz Completed</h1>
  <h2 id="score">You Scored: ${quiz.score} of ${quiz.
    questions.length}</h2>
    <div class="quiz-repeat">
      <a href="index.html">Take Quiz Again</a>
      </div>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
}

//Create the quiz questions
let questions = [
  new Question(
    "Hyper Text Markup Language Stands For?", ["JQuery", "CSS", "HTML",
    "ZHTML"], "HTML"
  ),

  new Question(
    "Hyper Text Markup Language Stands For?", ["JQuery", "CSS", "HTML",
    "ZHTML"], "HTML"
  ),

  new Question(
    "Hyper Text Markup Language Stands For?", ["JQuery", "CSS", "HTML",
    "ZHTML"], "HTML"
  ),

  new Question(
    "Hyper Text Markup Language Stands For?", ["JQuery", "CSS", "HTML",
    "ZHTML"], "HTML"
  ),

  new Question(
    "Hyper Text Markup Language Stands For?", ["JQuery", "CSS", "HTML",
    "ZHTML"], "HTML"
  ),
];


let quiz = new Quiz (questions);

//display the question

displayQuestion();

//countdown

let time = 2;
let quizTimeInMinutes = time + 60;
quiztime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function() {
    if (quizTimer <= 0) {
      clearInterval(quizTimer);
      showScores();
        } else {
          quizTimer--;
          let sec = Math.floor(quizTimer % 60);
          let min = Math.floor(quizTimer / 60) % 60;
          counting.innerHTML = `time: ${min} : ${sec}`; 
        }

  }, 1000)
}

startCountdown();