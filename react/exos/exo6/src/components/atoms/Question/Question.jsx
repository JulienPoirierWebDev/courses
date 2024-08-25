import styled from "styled-components";
import PropTypes from "prop-types";
import useParentWidthForSizing from "../../../hooks/useParentWidthForSizing";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-align: center;

  &.small {
    font-size: 1rem;
  }

  &.medium {
    font-size: 1.5rem;
  }

  &.large {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.text};
`;

function Question({ question }) {
  const { panelRef, size } = useParentWidthForSizing();

  return (
    <Container ref={panelRef}>
      <Paragraph className={size}>{question}</Paragraph>
    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Question;
