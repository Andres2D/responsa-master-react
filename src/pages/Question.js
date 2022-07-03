import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AnswerList from '../components/Answer/AnswersList';
import QuestionCard from '../components/Question/QuestionCard';
import QuestionsContext from '../store/question-context';

const Question = () => {

  const questionsCtx = useContext(QuestionsContext);

  if(questionsCtx.questions.length === 0) {
    return <Navigate to='/main' />
  }

  const { difficulty, question, category, answers } = questionsCtx.questions[questionsCtx.currentQuestion];

  return (
    <>
      <QuestionCard
        difficulty={difficulty}
        question={question}
        category={category}
      />
      <AnswerList
        answers={answers}
      />
    </>
  )
};

export default Question;
