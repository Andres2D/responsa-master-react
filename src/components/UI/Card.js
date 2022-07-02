import styles from './Card.module.css';

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <h2 className={styles.title} aria-hidden>{props.title}</h2>
        <div className={styles.actions}>
          <button className={`${styles.action} ${styles.single}`}>Single question</button>
          <button className={`${styles.action} ${styles.game}`}>Game</button>
        </div>
      </div>
      <img className={styles.image} alt='sports' src={props.image}/>
    </div>
  );
};

export default Card;
