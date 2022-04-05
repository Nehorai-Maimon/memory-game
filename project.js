const cards = ["A", "B", "C", "D", "E", "F"]

function createCard(idx){
    const cardEl=document.createElement("div")
    cardEl.innerHTML=cards[idx];
    cardEl.id=idx
    cardEl.className ="card"

    return cardEl
}

function shuffle (arr){
    arr.sort(() => Math.random() - 0.5);
 }

shuffle(cards);

const board = document.getElementById("board")
 for (i in cards){
    const element = createCard(i)
    board.appendChild(element)
 }

