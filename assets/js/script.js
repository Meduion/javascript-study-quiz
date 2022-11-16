var timerEl = document.querySelector(".timer");
var quiz = document.querySelector(".quiz-body");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var start = document.createElement("button");
var list = document.createElement("div");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

// Sets front page of website
h1El.setAttribute("style", "font-size: 50px; text-align: center;");
h1El.textContent = "Welcome to the Javascript Quiz!";
quiz.appendChild(h1El);
// Displays parameters of test on front page
pEl.setAttribute("style", "font-size: 30px; text-align: center;")
pEl.textContent = "Use the following quiz to study your Javascript knowledge. Each question will earn you points but each wrong answer will subtract time from the clock.";
quiz.appendChild(pEl);
// Displays button that begins quiz
start.setAttribute("style", "font-size: 24px; background-color: purple; width: 20%; cursor: pointer;");
start.textContent = "Start";
quiz.appendChild(start);


// Creates variable to keep track of correct answers
var count = 0;
// Creates array of objects to hold questions, all created in the same way so they can be referenced later
var questions = [
  {
    question: "A function always features what paired symbol after its name?",
    answers: {
      a1: "<>",
      a2: "::",
      a3: "()",
      a4: "''"
    },
    correctAnswer: "()"
  },
  {
    question: "What function will make information appear in the Chrome Dev Tools console?",
    answers: {
      a1: "console.log()",
      a2: "console.write()",
      a3: "console(log)",
      a4: "console.show"
    },
    correctAnswer: "console.log()"
  }
];
// Creates variables that allow to move through questions
var questionIndex = 0;
var timeLeft = 75;

function wrongAnswer() {
  timeLeft = timeLeft -10;
}

function handleAnswer(answerEl, q, answerKey) {
  answerEl.addEventListener("click", function() {
    if (q.answers[answerKey] == q.correctAnswer) {
      count ++;
      answerEl.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer; background-color: #228b22;");
      questionIndex ++;
      displayQuestion();
      console.log(count);
      console.log(questionIndex);
    } else {
      wrongAnswer();
      answerEl.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer; background-color: #b22222;");
      console.log(count);
    }
  });
}

function displayQuestion() {
  var q = questions[questionIndex];
  h1El.textContent = q.question;
  a1.textContent = q.answers.a1;
  a2.textContent = q.answers.a2;
  a3.textContent = q.answers.a3;
  a4.textContent = q.answers.a4;
  handleAnswer(a1, q, "a1");
  handleAnswer(a2, q, "a2");
  handleAnswer(a3, q, "a3");
  handleAnswer(a4, q, "a4");
}




start.addEventListener("click", function() {
  countdown();
  start.remove();
  pEl.remove();
  quiz.appendChild(list);
  list.appendChild(a1);
  a1.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer;")
  list.appendChild(a2);
  a2.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer;")
  list.appendChild(a3);
  a3.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer;")
  list.appendChild(a4);
  a4.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer;")
  displayQuestion();
});



function countdown() {   
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time Up!";
      clearInterval(timeInterval);
    }
  }, 1000);
}