import styles from './QuestionCard.module.css';

const QuestionCard = props => {
  return (
    <div className={styles.questionCard}>
      <span className={styles.difficulty}>Difficulty: {props.difficulty}</span>
      <p>{props.question}</p>
      { false && <h2 className={`${styles.correct}`}>Correct!</h2> }
      <span className={styles.category}>- {props.category} -</span>
    </div>
  ) 
};

export default QuestionCard;
