import { PropTypes } from "prop-types";
import { styled } from "styled-components";
const Text = ({ text, size }) => {
  const Paragraph = styled.p`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};

    ${size === "small" && `font-size: 1rem;`}
    ${size === "medium" && `font-size: 1.5rem;`}
    ${size === "large" && `font-size: 2rem;`}
  `;
  return (
    <>
      <Paragraph>{text}</Paragraph>
    </>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Text;
