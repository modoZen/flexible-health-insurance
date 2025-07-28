import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
}

export const PrivateRoute = ({ isAuthenticated }: Props) => {
  if (!isAuthenticated) {
    return <Navigate replace to='/' />;
  }

  return <Outlet />;
};
