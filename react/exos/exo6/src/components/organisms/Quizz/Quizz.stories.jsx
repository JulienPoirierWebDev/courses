import Quizz from "./Quizz";

export default {
  title: "Components/Organisms/Quizz",
  component: Quizz,
  tags: ["autodocs"],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    data: [
      {
        category: "society_and_culture",
        id: "622a1c357cc59eab6f94fc9b",
        correctAnswer: "Indo-European",
        incorrectAnswers: ["Kra–Dai", "Turkic", "Austronesian"],
        question: {
          text: "The language 'Sylheti' belongs to which language family?",
        },
        tags: ["language", "society_and_culture"],
        type: "text_choice",
        difficulty: "hard",
        regions: [],
        isNiche: false,
      },
      {
        category: "society_and_culture",
        id: "6477bad7550bc819ad646b31",
        correctAnswer: "The sewing machine",
        incorrectAnswers: [
          "The washing machine",
          "The dishwasher",
          "The refrigerator",
        ],
        question: {
          text: "Which invention was patented by both Isaac Singer and Elias Howe?",
        },
        tags: ["inventions", "history", "society_and_culture"],
        type: "text_choice",
        difficulty: "medium",
        regions: [],
        isNiche: false,
      },
      {
        category: "geography",
        id: "62602eb14b176d54800e3cee",
        correctAnswer: "Taichung",
        incorrectAnswers: ["Wellington", "Busan", "Kuala Lumpur"],
        question: {
          text: "Which of these cities is in Taiwan?",
        },
        tags: ["cities", "asia", "geography"],
        type: "text_choice",
        difficulty: "medium",
        regions: [],
        isNiche: false,
      },
      {
        category: "film_and_tv",
        id: "622a1c347cc59eab6f94fc0f",
        correctAnswer:
          '"Take your stinking paws off me, you damned dirty ape."',
        incorrectAnswers: [
          "\"Mrs. Robinson, you're trying to seduce me. Aren't you?\"",
          '"Toga! Toga!"',
          '"Attica! Attica!"',
        ],
        question: {
          text: "Which of these quotes is from the film 'Planet of the Apes'?",
        },
        tags: ["quotes", "film", "general_knowledge", "film_and_tv"],
        type: "text_choice",
        difficulty: "easy",
        regions: [],
        isNiche: false,
      },
      {
        category: "film_and_tv",
        id: "622a1c377cc59eab6f9506fa",
        correctAnswer: "Matthew McConaughey",
        incorrectAnswers: ["Ryan Reynolds", "Jim Carrey", "Hugh Jackman"],
        question: {
          text: "Which actor has starred in films including Interstellar and Dallas Buyers Club?",
        },
        tags: ["film_and_tv"],
        type: "text_choice",
        difficulty: "medium",
        regions: [],
        isNiche: false,
      },
      {
        category: "society_and_culture",
        id: "63e4c355106de6ffa7d4a7d4",
        correctAnswer: "Gold",
        incorrectAnswers: ["Silver", "Platinum", "Diamond"],
        question: {
          text: "What is the traditional gift for a 50th wedding anniversary?",
        },
        tags: [
          "society_and_culture",
          "traditions",
          "celebrations",
          "materials",
        ],
        type: "text_choice",
        difficulty: "medium",
        regions: [],
        isNiche: false,
      },
      {
        category: "society_and_culture",
        id: "645ba87ff09106226db23588",
        correctAnswer: "Chirac",
        incorrectAnswers: ["Macron", "Hollande", "Sarkozy"],
        question: {
          text: "Which Pompidou protege and recent French president organized talks with trade unions after France's 1968 mass demonstrations?",
        },
        tags: ["world_leaders", "france", "europe"],
        type: "text_choice",
        difficulty: "hard",
        regions: [],
        isNiche: false,
      },
      {
        category: "history",
        id: "622a1c357cc59eab6f94fde2",
        correctAnswer: "Ferdinand Magellan ",
        incorrectAnswers: ["King Charles II", "Napoleon", "Francis Drake"],
        question: {
          text: "Who renamed the South Sea as the Pacific Ocean in 1520?",
        },
        tags: ["bodies_of_water", "history"],
        type: "text_choice",
        difficulty: "hard",
        regions: [],
        isNiche: false,
      },
      {
        category: "history",
        id: "622a1c367cc59eab6f95038a",
        correctAnswer: "Mikhail Gorbachev",
        incorrectAnswers: ["Boris Yeltsin", "Vladimir Lenin", "Josef Stalin"],
        question: {
          text: "Who resigned as Russian Premier on Christmas day 1991?",
        },
        tags: ["politics", "russia", "leaders", "people", "history"],
        type: "text_choice",
        difficulty: "medium",
        regions: [],
        isNiche: false,
      },
      {
        category: "film_and_tv",
        id: "622a1c347cc59eab6f94fb2a",
        correctAnswer: "12 Years a Slave",
        incorrectAnswers: [
          "American Hustle",
          "Captain Phillips",
          "Dallas Buyers Club",
        ],
        question: {
          text: "Which film won the Academy Award for Best Picture in 2013?",
        },
        tags: ["academy_awards", "film", "film_and_tv"],
        type: "text_choice",
        difficulty: "hard",
        regions: [],
        isNiche: false,
      },
    ],
  },
};
