import styles from "./FlexboxContainer.module.css";

const FlexboxContainer = ({
  children,
  justifyContent = "center",
  wrap = true,
  column = false,
  alignItems = "center",
}) => {
  let justifyContentStyle = "";
  let alignItemsStyle = "";

  if (justifyContent === "center") {
    justifyContentStyle = styles.justifyCenter;
  } else if (justifyContent === "space-between") {
    justifyContentStyle = styles.justifySpaceBetween;
  } else if (justifyContent === "space-around") {
    justifyContentStyle = styles.justifySpaceAround;
  } else if (justifyContent === "space-evenly") {
    justifyContentStyle = styles.justifySpaceEvenly;
  } else if (justifyContent === "flex-start") {
    justifyContentStyle = styles.justifyFlexStart;
  } else if (justifyContent === "flex-end") {
    justifyContentStyle = styles.justifyFlexEnd;
  } else {
    justifyContentStyle = styles.justifyCenter;
  }

  if (alignItems === "center") {
    alignItemsStyle = styles.alignCenter;
  } else if (alignItems === "flex-start") {
    alignItemsStyle = styles.alignFlexStart;
  } else if (alignItems === "flex-end") {
    alignItemsStyle = styles.alignFlexEnd;
  } else if (alignItems === "baseline") {
    alignItemsStyle = styles.alignBaseline;
  } else if (alignItems === "stretch") {
    alignItemsStyle = styles.alignStretch;
  } else {
    alignItemsStyle = styles.alignCenter;
  }

  return (
    <div
      style={{
        flexDirection: column ? "column" : "row",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
      className={`${styles.container} + ${justifyContentStyle} + ${alignItemsStyle}`}
    >
      {children}
    </div>
  );
};

export default FlexboxContainer;
