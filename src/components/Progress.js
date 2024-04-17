import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, index, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={15} value={index + Number(answer !== null)}></progress>
      <p>
        <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
