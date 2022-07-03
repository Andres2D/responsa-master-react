import styles from './Answer.module.css';

const Answer = () => {
  return (
    <div className={`${styles.answerCard}`}>
      <p className={styles.answerTitle}>Thievius Raccoonus</p>
    </div>
  );
};

export default Answer;
