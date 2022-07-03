import styles from './QuestionCard.module.css';

const QuestionCard = () => {
  return (
    <div className={styles.questionCard}>
      <span className={styles.difficulty}>Difficulty: Easy</span>
      <p>In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?</p>
      <h2 className={`${styles.correct}`}>Correct!</h2>
      <span className={styles.category}>- Category -</span>
    </div>
  ) 
};

export default QuestionCard;
