import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRandomPosition } from '../helpers/helpers';
import { questionActions } from '../store/questions';
import categoryList from '../constants/category-list';
import difficultyList from '../constants/difficulty-list';
import Button from '../components/UI/Button';
import CardTopic from '../components/Menu/CardTopic';
import styles from './Menu.module.css';
import useRequest from '../hooks/use-reques';
import Loader from '../components/UI/Loader';

const Menu = () => {
  const navigate = useNavigate();
  const questions = useSelector(state => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    if(questions?.questions[0] && questions.currentQuestion !== null){
      const route = `/question`;
      navigate(route);
    }
  }, [questions, navigate])

  const { sendRequest, isLoading } = useRequest();

  const singleQuestionHandler = (res) => {
    dispatch(questionActions.populate(res));
  };

  const getQuestionHandler = (categoryId, amount = 1) => {    
    const query = {
      amount,
      category: categoryId ? categoryId : getRandomPosition(categoryList).id,
      difficulty: amount === 1 ? getRandomPosition(difficultyList) : null
    };
    sendRequest(query, singleQuestionHandler);
  };

  const getRandomQuestionHandler = () => {
    getQuestionHandler(null);
  };

  const cardsList = categoryList.map(({id, name, picture}) =>  {
    return (
      <CardTopic 
        key={id} 
        id={id}
        title={name} 
        image={picture} 
        onSingleQuestion={getQuestionHandler}
        onGameQuestions={getQuestionHandler}
      />
    );
  });

  if(isLoading) {
    return (<Loader />);
  }

  return (
    <div className={styles.menu}>
      <Button
        title='Get random question'
        emoji='🔀'
        onClick={getRandomQuestionHandler}
      />
      <section className={styles.cards}>
        {cardsList}
      </section>
    </div>
  );
};

export default Menu;
