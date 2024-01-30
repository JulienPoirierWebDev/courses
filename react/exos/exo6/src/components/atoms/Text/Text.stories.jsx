import Text from "./Text";

export default {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    text: "Hello World",
  },
};

export const Small = {
  args: {
    text: "Hello World",
    size: "small",
  },
};

export const Medium = {
  args: {
    text: "Hello World",
    size: "medium",
  },
};

export const Large = {
  args: {
    text: "Hello World",
    size: "large",
  },
};

export const In_a_div = {
  args: {
    text: "Hello World",
    size: "large",
    divWidth: "200px",
    overflow: "hidden",
    border: "1px solid black",
  },
  render: (args) => (
    <div
      style={{
        width: args.divWidth,
        overflow: args.overflow,
        border: args.border,
      }}
    >
      <Text {...args} />
    </div>
  ),
};
