import { useContext } from 'react';
import QuestionsContext from '../../store/question-context';
import styles from './QuestionCard.module.css';

const QuestionCard = props => {

  const questionCtx = useContext(QuestionsContext);
  const questionIdx = questionCtx.questions.findIndex(q => q.id === props.questionId); 
  const questionObj = questionCtx.questions[questionIdx];
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
    <div className={styles.questionCard}>
      <span className={styles.difficulty}>Difficulty: {props.difficulty}</span>
      <p>{props.question}</p>
      <h2 className={`${questionStatus?.style}`}>{questionStatus?.label}</h2>
      <span className={styles.category}>- {props.category} -</span>
    </div>
  ) 
};

export default QuestionCard;
