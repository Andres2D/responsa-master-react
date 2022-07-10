import { useSelector } from 'react-redux';
import DifficultyState from '../UI/DifficultyState';
import Card from '../UI/Card';
import styles from './QuestionCard.module.css';

const QuestionCard = props => {

  const questionsState = useSelector(state => state.questions);
  const questionIdx = questionsState.questions.findIndex(q => q.id === props.questionId); 
  const questionObj = questionsState.questions[questionIdx];
  let questionStatus = null;

  if(questionObj.answerSelected === questionObj.correct_answer) {
    questionStatus = {
      style: styles.correct,
      label: 'Correct!'
    }
  }else if(questionObj.answerSelected && questionObj.answerSelected !== questionObj.correct_answer) {
    questionStatus = {
      style: styles.incorrect,
      label: 'Incorrect!'
    }
  }else {
    questionStatus = null;
  }

  return (
    <Card>
      <DifficultyState difficulty={props.difficulty} />
      <p className={ questionStatus ? styles.smallQuestion : styles.question }>{props.question}</p>
      {questionStatus && <h2 className={`${styles.statusTitle} ${questionStatus?.style}`}>{questionStatus?.label}</h2>}
      <span className={styles.category}>- {props.category} -</span>
    </Card>
  ) 
};

export default QuestionCard;
