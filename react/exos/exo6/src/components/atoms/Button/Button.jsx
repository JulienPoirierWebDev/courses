import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.text};
  margin: 20px auto;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: rotate(3deg);
  }

  &.small {
    width: 100px;
    font-size: 1rem;
  }

  &.medium {
    width: 200px;
    font-size: 1.5rem;
  }

  &.large {
    width: 300px;
    font-size: 2rem;
  }
`;

function Button({ onClick, text, size = "medium" }) {
  let classes = size;

  return (
    <StyledDiv className={classes} onClick={onClick}>
      {text}
    </StyledDiv>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
