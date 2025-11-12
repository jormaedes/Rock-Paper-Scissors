const btns = document.querySelectorAll('button');
const ppoint = document.querySelector('#ppoint');
const cpoint = document.querySelector('#cpoint');
const divStatus = document.querySelector('#status');
let playerPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
	const	options = ['rock', 'paper', 'scissors'];
	return options[(Math.floor(Math.random() * 3))];
}

function getWinner(humanChoice, computerChoice){
	humanChoice = humanChoice.toLocaleLowerCase();
	computerChoice = computerChoice.toLocaleLowerCase();
	console.log(humanChoice, computerChoice);
	if (humanChoice == computerChoice){
		return (0);
	}
	if ((humanChoice == 'rock' && computerChoice == 'scissors')
		|| (humanChoice == 'paper' && computerChoice == 'rock')
		|| (humanChoice == 'scissors' && computerChoice == 'paper')) {
			return (1);
	}else {
		return (2);
	}
}

function updatePoints(){
	ppoint.textContent = playerPoint.toString();
	cpoint.textContent = computerPoint.toString();
}

function playRound(target) {
	let	choicePlayer;

	if (target.getAttribute('id') == 'btn-rock')
		choicePlayer = 'rock';
	else if (target.getAttribute('id') == 'btn-paper')
		choicePlayer = 'paper';
	else
		choicePlayer = 'scissors';
	const choiceComputer = getComputerChoice();
	const winner = getWinner(choicePlayer, choiceComputer);
	if (winner == 1)
		playerPoint++;
	else if (winner == 2)
		computerPoint++;
	updatePoints();
	if (playerPoint == 5)
		divStatus.innerHTML = "<span class='green'>You win</span>";
	else if (computerPoint == 5)
		divStatus.innerHTML = "<span class='red'>You lose</span>";
}

for(const b of btns) {
	b.addEventListener('click', (e)=>{
		playRound(e.target);
	});
}