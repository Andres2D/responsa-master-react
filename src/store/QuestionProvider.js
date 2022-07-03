import { useReducer } from 'react';
import QuestionsContext from './question-context';

const defaultQuestions = {
  questions: [],
  currentQuestion: 0
};

const questionsReducer = (state, action) => {
  const { type } = action;

  if(type === 'POPULATE') {
    const {questions} = action;
    let questionsMaped = []; 
    questions.map(questionRes => {
      const questionFormat = {
        category: questionRes.category,
        difficulty: questionRes.difficulty,
        correct_answer: questionRes.correct_answer,
        answers: [
          ...questionRes.incorrect_answers,
          questionRes.correct_answer
        ],
        question: questionRes.question
      };
      return questionsMaped.push(questionFormat);
    });
    return {
      questions: questionsMaped,
      currentQuestion: 0
    }
  }

  return defaultQuestions;
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
    populateQuestions: populateQuestionsHandler,
    updateAnswer: updateQuestionHandler,
    calculateSummary: calculateSummaryHandler
  }

  return (
    <QuestionsContext.Provider
      value={questionsContext}>
      {props.children}
    </QuestionsContext.Provider>
  )
};

export default QuestionsProvider;
