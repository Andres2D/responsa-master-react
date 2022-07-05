import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionsContext from '../../store/question-context';
import styles from './Header.module.css';

const Header = () => {

  const questionCtx = useContext(QuestionsContext);
  const navigate = useNavigate();
  const homeClickHandler = () => {
    questionCtx.reset();
    navigate('main', {replace: true});
  };

  return (
    <header className={styles.header}>
      <h1 onClick={homeClickHandler} className={styles.title}>🏠 Responsa Master</h1>
    </header>
  ); 
}

export default Header;
