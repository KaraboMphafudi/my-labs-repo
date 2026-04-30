const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
let isChecking = false; // 🔧 prevents clicks during match check

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function handleCardClick(event) {
    const card = event.target;
    // 🔧 block clicks when already checking or card is already matched/flipped
    if (
        isChecking ||
        !card.classList.contains('card') ||
        card.classList.contains('matched') ||
        selectedCards.includes(card)
    ) return;

    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        isChecking = true; // 🔧 lock further clicks
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
    isChecking = false; // 🔧 unlock clicks
}

function startGame() {
    clearInterval(gameInterval); // 🔧 stop any running timer
    score = 0;
    isChecking = false;
    selectedCards = [];
    scoreElement.textContent = `Score: ${score}`;
    startbtn.disabled = true;
    cards = shuffle(colors.concat(colors));
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
    startGameTimer(30);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);