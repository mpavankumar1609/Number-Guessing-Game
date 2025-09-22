    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guess = Number(document.getElementById("guessInput").value);
      const message = document.getElementById("message");
      attempts++;
      let count=document.getElementById("attempts").textContent = "Attempts: " + attempts;

      if(count=="Attempts: 10"){
        message.textContent="⚠️ You Reached Your Limits";
      }else if (!guess) {
        message.textContent = "⛔ Please enter a number!";
      } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct! The number was " + secretNumber;
        message.style.color = "green";
      } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "red";
      } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "red";
      }
    }

    function resetGame() {
      secretNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      document.getElementById("message").textContent = "";
      document.getElementById("attempts").textContent = "Attempts: 0";
      document.getElementById("guessInput").value = "";
    }