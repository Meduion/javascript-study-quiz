var timerEl = document.querySelector(".timer");
var questions = document.querySelector(".quiz-body");
var h1El = document.createElement("h1");
var pEl = document.createElement("p");

h1El.setAttribute("style", "font-size: 50px; text-align: center;");
h1El.textContent = "Welcome to the Javascript Quiz!";
questions.appendChild(h1El);

pEl.setAttribute("style", "font-size: 30px; text-align: center;")
pEl.textContent = "Use the following quiz to study your Javascript knowledge. Each question will earn you points but each wrong answer will detract time from the clock.";
questions.appendChild(pEl);





function countdown() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = 'Time Up!';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

//   countdown();


function displayQuestions() {
    questions.textContent = "This is the first question."
}