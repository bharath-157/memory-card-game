import "./index.css";

const NavBar = (props) => {
  const { currentScore, isGameInProgress, topScore } = props;

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img className="game-logo" src="game-icon.png" alt="Game logo" />
          <h1 className="title">Memory Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Game Score: {currentScore}</p>
            <p className="score">Best Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
