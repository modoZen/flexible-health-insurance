import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PrivateRoute } from './router/PrivateRoute';
import { useAppSelector } from './store';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/home/HomePage').then((m) => ({ default: m.HomePage })));
const PlansPage = lazy(() =>
  import('./pages/plans/PlansPage').then((m) => ({ default: m.PlansPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);

function App() {
  const { user } = useAppSelector((state) => state.user);
  const isLoading = useAppSelector((state) => state.ui.loading);
  const isAuthenticated = !!user;

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/plans' element={<PlansPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
