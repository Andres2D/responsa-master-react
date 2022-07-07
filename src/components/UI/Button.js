import styles from './Button.module.css';

const Button = props => {
  return (
    <button 
      className={`${styles.button} ${props.disabled ? styles.disabled : ''}`}
      disabled={props.disabled ? true : false}
      onClick={props.onClick}
    >
        {props.title} {props.emoji}
    </button>
  );
};

export default Button;
