import { useState } from "react";
import { FrameCell } from "./FrameCell";

const MatchScoreBoard = () => {
  const [scores, setScores] = useState<number[][] | null>();

  const renderFrames = (scores: number[][]) => {
    scores.map((score: number[]) => <FrameCell score={score} />);
  };

  return (
    <>
      <div>MatchScoreboard</div>
      {scores && renderFrames(scores)}
    </>
  );
};

export default MatchScoreBoard;
