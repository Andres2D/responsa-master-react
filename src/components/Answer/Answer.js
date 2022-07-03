import styles from './Answer.module.css';

const Answer = props => {
  return (
    <div className={`${styles.answerCard}`}>
      <p className={styles.answerTitle}>{props.answer}</p>
    </div>
  );
};

export default Answer;
