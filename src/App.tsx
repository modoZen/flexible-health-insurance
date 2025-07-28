import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { PlansPage } from './pages/plans/PlansPage';
import { PrivateRoute } from './router/PrivateRoute';
import { useAppSelector } from './store';

function App() {
  const { user } = useAppSelector((state) => state.user);
  const isAuthenticated = !!user;

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path='/plans' element={<PlansPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
