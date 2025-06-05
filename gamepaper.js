
//opción de la computadora
const getcomputerChoice = () => {
    const choices = ['piedra', 'papel', 'tijera'];// Array de opciones
    // Generar un índice aleatorio para seleccionar una opción
    const randomIndex = Math.floor(Math.random() * choices.length);// Math.random() genera un número entre 0 y 1, multiplicamos por la longitud del array
    // Devolver la opción seleccionada
    return choices[randomIndex];
}

// opción del jugador
const getHumanChoice = () => {
    // Obtener la opción del jugador desde el prompt
    const playerChoice = prompt("Elige: piedra, papel o tijera").toLowerCase();
    // Validar la opción del jugador
    if (['piedra', 'papel', 'tijera'].includes(playerChoice)) {
        return playerChoice;
    } else {
        alert("Opción no válida. Por favor, elige piedra, papel o tijera.");
        return getHumanChoice(); // Volver a pedir la opción si es inválida
    }
} 

// variable de puntuación 
let humanScore = 0;
let computerScore = 0;

// Función para jugar una ronda
function playRound(humanChoice, computerChoice) {   
    console.log(`Jugador: ${humanChoice}, Computadora: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("¡Es un empate!");
    } else if (
        (humanChoice === 'piedra' && computerChoice === 'tijera') ||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijera' && computerChoice === 'papel')
    ) {
        console.log("¡Ganaste esta ronda!");
        humanScore++;
    } else {
        console.log("¡Perdiste esta ronda!");
        computerScore++;
    }
}   

// Lógica del juego 5 rondas
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getcomputerChoice();
    playRound(humanSelection, computerSelection);
}

// Mostrar el resultado final
if (humanScore > computerScore) {
    console.log(`¡Ganaste! Puntaje final: Jugador ${humanScore} - Computadora ${computerScore}`);
}else if (computerScore > humanScore) {
    console.log(`¡Perdiste! Puntaje final: Jugador ${humanScore} - Computadora ${computerScore}`);
}else {
    console.log(`¡Es un empate! Puntaje final: Jugador ${humanScore} - Computadora ${computerScore}`);
}   
