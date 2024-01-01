import './index.css'

const GameCard = props => {
  const {cardDeatils, clickCard} = props
  const {id, cardName, cardImage} = cardDeatils

  const onClickGameCard = () => {
    clickCard(id)
  }

  return (
    <li className="card-item">
      <button type="button" className="card-btn" onClick={onClickGameCard}>
        <img className="card-icon" src={cardImage} alt={cardName} />
      </button>
    </li>
  )
}

export default GameCard
