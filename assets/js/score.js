var pEl = document.querySelector("p");

function renderMessage() {
    var highScores = JSON.parse(localStorage.getItem("scoreRecord"));
    if (highScores !== null) {
      pEl.textContent = highScores.initials + " scored " + highScores.score;
    }
  };

renderMessage();