import ResponsePanel from "./ResponsesPanel";

export default {
  title: "Components/Molecules/ResponsesPanel",
  component: ResponsePanel,
  tags: ["autodocs"],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    responses: ["La réponse A", "La réponse B", "La réponse C", "La réponse D"],
  },
};

export const Wrong = {
  args: {
    responses: ["La réponse A", "La réponse B", "La réponse C", "La réponse D"],
    wrongResponseIndex: 2,
  },
};

export const Correct = {
  args: {
    responses: ["La réponse A", "La réponse B", "La réponse C", "La réponse D"],
    correctResponse: 2,
  },
};
