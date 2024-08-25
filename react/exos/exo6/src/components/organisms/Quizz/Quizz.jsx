import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import QuestionAndResponses from "../QuestionAndResponses";
import Button from "../../atoms/Button/Button";

function Quizz({ data }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [question, setQuestion] = useState(data[currentQuestion].question.text);
  const [score, setScore] = useState(0);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [wrongResponseIndex, setWrongResponseIndex] = useState(null);
  const [correctResponseIndex, setCorrectResponseIndex] = useState(null);
  const [isQuizzFinished, setIsQuizzFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeoutForTimeLeft, setTimeoutForTimeLeft] = useState(null);

  const onResponseClick = (e) => {
    clearTimeout(timer);
    clearInterval(timeoutForTimeLeft);
    setTimeoutForTimeLeft(null);
    setTimeLeft(0);

    if (e.target.textContent === data[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
      setIsQuestionAnswered(true);
      setCorrectResponseIndex(+e.target.dataset.index);
    } else {
      setIsQuestionAnswered(true);
      setWrongResponseIndex(parseInt(e.target.dataset.index));
      setCorrectResponseIndex(
        responses.findIndex(
          (response) => response === data[currentQuestion].correctAnswer
        )
      );
    }
  };

  const onNextQuestionClick = () => {
    if (currentQuestion === data.length - 1) {
      setIsQuizzFinished(true);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setIsQuestionAnswered(false);
    setWrongResponseIndex(null);
    setCorrectResponseIndex(null);
  };

  useEffect(() => {
    setQuestion(data[currentQuestion].question.text);
    setResponses(
      data[currentQuestion].incorrectAnswers
        .concat(data[currentQuestion].correctAnswer)
        .sort(() => Math.random())
    );
    const timer = setTimeout(() => {
      setIsQuestionAnswered(true);
      setWrongResponseIndex(null);
      clearInterval(timeoutForTimeLeft);
      setTimeoutForTimeLeft(null);
      setTimeLeft(0);

      setCorrectResponseIndex(
        responses.findIndex(
          (response) => response === data[currentQuestion].correctAnswer
        )
      );
    }, 10000);

    setTimeLeft(10);

    const timeoutForTimeLeft = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    setTimeoutForTimeLeft(timeoutForTimeLeft);

    setTimer(timer);
    return () => clearTimeout(timer);
  }, [currentQuestion, data]);

  if (isQuizzFinished) {
    return (
      <Button
        text={`Le quizz est terminé ! Votre score est : ${score} / ${data.length}`}
        size={"large"}
      />
    );
  }

  return (
    <div>
      <QuestionAndResponses
        question={question}
        responses={responses}
        onResponseClick={onResponseClick}
        wrongResponseIndex={wrongResponseIndex}
        correctResponseIndex={correctResponseIndex}
      />
      {isQuestionAnswered ? (
        <Button text="Question Suivante" onClick={onNextQuestionClick} />
      ) : null}
      {timer && timeoutForTimeLeft ? <p>Temps restant : {timeLeft}</p> : null}
    </div>
  );
}

Quizz.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
      isNiche: PropTypes.bool.isRequired,
      question: PropTypes.object.isRequired,
      regions: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Quizz;
