import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsremaining } = useQuiz();
  const mins = Math.floor(secondsremaining / 60);
  const seconds = Math.floor(secondsremaining % 60);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      if (secondsremaining === 0) {
        dispatch({ type: "finish" });
      }
      return () => clearInterval(id);
    },
    [dispatch, secondsremaining]
  );
  return (
    <div className="timer">
      {mins < 10 ? 0 : ""}
      {mins}:{seconds < 10 ? 0 : ""}
      {seconds}
    </div>
  );
}

export default Timer;
