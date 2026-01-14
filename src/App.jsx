import { GameHeader } from "./Components/GameHeader";
import { Card } from "./Components/Card";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const [cards, setCards] = useState([]);
  
  const initializeGame = () => {
    // Shuffle The cards

    setCards(cardValues.map(cardValues, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false;
      }
    )
    );

      console.log(cards);)

  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
