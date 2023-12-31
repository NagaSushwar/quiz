function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}
        <strong>({percentage}%)</strong>
      </div>
      <p className="highscore">Highscore: {highscore} points</p>
      <div className="btn btn-ui" onClick={() => dispatch({ type: "reset " })}>
        Restart Quiz
      </div>
    </>
  );
}
export default FinishedScreen;
