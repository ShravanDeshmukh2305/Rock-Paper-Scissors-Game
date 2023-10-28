export default function computeWinner(playerHand, opponentHand) {
    let winner = null;
    switch(playerHand) {
      case 'Rock' : {
          switch(opponentHand) {
              case 'Rock' : {
                  winner = "Draw!!!!";
                  break;
              }
              case 'Paper': {
                  winner = "Opponent Won!";
                  break;
              }
              case 'Scissors': {
                  winner = "You Won!";
                  break;
              }
              default : {
                  break;
              }
          }
          break;
      }

      case 'Paper' : {
          switch(opponentHand) {
              case 'Rock' : {
                  winner = "You Won!";
                  break;
              }
              case 'Paper': {
                  winner = "Draw!";
                  break;
              }
              case 'Scissors': {
                  winner = "Opponent Won!";
                  break;
              }
              default : {
                  break;
              }
          }
          break;
      }

      case 'Scissors' : {
          switch(opponentHand) {
              case 'Rock' : {
                  winner = "Opponent Won!";
                  break;
              }
              case 'Paper': {
                  winner = "You Won!";
                  break;
              }
              case 'Scissors': {
                  winner = "Draw!";
                  break;
              }
              default : {
                  break;
              }
          }
          break;
      }
    }
    return winner;
}

export function randomOpponentMove() {
    const moves = ['Rock','Paper','Scissors'];
    return moves[Math.floor(Math.random() * (2-0+1)) + 0];
}