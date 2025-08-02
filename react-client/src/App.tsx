import { useState } from "react";

import MatchStart from "./components/MatchStart";
import MatchScoreBoard from "./components/Scoreboard/MatchScoreBoard";

import "./App.css";

function App() {
  const [players, setPlayers] = useState<string[] | undefined>([]);

  if (players?.length) {
    return <MatchScoreBoard />;
  }

  return <MatchStart setPlayers={setPlayers} />;
}

export default App;
