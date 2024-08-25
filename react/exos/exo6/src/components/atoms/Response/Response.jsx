import { styled } from "styled-components";
import { PropTypes } from "prop-types";

const StyledButton = styled.button`
  background-image: ${({ theme }) => theme.gradient};
  border: 3px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.text};
  transition: transform 0.1s ease-in-out;
  font-family: "Roboto", sans-serif;
  margin: 10px;

  &.active:hover {
    transform: rotate(3deg);
  }

  &.small {
    width: 200px;
    font-size: 1rem;
  }

  &.medium {
    width: 300px;
    font-size: 1.5rem;
  }

  &.large {
    width: 400px;
    font-size: 2rem;
  }

  &.wrong {
    background-image: none;
    background-color: ${({ theme }) => theme.wrong};
    border: 3px solid ${({ theme }) => theme.wrong};
  }

  &.correct {
    background-image: none;
    background-color: ${({ theme }) => theme.correct};
    border: 3px solid ${({ theme }) => theme.correct};
  }
`;

function Response({
  text,
  size = "medium",
  wrong,
  correct,
  inactive,
  onClick,
  index,
}) {
  let classes = size;

  if (!inactive && !wrong && !correct) {
    classes += " active";
  }

  if (wrong) {
    classes += " wrong";
  }

  if (correct) {
    classes += " correct";
  }

  return (
    <StyledButton
      onClick={(e) => onClick(e)}
      className={classes}
      data-index={index}
    >
      {text}
    </StyledButton>
  );
}

Response.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  wrong: PropTypes.bool,
  correct: PropTypes.bool,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

export default Response;
