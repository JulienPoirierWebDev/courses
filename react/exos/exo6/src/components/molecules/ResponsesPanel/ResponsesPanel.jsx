import Response from "../../atoms/Response/Response";
import PropTypes from "prop-types";
import styled from "styled-components";
import useParentWidthForSizing from "../../../hooks/useParentWidthForSizing";

const ResponseContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;

  @media (min-width: 754px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;

function ResponsesPanel({
  responses,
  wrongResponseIndex,
  correctResponseIndex,
  onResponseClick,
}) {
  const inactive = wrongResponseIndex || correctResponseIndex ? true : false;
  const { panelRef, size } = useParentWidthForSizing();
  return (
    <ResponseContainer ref={panelRef}>
      {responses.map((response, index) => {
        return (
          <Response
            key={response}
            text={response}
            size={size}
            correct={index === correctResponseIndex}
            wrong={index === wrongResponseIndex}
            inactive={inactive}
            onClick={!inactive ? onResponseClick : null}
            index={index}
          />
        );
      })}
    </ResponseContainer>
  );
}

ResponsesPanel.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongResponseIndex: PropTypes.number,
  correctResponseIndex: PropTypes.number,
  onResponseClick: PropTypes.func.isRequired,
};

export default ResponsesPanel;
