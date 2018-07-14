/*
 * Create a list that holds all of your cards
 */
const icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-anchor", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle"];
let moves = 0;

//Creating cards
const cardsContainer = document.querySelector(".deck");
function init() {
    movesContainer.innerHTML = "0";
    for (let i = 0; i < icons.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${icons[i]}"></i>`;
        cardsContainer.appendChild(card);

        click(card);
    }
}
let openedCards = [];
let matchedCards = [];
function click(card) {
    card.addEventListener(
        "click",
        function () {
            //  we have a card opened
            const currentCard = this;
            const previousCard = openedCards[0];

            if (openedCards.length === 1) {
                card.classList.add("show", "open", "disable");
                openedCards.push(currentCard);
                //compararision
                compare(currentCard, previousCard);
            }
            // we dont have any card opened
            else {
                currentCard.classList.add("show", "open","disable");
                openedCards.push(currentCard);
            }

        }
    );
}

function compare(currentCard, previousCard) {
    if (currentCard.innerHTML === previousCard.innerHTML) 
    {
        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchedCards.push(currentCard, previousCard);
        openedCards = [];
        isOver();
    } 
    else 
    {
        setTimeout(
            function () {
                currentCard.classList.remove("show", "open","disable");
                previousCard.classList.remove("show", "open","disable");
                openedCards = [];
            },
            500
        );

    }
    // add new move
    addMove();
}

function isOver() {
    if (icons.length === matchedCards.length)
        alert("Game Over");
}

//add moves
const movesContainer = document.querySelector(".moves");

function addMove()
{
    moves++;
    movesContainer.innerHTML = moves;
}

//restart btn
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener(
    "click",
    function()
    {
        //delete all cards
        cardsContainer.innerHTML = "";

        //call init to init all cards
        init();

        //reset variables
        matchedCards = [];
    }
);

//Start of the game
init();













/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */