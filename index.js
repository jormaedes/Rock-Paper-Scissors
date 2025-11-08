function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice == 0) return ("Rock");
	else if (choice == 1) return ("Paper");
	return ("Scissors");
}

function playRound(humanChoice, computerChoice){
	humanChoice = humanChoice.toLocaleLowerCase();
	computerChoice = computerChoice.toLocaleLowerCase();
	if (humanChoice == computerChoice){
		console.log("Draw");
		return (0);
	}
	if ((humanChoice == 'rock' && computerChoice == 'scissors')
		|| (humanChoice == 'paper' && computerChoice == 'rock')
		|| (humanChoice == 'scissors' && computerChoice == 'paper')) {
			console.log("You won! " + humanChoice + " beats " + computerChoice);
			return (1);
	}else {
		console.log("You lose! " + computerChoice + " beats " + humanChoice);
		return (2);
	}
}

function getHumanChoice(){
	let choice = prompt("Choice: Rock, Paper or Scissors")
	return (choice);
}


function playGame(){
	let humanScore = 0;
	let computerScore = 0;

	for(let i = 0; i < 5; i++){
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		let winner = playRound(humanSelection, computerSelection);
		if (winner == 1)
			humanScore++;
		else if (winner == 2)
			computerScore++;
	}
	if (humanScore == computerScore)
		console.log(`Draw! Final score - Player: ${humanScore} | Computer: ${computerScore}`);
	else if (humanScore > computerScore)
		console.log(`You won! Final score - Player: ${humanScore} | Computer: ${computerScore}`);
	else
		console.log(`You lose! Final score - Player: ${humanScore} | Computer: ${computerScore}`);
}

playGame();