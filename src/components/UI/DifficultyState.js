import styles from './DifficultyState.module.css';

const DifficultyState = props => {
  const {difficulty: dif} = props;
  const blockArr = dif === 'easy' 
    ? [styles.green, '', ''] 
    : (dif === 'medium' ? [styles.yellow, styles.yellow, ''] : [styles.red, styles.red, styles.red]);
  const blockElements = blockArr.map((style, i) => (
    <div key={i} className={`${styles.block} ${style}`}></div>
  ))

  return (
    <div className={styles.difficulty}>
      <p className={styles.label}>{props.difficulty}</p>
      {blockElements}
    </div>
  );
};

export default DifficultyState;
