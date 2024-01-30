import Response from "./Response";

export default {
  title: "Components/Atoms/Response",
  component: Response,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    text: "La réponse D",
  },
};

export const Small = {
  args: {
    text: "La réponse D",
    size: "small",
  },
};

export const Medium = {
  args: {
    text: "La réponse D",
    size: "medium",
  },
};

export const Large = {
  args: {
    text: "La réponse D",
    size: "large",
  },
};

export const Wrong = {
  args: {
    text: "La réponse D",
    size: "large",
    wrong: true,
  },
};

export const Correct = {
  args: {
    text: "La réponse D",
    size: "large",
    correct: true,
  },
};
