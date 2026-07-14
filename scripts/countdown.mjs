const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const timer = 10;

startButton.addEventListener('click', () => {
    let timeLeft = timer;
    countdownDisplay.textContent = timeLeft;
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            countdownDisplay.textContent = timeLeft;
        } else {
            // setTimeout(() => {
            //     countdownDisplay.textContent = 'Time\'s up!';
            // });
            clearInterval();
            countdownDisplay.textContent = 'Time\'s up!';
        }
    }, 1000);
});