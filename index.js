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

btnPlay.addEventListener('click', () => {
	const playerChoice = document.querySelector('.choices-container button img.selected');
	if (!playerChoice) {
		return;
	}
	dialog.showModal();
	// Game logic here
});