const btns = document.querySelectorAll('button');

function getComputerChoice() {
	const	options = ['rock', 'paper', 'scissors'];
	return options[(Math.floor(Math.random() * 3))];
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

}

for(const b of btns) {
	b.addEventListener('click', (e)=>{
		playRound(e.target);
	});
}