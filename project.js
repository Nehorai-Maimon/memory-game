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
  oneCard;
function createCard(idx) {
  let cardEl = document.createElement("div");
  cardEl.id = idx;
  cardEl.className = "card";
  cardEl.onclick = () => {
    cardEl.innerHTML = cards[idx];
    if (takenBool == false) {
      cardTaken.push(Number(cardEl.innerText));
      console.log(cardTaken);
      takenBool = true;
      oneCard = cardEl;
    } else {
      cardTaken.push(Number(cardEl.innerText));
      console.log(cardTaken);
      setTimeout(()=> {
        if (cardTaken[0] !== cardTaken[1]) {
          oneCard.innerText = ``;
          cardEl.innerHTML = ``;
          cardTaken = [];
          takenBool = false;
          // alert(`no match!!🤦‍♂️`);
          let x = document.getElementById(`lose`)
          x.play();
        } else if (cardTaken[0] === cardTaken[1]) {
          cardTaken = [];
          takenBool = false;
          let y = document.getElementById(`win`)
          y.play();
          // alert(`match!!🤔`);
        }
      }, 500)
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
