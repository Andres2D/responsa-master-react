import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomPosition } from '../helpers/helpers';
import categoryList from '../constants/category-list';
import difficultyList from '../constants/difficulty-list';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import styles from './Menu.module.css';
import useRequest from '../hooks/use-reques';
import QuestionsContext from '../store/question-context';

const DUMMY_CARDS = [
  {
    id: 'cat_1',
    title: 'Sports',
    image: 'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40-s1100-c50.jpg'
  },
  {
    id: 'cat_2',
    title: 'Video Games',
    image: 'https://thenurj.com/wp-content/uploads/2021/03/Independent-video-games.png'
  },
  {
    id: 'cat_3',
    title: 'History',
    image: 'https://i.imgur.com/mb6XyrA.png'
  },
  {
    id: 'cat_4',
    title: 'Movies',
    image: 'https://s.abcnews.com/images/Entertainment/WireAP_ed5f8b8cba114c7b84e25e9420cafb6d_16x9_992.jpg'
  },
  {
    id: 'cat_5',
    title: 'Books',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pocket_books.png/1200px-Pocket_books.png'
  },
  {
    id: 'cat_6',
    title: 'Geography',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
  }
];

const Menu = () => {

  const navigate = useNavigate();
  
  const questionsCtx = useContext(QuestionsContext);
  useEffect(() => {
    if(!questionsCtx.questions[0]) {
      return;
    }
    const route = `/question/${questionsCtx.questions[0].id}`
    navigate(route)

  }, [questionsCtx, navigate]);

  const {sendRequest} = useRequest();

  const cardsList = DUMMY_CARDS.map(({id, title, image}) =>  {
    return (<Card key={id} title={title} image={image} />);
  });

  const singleQuestionHandler = (res) => {
    questionsCtx.populateQuestions(res);
  }

  const getRandomQuestionHandler = () => {
    const query = {
      amount: 1,
      category: getRandomPosition(categoryList).id,
      difficulty: getRandomPosition(difficultyList)
    };
    sendRequest(query, singleQuestionHandler);
  };

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
