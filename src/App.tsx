import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/plans' element={<div>PlansPage</div>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
