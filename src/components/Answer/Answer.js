import { useSelector, useDispatch } from 'react-redux';
import { questionActions } from '../../store/questions';
import styles from './Answer.module.css';

const Answer = props => {
  const dispatch = useDispatch();
  const questionsState = useSelector(state => state.questions);
  const questionIdx = questionsState.questions.findIndex(q => q.id === props.questionId); 
  const questionObj = questionsState.questions[questionIdx];
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
    dispatch(questionActions.update(answerUpdate));
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
