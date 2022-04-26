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
  oneCard, counter = 0;
function createCard(idx) {
  let cardEl = document.createElement("div");
  cardEl.id = idx;
  cardEl.className = "card";
  cardEl.onclick = () => {
    cardEl.innerHTML = cards[idx];
    if (takenBool == false) {
      cardTaken.push(Number(cardEl.innerText));
      takenBool = true;
      oneCard = cardEl;
    } else {
      cardTaken.push(Number(cardEl.innerText));
      setTimeout(() => {
        if (cardTaken[0] !== cardTaken[1]) {
          let x = document.getElementById(`lose`);
          x.play();
          oneCard.innerText = ``;
          cardEl.innerHTML = ``;
          cardTaken = [];
          takenBool = false;
        } else if (cardTaken[0] === cardTaken[1]) {
          let y = document.getElementById(`win`);
          y.play();
          cardTaken = [];
          takenBool = false;
          counter += 2
          if (counter === 16){
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

