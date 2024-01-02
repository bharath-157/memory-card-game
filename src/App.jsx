import MemoryGame from "./components/MemoryGame";

import "./App.css";

const cardsList = [
  {
    id: 0,
    cardName: "Face with stuck out tongue",
    cardImage: "apple.png",
  },
  {
    id: 1,
    cardName: "Face with head bandage",
    cardImage: "burger.png",
  },
  {
    id: 2,
    cardName: "Face with hugs",
    cardImage: "carrot.png",
  },
  {
    id: 3,
    cardName: "Face with laughing",
    cardImage: "grapes.png",
  },
  {
    id: 4,
    cardName: "Laughing face with hand in front of mouth",
    cardImage: "ice-cream.png",
  },
  {
    id: 5,
    cardName: "Face with mask",
    cardImage: "mango.png",
  },
  {
    id: 6,
    cardName: "Face with silence",
    cardImage: "orange-juice.png",
  },
  {
    id: 7,
    cardName: "Face with stuck out tongue and winked eye",
    cardImage: "pizza.png",
  },
  {
    id: 8,
    cardName: "Grinning face with sweat",
    cardImage: "potato.png",
  },
  {
    id: 9,
    cardName: "Smiling face with heart eyes",
    cardImage: "ramen.png",
  },
  {
    id: 10,
    cardName: "Grinning face",
    cardImage: "strawberry.png",
  },
  {
    id: 11,
    cardName: "Smiling face with star eyes",
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
