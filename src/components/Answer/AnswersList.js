import Answer from './Answer';
import styles from './AnswersList.module.css';

const AnswerList = () => {

  const answers = Array.from({length: 4}).map((ans, i) => {
    return <Answer key={i}/>
  });

  return (
    <div className={styles.answers}>
      {answers}
    </div>
  );
};

export default AnswerList;
