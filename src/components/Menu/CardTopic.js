import styles from './CardTopic.module.css';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg|avif|webp)$/));

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
      <img className={styles.image} alt='sports' src={images[props.image]} />
    </div>
  );
};

export default CardTopic;
