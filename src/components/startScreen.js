function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the erripuk dheeraj gadi gurinchi quiz!</h2>
      <h3>{numQuestions} questions to know how much erripuk dheeraj is</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
export default StartScreen;
