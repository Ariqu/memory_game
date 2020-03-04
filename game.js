const cardsColor = ["red", "red", "green", "green",
"blue", "blue", "brown", "brown",
"yellow", "yellow", "gray", "gray", "cadetblue",
"cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards]; //18

const startTime = new Date().getTime()

let activeCard = "";
const activeCards = [];

const gamePairs = cards.length/2; //9
let gameResult = 0;





console.log(startTime)

const clickCard = function() {
  activeCard = this;
  activeCard.classList.remove("hidden");

  if(activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  }
  else {
    cards.forEach(card =>{
      card.removeEventListener("click", clickCard)
      activeCards[1] = activeCard;
      setTimeout(function () {
        if (activeCards[0].className === activeCards[1].className) {
          console.log("wygrana")
          activeCards.forEach(card => card.classList.add("win"))
          gameResult++;
          if(gameResult == gamePairs) {
            console.log("wygrana GRA!")
            const endTime = new Date().getTime();
            const gameTime = (endTime - startTime)/1000;
            alert(`Udało się! Twój wynik to: $(gameTime) sekund`)
          }
        } else {
          console.log("przegrales")
          activeCards.forEach(card => card.classList.add("hidden"))
        }

        activeCard = "";
        activeCards.length = 0;
        cards.forEach(card => card.addEventListener("click", clickCard))

      },500)

    })
  }

}

const init = function() {
  cards.forEach(card => {
    const position = Math.floor(Math.random()*cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  })

setTimeout(function(){
  cards.forEach(card => {
    card.classList.add("hidden")
    card.addEventListener("click", clickCard)
  })
}, 1200)

}
init()
