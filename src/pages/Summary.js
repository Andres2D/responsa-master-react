import { useDispatch, useSelector } from 'react-redux';
import styles from './Summary.module.css';
import Card from "../components/UI/Card";
import { calculateScoreMessage } from '../helpers/helpers';
import { questionActions } from '../store/questions';
import Button from '../components/UI/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const Summary = () => {

  const questionsState = useSelector(state => state.questions);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if(questionsState.questions.length < 2) {
    return <Navigate to='/main' />
  }

  const {
    totalQuestions,
    correctAnswers,
    message
  } = calculateScoreMessage(questionsState.questions);

  const nextHandler =  () => {
    dispatch(questionActions.nextQuestion());
    navigate('/main');
  };

  return (
    <div className={styles.container}>
      <Card className={styles.center}>
        <h1>Score</h1>
        <h2 className={styles.score}>{correctAnswers}/{totalQuestions}</h2>
        <h2>{message}</h2>  
      </Card>
      <Button
        title='Continue'
        onClick={nextHandler}
      />
    </div>
  );
};

export default Summary;
