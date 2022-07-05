import { useContext } from 'react';
import QuestionsContext from '../../store/question-context';
import styles from './Answer.module.css';

const Answer = props => {

  const questionCtx = useContext(QuestionsContext);
  const questionIdx = questionCtx.questions.findIndex(q => q.id === props.questionId); 
  const questionObj = questionCtx.questions[questionIdx];
  let answerStatus = null;

  if(props.answer === questionObj.answerSelected) {
    if(questionObj.answerSelected === questionObj.correct_answer) {
      answerStatus = styles.correct;
    }else if(questionObj.answerSelected !== questionObj.correct_answer) {
      answerStatus = styles.incorrect;
    }
  }else if(questionObj.answerSelected && props.answer !== questionObj.answerSelected){
    if(questionObj.correct_answer === props.answer) {
      answerStatus = styles.disabledCorrect;
    }else {
      answerStatus = styles.disabled;      
    }
  }else {
    answerStatus = null;
  }

  const answerQuestionHandler = () => {
    const answerUpdate = {
      questionId: props.questionId,
      answer: props.answer
    }
    questionCtx.updateAnswer({type: 'UPDATE', payload: answerUpdate});
  };
  
  return (
    <button 
      onClick={answerQuestionHandler} 
      className={`${styles.answerBtn} ${answerStatus}`}
      disabled={answerStatus === styles.disabled || answerStatus === styles.disabledCorrect}
    >
      <p className={styles.answerTitle}>{props.answer}</p>
    </button>
  );
};

export default Answer;
