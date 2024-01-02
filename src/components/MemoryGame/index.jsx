import { Component } from "react";

import GameCard from "../GameCard";
import NavBar from "../NavBar";
import ResultCard from "../ResultCard";

import "./index.css";

class MemoryGame extends Component {
  state = {
    clickedCardsList: [],
    isGameInProgress: true,
    topScore: 0,
  };

  resetGame = () => {
    this.setState({ clickedCardsList: [], isGameInProgress: true });
  };

  renderScoreCard = () => {
    const { cardsList } = this.props;
    const { clickedCardsList } = this.state;
    const isWon = clickedCardsList.length === cardsList.length;

    return (
      <ResultCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedCardsList.length}
      />
    );
  };

  finishGameAndSetTopScore = (currentScore) => {
    const { topScore } = this.state;
    let newTopScore = topScore;

    if (currentScore > topScore) {
      newTopScore = currentScore;
    }

    this.setState({ topScore: newTopScore, isGameInProgress: false });
  };

  clickCard = (id) => {
    const { cardsList } = this.props;
    const { clickedCardsList } = this.state;
    const isEmojiPresent = clickedCardsList.includes(id);
    const clickedEmojisLength = clickedCardsList.length;

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength);
    } else {
      if (cardsList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(cardsList.length);
      }
      this.setState((previousState) => ({
        clickedCardsList: [...previousState.clickedCardsList, id],
      }));
    }
  };

  getShuffledEmojisList = () => {
    const { cardsList } = this.props;

    return cardsList.sort(() => Math.random() - 0.5);
  };

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList();
    const { instructionsList } = this.props;
    return (
      <>
        <div className="instructions-list">
          <h2>How to Play</h2>
          <ol>
            {instructionsList.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ol>
        </div>
        <ul className="emojis-list-container">
          {shuffledEmojisList.map((emojiObject) => (
            <GameCard
              key={emojiObject.id}
              cardDeatils={emojiObject}
              clickCard={this.clickCard}
            />
          ))}
        </ul>
      </>
    );
  };

  render() {
    const { clickedCardsList, isGameInProgress, topScore } = this.state;

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedCardsList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="memory-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    );
  }
}

export default MemoryGame;
