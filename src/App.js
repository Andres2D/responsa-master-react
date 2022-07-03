import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import Question from './pages/Question';
import NotFoundPage from './pages/NotFoundPage';
import QuestionsProvider from './store/QuestionProvider'; 
import './App.css';

function App() {
  return (
    <QuestionsProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<Menu />} />
          <Route path='/question/:quiestionId' element={<Question />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </QuestionsProvider>
  );
}

export default App;
