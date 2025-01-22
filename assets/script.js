const timerElement = document.querySelector('.timer');
const players = document.querySelectorAll('.player');
const messageElement = document.querySelector('.message');
let timeLeft = 120;
let clickedPlayers = 0;
const timerInterval = setInterval(() => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's Up!";
    }

    timeLeft--;
}, 1000);

document.querySelector('.player-one').addEventListener('click', () => {
    handlePlayerClick('.player-one', -150, 0, 0.2);
});

document.querySelector('.player-two').addEventListener('click', () => {
    handlePlayerClick('.player-two', -100, 0, 0.5);
});

document.querySelector('.player-three').addEventListener('click', () => {
    handlePlayerClick('.player-three', -250, 0, 0.2);
});

document.querySelector('.player-four').addEventListener('click', () => {
    handlePlayerClick('.player-four', -100, 100, 0.5);
});

function handlePlayerClick(selector, translateY, translateX, scale) {
    const player = document.querySelector(selector);
    if (!player.style.pointerEvents || player.style.pointerEvents !== 'none') {
        clickedPlayers++;
        movePlayer(selector, translateY, translateX, scale);
        if (clickedPlayers === players.length) {
            clearInterval(timerInterval);
            timerElement.remove();
            messageElement.textContent = " All players proceeded to the next game!";
            messageElement.style.display = 'block';
            messageElement.style.top = '600px';

        }
    }
}

function movePlayer(selector, translateY, translateX, scale) {
    const player = document.querySelector(selector);
    player.style.transition = 'transform 1s ease';
    player.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    player.style.pointerEvents = 'none';
}
