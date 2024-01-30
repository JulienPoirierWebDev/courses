import PropTypes from "prop-types";
import Question from "../../atoms/Question/Question";
import ResponsesPanel from "../../molecules/ResponsesPanel/ResponsesPanel";

function QuestionAndResponses({
  question,
  responses,
  onResponseClick,
  correctResponseIndex,
  wrongResponseIndex,
}) {
  return (
    <div>
      <Question question={question} />
      <div>
        <ResponsesPanel
          responses={responses}
          onResponseClick={onResponseClick}
          correctResponseIndex={correctResponseIndex}
          wrongResponseIndex={wrongResponseIndex}
        />
      </div>
    </div>
  );
}

QuestionAndResponses.propTypes = {
  question: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf(PropTypes.string).isRequired,
  onResponseClick: PropTypes.func.isRequired,
  correctResponseIndex: PropTypes.number,
  wrongResponseIndex: PropTypes.number,
};

export default QuestionAndResponses;
