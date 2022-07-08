import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRandomPosition } from '../helpers/helpers';
import { questionActions } from '../store/questions';
import categoryList from '../constants/category-list';
import difficultyList from '../constants/difficulty-list';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import styles from './Menu.module.css';
import useRequest from '../hooks/use-reques';

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

  const {sendRequest} = useRequest();

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
      <Card 
        key={id} 
        id={id}
        title={name} 
        image={picture} 
        onSingleQuestion={getQuestionHandler}
        onGameQuestions={getQuestionHandler}
      />
    );
  });

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
