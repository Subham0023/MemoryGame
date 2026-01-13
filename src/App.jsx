import { GameHeader } from "./Components/GameHeader";

function App() {
  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
    </div>
  );
}

export default App;
