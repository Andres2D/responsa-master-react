import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AnswerList from '../components/Answer/AnswersList';
import QuestionCard from '../components/Question/QuestionCard';

const Question = () => {

  const questionsState = useSelector(state => state.questions);

  if(questionsState.questions.length === 0) {
    return <Navigate to='/main' />
  }

  const { difficulty, question, category, answers, id } = questionsState.questions[questionsState.currentQuestion];

  return (
    <>
      <QuestionCard
        difficulty={difficulty}
        question={question}
        category={category}
        questionId={id}
      />
      <AnswerList
        answers={answers}
        questionId={id}
      />
    </>
  )
};

export default Question;
