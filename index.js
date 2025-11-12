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
		divStatus.textContent = "Draw";
		return (0);
	}
	if ((humanChoice == 'rock' && computerChoice == 'scissors')
		|| (humanChoice == 'paper' && computerChoice == 'rock')
		|| (humanChoice == 'scissors' && computerChoice == 'paper')) {
			divStatus.textContent = "You win this round! " + humanChoice + " beats " + computerChoice;
			return (1);
	}else {
		divStatus.textContent = "You lose this round! " + computerChoice + " beats " + humanChoice;
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
	if (playerPoint == 5){
		divStatus.innerHTML = "<span class='green'>You win</span>";
		alert('You win');
	}
	else if (computerPoint == 5){
		divStatus.innerHTML = "<span class='red'>You lose</span>";
		alert('You lose');
	}
	if (playerPoint == 5 || computerPoint == 5) {
		playerPoint = 0;
		computerPoint = 0;
	}
}

for(const b of btns) {
	b.addEventListener('click', (e)=>{
		playRound(e.target);
	});
}