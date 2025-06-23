// Variables para el puntaje
let playerScore = 0;
let computerScore = 0;

// Elementos del DOM
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

// Función principal del juego
function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    
    // Lógica del juego
    if (playerSelection === computerSelection) {
        resultsDiv.textContent = "Empate!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultsDiv.textContent = `Ganaste! ${playerSelection} vence a ${computerSelection}`;
    } else {
        computerScore++;
        resultsDiv.textContent = `Perdiste! ${computerSelection} vence a ${playerSelection}`;
    }

    // Actualizar puntaje
    scoreDiv.textContent = `Jugador: ${playerScore} - Computadora: ${computerScore}`;

    // Verificar ganador
    if (playerScore >= 5 || computerScore >= 5) {
        const winner = playerScore >= 5 ? "¡Jugador gana el juego!" : "¡Computadora gana el juego!";
        resultsDiv.textContent += ` ${winner}`;
        resetGame();
    }
}

// Reiniciar juego
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    setTimeout(() => {
        resultsDiv.textContent = "Nuevo juego! Elige de nuevo.";
        scoreDiv.textContent = "";
    }, 2000);
}

// Event listeners para los botones
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));