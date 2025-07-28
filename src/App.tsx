import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { PlansPage } from './pages/plans/PlansPage';
import { PrivateRoute } from './router/PrivateRoute';
import { useAppSelector } from './store';
import { Loader } from './components/Loader/Loader';

function App() {
  const { user } = useAppSelector((state) => state.user);
  const isLoading = useAppSelector((state) => state.ui.loading);
  const isAuthenticated = !!user;

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/plans' element={<PlansPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
