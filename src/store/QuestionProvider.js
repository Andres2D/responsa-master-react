import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QuestionsContext from './question-context';
import { scrambleArray, decodeHtml } from '../helpers/helpers';

const defaultQuestions = {
  questions: [],
  currentQuestion: 0
};

const questionsReducer = (state, action) => {
  const { type, answer: answerPayload } = action;

  if(type === 'POPULATE') {
    const {questions} = action;
    let questionsMaped = []; 
    questions.map(questionRes => {
      const baseAnswers = [
        decodeHtml(questionRes.incorrect_answers[0]),
        decodeHtml(questionRes.incorrect_answers[1]),
        decodeHtml(questionRes.incorrect_answers[2]),
        decodeHtml(questionRes.correct_answer)
      ]
      const questionFormat = {
        id: uuidv4(),
        category: questionRes.category,
        difficulty: questionRes.difficulty,
        correct_answer: questionRes.correct_answer,
        answers: scrambleArray(baseAnswers),
        question: decodeHtml(questionRes.question),
        answerSelected: null
      };
      return questionsMaped.push(questionFormat);
    });

    return {
      questions: questionsMaped,
      currentQuestion: 0
    }
  }else if(type === 'UPDATE') {
    const { questionId, answer } = answerPayload.payload;
    const questionIdx = state.questions.findIndex(q => q.id === questionId);

    const updatedQuestion = state.questions[questionIdx];

    updatedQuestion.answerSelected = answer;
    
    const updatedQuestionList = state.questions;
    updatedQuestionList[questionIdx] = updatedQuestion;

    return {
      questions: updatedQuestionList,
      currentQuestion: 0
    };
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
