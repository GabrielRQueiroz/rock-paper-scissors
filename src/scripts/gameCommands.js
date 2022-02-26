const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const houseRockButton = document.getElementById('house-rock');
const housePaperButton = document.getElementById('house-paper');
const houseScissorsButton = document.getElementById('house-scissors');
const pickStage = document.getElementById('action__picker');
const gameStage = document.getElementById('main__game');
const userPick = document.getElementById('user-pick');
const housePick = document.getElementById('house-pick');
const score = document.getElementById('score');
const endGame = document.getElementById('game__end-button');
const endGameTitle = document.getElementById('game__end-title');

const HOUSE_OPTIONS = [houseRockButton, housePaperButton, houseScissorsButton];

let userPreviousPick;
let housePreviouslySelectedButton;

if (!localStorage.score || localStorage < 0) localStorage.setItem('score', 0);
score.innerHTML = localStorage.score;

const housePickerFunction = () => {
	const randomHousePick = parseInt(Math.floor(Math.random() * 3 - 0.01));

	const houseSelectedButton = HOUSE_OPTIONS[randomHousePick];
	houseSelectedButton.classList.remove('hidden');
	houseSelectedButton.classList.add('chosen');

	housePick.append(houseSelectedButton);

	return houseSelectedButton;
};

const replay = () => {
	endGame.classList.add('hidden');
	endGameTitle.innerHTML = '';

	housePick.classList.remove('winner');
	userPick.classList.remove('winner');
	gameStage.classList.remove('draw');

	pickStage.append(userPreviousPick);

	gameStage.classList.remove('show-flex');

	userPreviousPick.classList.remove('chosen');

	pickStage.classList.remove('hidden');
};

const setTimeCount = () => {
	housePick.innerHTML = 3;

	const countdown = setInterval(() => {
		const currentNumber = parseInt(housePick.innerHTML);

		if (currentNumber === 0) return;

		housePick.innerHTML -= 1;
	}, 1 * 1000);

	countdown;

	setTimeout(() => {
		clearInterval(countdown);
	}, 3 * 1000);
};

const triggerOnWin = () => {
	let scoreNumber = parseInt(score.innerHTML);

	const userSavedScore = localStorage.getItem('score');
	localStorage.setItem('score', parseInt(userSavedScore) + 1);

	score.innerHTML = scoreNumber += 1;

	endGame.classList.remove('hidden');
	endGameTitle.innerHTML = 'You won';
};

const triggerOnLoss = () => {
	let scoreNumber = parseInt(score.innerHTML);

	const userSavedScore = localStorage.getItem('score');

	if (userSavedScore != 0) {
		localStorage.setItem('score', parseInt(userSavedScore) - 1);
		score.innerHTML = scoreNumber -= 1;
	}

	endGame.classList.remove('hidden');
	endGameTitle.innerHTML = 'You lost';
};

const triggerOnDraw = () => {
	endGame.classList.remove('hidden');
	endGameTitle.innerHTML = 'Draw';
};

const playRock = () => {
	pickStage.classList.add('hidden');

	gameStage.classList.add('show-flex');
	userPick.append(rockButton);
	rockButton.classList.add('chosen');

	userPreviousPick = rockButton;

	setTimeCount();

	setTimeout(() => {
		const houseSelectedButton = housePickerFunction();

		housePreviouslySelectedButton = houseSelectedButton;

		switch (houseSelectedButton.id) {
			case 'house-rock':
				gameStage.classList.add('draw');
				triggerOnDraw();
				break;
			case 'house-paper':
				housePick.classList.add('winner');
				triggerOnLoss();
				break;
			case 'house-scissors':
				userPick.classList.add('winner');
				triggerOnWin();
				break;
			default:
				return;
		}
	}, 3 * 1000);
};

const playPaper = () => {
	pickStage.classList.add('hidden');

	gameStage.classList.add('show-flex');
	userPick.append(paperButton);
	paperButton.classList.add('chosen');

	userPreviousPick = paperButton;

	setTimeCount();

	setTimeout(() => {
		const houseSelectedButton = housePickerFunction();

		housePreviouslySelectedButton = houseSelectedButton;

		switch (houseSelectedButton.id) {
			case 'house-rock':
				userPick.classList.add('winner');
				triggerOnWin();
				break;
			case 'house-paper':
				gameStage.classList.add('draw');
				triggerOnDraw();
				break;
			case 'house-scissors':
				housePick.classList.add('winner');
				triggerOnLoss();
				break;
			default:
				return;
		}
	}, 3 * 1000);
};

const playScissors = () => {
	pickStage.classList.add('hidden');

	gameStage.classList.add('show-flex');
	userPick.append(scissorsButton);
	scissorsButton.classList.add('chosen');

	userPreviousPick = scissorsButton;

	setTimeCount();

	setTimeout(() => {
		const houseSelectedButton = housePickerFunction();

		housePreviouslySelectedButton = houseSelectedButton;

		switch (houseSelectedButton.id) {
			case 'house-rock':
				housePick.classList.add('winner');
				triggerOnLoss();
				break;
			case 'house-paper':
				userPick.classList.add('winner');
				triggerOnWin();
				break;
			case 'house-scissors':
				gameStage.classList.add('draw');
				triggerOnDraw();
				break;
			default:
				return;
		}
	}, 3 * 1000);
};
