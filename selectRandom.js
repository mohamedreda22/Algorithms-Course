function selectRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomNumber = selectRandom(1, 69);
console.log(randomNumber);