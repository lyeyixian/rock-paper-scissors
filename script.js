class Selection {
    static ROCK = new Selection('Rock');
    static PAPER = new Selection('Paper');
    static SCISSORS = new Selection('Scissors');

    constructor(name) {
        this.name = name;
    }
}

const computerSelection = [Selection.ROCK, Selection.PAPER, Selection.SCISSORS];

function getRandomInteger(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}

function computerPlay() {
    randomIndex = getRandomInteger(0, computerSelection.length);

    return computerSelection[randomIndex].name;
}

function capitalize(str) {
    lowercase = str.slice(1).toLowerCase();
    uppercase = str.charAt(0).toUpperCase();

    return uppercase + lowercase;
}

function playRound(playerSelection, computerSelection) {
    playerInput = capitalize(playerSelection);
    const win = `You Win! ${playerInput} beats ${computerSelection}`;
    const lose = `You Lose! ${computerSelection} beats ${playerInput}`;
    const tie = "It's a tie!";

    switch (playerInput) {
        case Selection.ROCK.name:
            if (computerSelection === Selection.PAPER.name) {
                return lose;
            }

            if (computerSelection === Selection.SCISSORS.name) {
                return win;
            }
            break;
        case Selection.PAPER.name:
            if (computerSelection === Selection.ROCK.name) {
                return win;
            }

            if (computerSelection === Selection.SCISSORS.name) {
                return lose;
            }
            break;
        case Selection.SCISSORS.name:
            if (computerSelection === Selection.ROCK.name) {
                return lose;
            }

            if (computerSelection === Selection.PAPER.name) {
                return win;
            }
            break;    
        default:
            return "Please input either Rock, Paper or Scissors.";
    }

    return tie;
}

function game() {
    while (true) {
        const playerSelection = prompt('Input Rock, Paper or Scissors.');

        if (playerSelection === 'end') {
            break;
        }

        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(playRound(e.target.innerText, computerPlay()));
    });
});
