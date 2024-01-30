import Button from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    text: "Question suivante",
  },
};

export const Small = {
  args: {
    text: "Question suivante",
    size: "small",
  },
};

export const Medium = {
  args: {
    text: "Question suivante",
    size: "medium",
  },
};

export const Large = {
  args: {
    text: "Question suivante",
    size: "large",
  },
};
