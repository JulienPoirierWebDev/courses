import PropTypes from "prop-types";

function RoundBorder({ children, color }) {
  const style = {
    border: `10px solid ${color}`,
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
  };

  // border-radius     KEBAB CASE

  return <div style={style}>{children}</div>;
}

export default RoundBorder;

RoundBorder.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["blue", "red", "green"]),
};
