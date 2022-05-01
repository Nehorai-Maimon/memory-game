let cards = [];
numOfCards = 16;
for (let i = 1; i <= numOfCards / 2; i++) {
  cards[i] = i;
}
let a = 1;
for (let i = numOfCards; i > numOfCards / 2; i--) {
  cards[i] = a;
  a++;
}

let cardTaken = [],
  takenBool = false,
  oneCard,
  thisCard,
  twoCard,turn = false, winner,
  counter = 0;
function createCard(idx) {
  let cardEl = document.createElement("div");
  cardEl.id = idx;
  cardEl.className = "card";
  cardEl.onclick = function (event) {
    cardEl.innerHTML = cards[idx];
    if (takenBool == false) {
      thisCard = event.target;
      cardTaken.push(Number(cardEl.innerText));
      takenBool = true;
      oneCard = cardEl;
    } else {
      twoCard = event.target;
      cardTaken.push(Number(cardEl.innerText));
      setTimeout(() => {
        if (cardTaken[0] !== cardTaken[1]) {
          let x = document.getElementById(`lose`);
          x.play();
          oneCard.innerText = ``;
          cardEl.innerHTML = ``;
          cardTaken = [];
          turn = !turn
          takenBool = false;
        } else if (cardTaken[0] === cardTaken[1]) {
          let y = document.getElementById(`win`);
          y.play();
          cardTaken = [];
          takenBool = false;
          counter += 2;
          if(turn == false){
            winner = player1
          } else{
            winner = player2
          }
          trueAns(winner)
          hideCard()
          if (counter === 16) {
            let z = document.getElementById(`finish`);
            z.play();
          }
        }
      }, 500);
    }
  };
  return cardEl;
}

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(cards);

const board = document.getElementById("board");
for (i in cards) {
  const element = createCard(i);
  board.appendChild(element);
}

const player1 = document.querySelector(`#player1`);
const player2 = document.querySelector(`#player2`);

function trueAns(winner){
  let won1 = document.createElement(`div`);
  won1.className = `winners`
  won1.innerHTML = thisCard.innerHTML
  winner.append(won1)
}

function hideCard(){
  thisCard.className = "hiddenCard";
  twoCard.className = "hiddenCard";
  twoCard.innerHTML = "";
  oneCard.innerHTML = "";
}
