import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import Question from './pages/Question';
import NotFoundPage from './pages/NotFoundPage';
import Summary from './pages/Summary';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Menu />} />
        <Route path='/question' element={<Question />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
