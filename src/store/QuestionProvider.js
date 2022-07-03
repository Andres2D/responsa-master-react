import { useReducer } from 'react';
import QuestionsContext from './question-context';

const defaultQuestions = {
  questions: [],
  currentQuestion: 0
};

const questionsReducer = (state, action) => {
  const { type } = action;
  switch(type) {
    case 'POPULATE':
      break;
    case 'UPDATE':
      break;
    case 'SUMMARY':
      break;
    default:
      break;
  }
};

const QuestionsProvider = props => {
  const [questionsState, dispatchQuestionsAction] = useReducer(questionsReducer, defaultQuestions);

  const populateQuestionsHandler = questions => {
    dispatchQuestionsAction({type: 'POPULATE', questions});
  };

  const updateQuestionHandler = answer => {
    dispatchQuestionsAction({type: 'UPDATE', answer});
  };

  const calculateSummaryHandler = () => {
    dispatchQuestionsAction({type: 'SUMMARY'});
  };

  const questionsContext = {
    questions: questionsState.questions,
    currentQuestion: questionsState.currentQuestion,
    populateQuestions: questionsState.populateQuestions,
    updateAnswer: questionsState.updateAnswer,
    calculateSummary: questionsState.calculateSummary
  }

  return (
    <QuestionsContext.Provider
      value={questionsContext}>
      {props.children}
    </QuestionsContext.Provider>
  )
};

export default QuestionsProvider;
