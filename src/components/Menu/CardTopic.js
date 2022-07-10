import styles from './CardTopic.module.css';

const CardTopic = props => {

  const onClickSingleHandler = () => {
    props.onSingleQuestion(props.id);
  };

  const onClickGameHandler = () => {
    props.onGameQuestions(props.id, 5);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <h2 className={styles.title} aria-hidden>{props.title}</h2>
        <div className={styles.actions}>
          <button 
            className={`${styles.action} ${styles.single}`}
            onClick={onClickSingleHandler}
          >Single</button>
          <button 
            className={`${styles.action} ${styles.game}`}
            onClick={onClickGameHandler}
            >Game</button>
        </div>
      </div>
      <img className={styles.image} alt='sports' src={props.image}/>
    </div>
  );
};

export default CardTopic;
