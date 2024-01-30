import Question from "./Question";

export default {
  title: "Components/Atoms/Question",
  component: Question,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
  },
};

export const Small = {
  args: {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    size: "small",
  },
};

export const Medium = {
  args: {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    size: "medium",
  },
};

export const Large = {
  args: {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    size: "large",
  },
};
