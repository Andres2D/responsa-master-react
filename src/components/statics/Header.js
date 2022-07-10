import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../store/questions';
import logo from './logo.png';
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
      <img onClick={homeClickHandler} className={styles.logo} src={logo} alt='serious-monkey'/>
    </header>
  ); 
}

export default Header;
