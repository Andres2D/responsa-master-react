import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../store/questions';
import styles from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homeClickHandler = () => {
    dispatch(questionActions.reset());
    navigate('main', {replace: true});
  };

  return (
    <header className={styles.header}>
      <h1 onClick={homeClickHandler} className={styles.title}>🏠 Responsa Master</h1>
    </header>
  ); 
}

export default Header;
