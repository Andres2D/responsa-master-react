import { v4 as uuidv4 } from 'uuid';
import Answer from './Answer';
import styles from './AnswersList.module.css';

const AnswerList = props => {

  const answers = props.answers.map((answer) => {
    return <Answer answer={answer} key={uuidv4()} questionId={props.questionId}/>
  });

  return (
    <div className={styles.answers}>
      {answers}
    </div>
  );
};

export default AnswerList;
