import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/plans' element={<div>PlansPage</div>} />
      <Route path='*' element={<div>NotFoundPage</div>} />
    </Routes>
  );
}

export default App;
