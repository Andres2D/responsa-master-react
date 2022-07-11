import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="https://github.com/Andres2D/responsa-master-react">By <span className={styles.name}>Andres2D</span></a> 
        <a href="https://www.freepik.com/vectors/monkey-king">Monkey king vector created by dgim-studio - www.freepik.com</a>
        <a href="https://opentdb.com/api_config.php">Trivia API - opentdb.com</a>
      </div>
    </footer>
  );
};

export default Footer;
