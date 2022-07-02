import Button from '../components/UI/Button';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Button
        title='Get random question'
        emoji='🔀'
      />
      <section className={styles.cards}>
        <div>
          <p>This is a card!</p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
