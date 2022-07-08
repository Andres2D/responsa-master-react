import styles from './Loader.module.css';

const Loader = () => {
  return(
    <div className={styles.container}>
      <img 
        className={styles.loader} 
        src="https://www.seekpng.com/png/full/211-2113357_load-spinner-spinner-load.png" 
        alt="loading">
      </img>
      <p className={styles.label}>Loading ...</p>
    </div>
  )
};

export default Loader;
