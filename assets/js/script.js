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
var scoreForm = document.createElement("form");
var scoreInput = document.createElement("input");
var scoreButton = document.createElement("button")


// Creates variable to keep track of correct answers
var count = 0;

// Creates variable to track questions
var questionIndex = 0;

// Creates undefined variable for input of user initials, defined later when user submits initials
var inputValue;

var scoresShown;

// Creates variable to set time on timer
var timeLeft = 75;

// Creates timeInterval variable but leaves it undefined to be defined in countdown() but accessible for terminating quiz when all questions finished in handleAnswer()
var timeInterval;

// Creates array of objects to hold questions, all created in the same way so they can be referenced later, any number more can be added
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
  },
  {
    question: "What does '===' mean?",
    answers: {
      a1: "Equal in value",
      a2: "Equal in type and value",
      a3: "Does not equal",
      a4: "Equals and includes"
    },
    correctAnswer: "Equal in type and value"
  },
  {
    question: "What does the alert() function do?",
    answers: {
      a1: "Causes the screen to flash red",
      a2: "Display a siren animation",
      a3: "Plays a loud sound to alert the user",
      a4: "Displays an alert box with a message and an OK button"
    },
    correctAnswer: "Displays an alert box with a message and an OK button"
  }
];

// Creates elements for front page of website
h1El.setAttribute("style", "font-size: 50px; text-align: center;");
h1El.textContent = "Welcome to the Javascript Quiz!";
quiz.appendChild(h1El);

// Creates element that displays parameters of test on front page
pEl.setAttribute("style", "font-size: 30px; text-align: center;")
pEl.textContent = "Use the following quiz to study your Javascript knowledge. When you hit the start button the questions will appear. If you answer incorrectly your answer will be highlighted in red and 10 seconds removed from the clock. When you select the correct answer the next question will be displayed. Good luck!";
quiz.appendChild(pEl);

// Displays button that begins quiz
start.setAttribute("style", "font-size: 24px; background-color: purple; width: 20%; cursor: pointer;");
start.textContent = "Start";
quiz.appendChild(start);

// Adds event listener to start button that clears opening text, sets up question and answer elements, starts the timer, and displays the first question.
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

// Timer function, begins countdown and takes user to score entry when time's up.
function countdown() {   
  timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time Up!";
      clearInterval(timeInterval);
      displayScores();
    }
  }, 1000);
}

// Clears any colors from wrong answers and displays question from questions array of objects.
function displayQuestion() {
  var clearColors = [a1, a2, a3, a4];
      for (var i = 0; i < clearColors.length; i ++) {
        clearColors[i].setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer;");
      }
  var q = questions[questionIndex];
  h1El.textContent = q.question;
  a1.textContent = q.answers.a1;
  a2.textContent = q.answers.a2;
  a3.textContent = q.answers.a3;
  a4.textContent = q.answers.a4;
  a1.addEventListener("click", function(event) {
    event.preventDefault;
    handleAnswer(a1, q, "a1");
    });
  a2.addEventListener("click", function(event) {
    event.preventDefault;
    handleAnswer(a2, q, "a2");
    });
  a3.addEventListener("click", function(event) {
    event.preventDefault;
    handleAnswer(a3, q, "a3");
    });
  a4.addEventListener("click", function(event) {
    event.preventDefault;
    handleAnswer(a4, q, "a4");
  });
}

// Reacts to user selection of questions, if question correct increases score count and questionIndex count and fires function to move to next question. If wrong answer highlights in color and fires time deduction function.
function handleAnswer(answerEl, q, answerKey) {
  // answerEl.addEventListener("click", function(event) {
    if (scoresShown) { 
      return;
    } else if (q.answers[answerKey] == q.correctAnswer) {
      count ++;
      console.log(count)
      questionIndex ++;
      console.log(questionIndex);
      if (questionIndex < questions.length) {
      displayQuestion();
      } else {
        clearInterval(timeInterval);
        displayScores();
      }
    } else {
      wrongAnswer();
      answerEl.setAttribute("style", "font-size: 24px; width: 100%; cursor: pointer; background-color: #b22222;");
    }
  }

// Function to add input fields for submitting initials for high score. Also defines the scoresShown variable so that it ends the handleAnswer function.
function displayScores() {
  scoresShown = true
  list.remove();
  h1El.textContent = "Thanks for playing. Your score is " + count + "! Please record your initials below.";
  quiz.appendChild(scoreForm);
  scoreForm.appendChild(scoreInput);
  scoreButton.textContent = "Save";
  scoreForm.appendChild(scoreButton);
  scoreButton.addEventListener("click", function(event) {
    event.preventDefault;
    logScores();
  })
}

// Logs Initials input to local storage so they can be displayed on the high scores page
function logScores() {
  inputValue = scoreInput.value
  var scoreRecord = {
    initials: inputValue,
    score: count
  };
  localStorage.setItem("scoreRecord", JSON.stringify(scoreRecord));
}

// Decreases timer by 10 seconds when wrong answer selected.
function wrongAnswer() {
  timeLeft = timeLeft -10;
}

/* Remaining Bugs
1) Penalty applied double on second question for wrong answer, once on right answer when it shouldn't be applied. I know this is because the addeventlisterner is within the handleAnswer() function and it gets applied again for every question that happens but didn't have time to refactor to remove this.
*/