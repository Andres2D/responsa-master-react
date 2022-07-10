import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { questionActions } from '../store/questions';
import AnswerList from '../components/Answer/AnswersList';
import QuestionCard from '../components/Question/QuestionCard';
import Button from '../components/UI/Button';
import styles from './Question.module.css';

const Question = () => {
  const questionsState = useSelector(state => state.questions);
  const dispatch = useDispatch();

  if(questionsState.currentQuestion === null || questionsState.questions.length === 0) {
    return <Navigate to='/main' />
  }

  if(questionsState.currentQuestion === questionsState.questions.length) {
    return <Navigate to='/summary' />
  }

  const { 
    difficulty, 
    question, 
    category, 
    answers, 
    id,
    answerSelected
  } = questionsState.questions[questionsState.currentQuestion];

  const disabledNextButton = answerSelected ? false : true;

  const nextHandler = () => {
    dispatch(questionActions.nextQuestion());
  };

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
      <div className={styles.center}>
        <Button
          title='Continue'
          disabled={disabledNextButton}
          onClick={nextHandler}
        />
      </div>
    </>
  )
};

export default Question;
