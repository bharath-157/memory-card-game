import MemoryGame from "./components/MemoryGame";

import "./App.css";

const cardsList = [
  {
    id: 0,
    cardName: "Apple",
    cardImage: "apple.png",
  },
  {
    id: 1,
    cardName: "Burger",
    cardImage: "burger.png",
  },
  {
    id: 2,
    cardName: "Carrot",
    cardImage: "carrot.png",
  },
  {
    id: 3,
    cardName: "Grapes",
    cardImage: "grapes.png",
  },
  {
    id: 4,
    cardName: "Ice-cream",
    cardImage: "ice-cream.png",
  },
  {
    id: 5,
    cardName: "Mango",
    cardImage: "mango.png",
  },
  {
    id: 6,
    cardName: "Orange-juice",
    cardImage: "orange-juice.png",
  },
  {
    id: 7,
    cardName: "Pizza",
    cardImage: "pizza.png",
  },
  {
    id: 8,
    cardName: "Potato",
    cardImage: "potato.png",
  },
  {
    id: 9,
    cardName: "Ramen",
    cardImage: "ramen.png",
  },
  {
    id: 10,
    cardName: "Strawberry",
    cardImage: "strawberry.png",
  },
  {
    id: 11,
    cardName: "Tomato",
    cardImage: "tomato.png",
  },
];

const instructionsList = [
  "Click on a card, and the cards will shuffle.",
  "Try to remember the card's image.",
  "Click on another card, ensuring not to click on the same card twice.",
  "Keep clicking on unique cards until you reach a maximum score of 12 to win the game.",
];

const App = () => (
  <MemoryGame cardsList={cardsList} instructionsList={instructionsList} />
);

export default App;
