function getRandomInteger(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}

function computerPlay() {
    arr = ['Rock', 'Paper', 'Scissors'];
    randomIndex = getRandomInteger(0, arr.length);

    return arr[randomIndex];
}
