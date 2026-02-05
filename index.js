const btnPlay = document.getElementById('play-button');
const btnReset = document.getElementById('reset-button');
const playerPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');
const choicesButtons =[...document.querySelectorAll('.choices-container button')];
const dialog = document.querySelector('dialog');

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

choicesButtons.forEach(button => {
	button.addEventListener('click', () => {
		choicesButtons.forEach(btn => btn.firstElementChild.classList.remove('selected'));
		button.firstElementChild.classList.add('selected');
	});
});

btnReset.addEventListener('click', () => {
	playerPoints.textContent = '0';
	computerPoints.textContent = '0';
	choicesButtons.forEach(btn => btn.firstElementChild.classList.remove('selected'));
});

btnPlay.addEventListener('click', () => {
	const playerChoice = document.querySelector('.choices-container button img.selected');
	if (!playerChoice) {
		return;
	}
	const computerChoice = getComputerChoice();
	const computerChoiceImg = document.getElementById(computerChoice);
	const result = document.getElementById('dialog-result-message');
	


	dialog.showModal();
	// Game logic here
});

function checkWinner(player, computer) {
	if (player === computer) {
		return 'tie';
	}
	if (
		(player === 'rock' && computer === 'scissors') ||
		(player === 'paper' && computer === 'rock') ||
		(player === 'scissors' && computer === 'paper')
	) {
		playerPoints.textContent = String(Number(playerPoints.textContent) + 1);
		return 'player';
	}
	computerPoints.textContent = String(Number(computerPoints.textContent) + 1);
	return 'computer';
}
