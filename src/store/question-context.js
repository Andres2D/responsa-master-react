import React from "react"

const QuestionsContext = React.createContext({
  questions: [],
  currentQuestion: 0,
  populateQuestions: (questions) => {},
  updateAnswer: (answerId) => {},
  calculateSummary: () => {}
});

export default QuestionsContext;
