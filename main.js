import computeWinner from "./utils/logic.js";
import { randomOpponentMove } from "./utils/logic.js";


const form = document.querySelector('#player-selection-form');
let player = null;
let winner = null

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target[0].checked) {
        player = event.target[0].value;
    } else if (event.target[1].checked) {
        player = event.target[1].value
    } else {
        player = event.target[2].value;
    }
    const opponent = randomOpponentMove();
    winner = computeWinner(player, opponent);
    alert(winner);
})
