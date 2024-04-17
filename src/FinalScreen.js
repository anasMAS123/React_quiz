import { useQuiz } from "./contexts/QuizContext";

function FinalScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>
          {emoji}Your Score is :
          <strong>
            {points} out of {maxPossiblePoints}
          </strong>
          ({Math.ceil(percentage)} % )
        </span>
      </p>
      <p className="highscore">High Score is{highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "retry" })}
      >
        Retry
      </button>
    </>
  );
}

export default FinalScreen;
