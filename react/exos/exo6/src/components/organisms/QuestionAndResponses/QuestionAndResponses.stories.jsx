import QuestionAndResponses from "./QuestionAndResponses";

export default {
  title: "Components/Organisms/QuestionAndResponses",
  component: QuestionAndResponses,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    question: "Quelle est la couleur du cheval blanc d'Henri IV ?",
    responses: ["La réponse A", "La réponse B", "La réponse C", "La réponse D"],
    wrongResponse: 2,
  },
};
