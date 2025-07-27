import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };
  return (
    <div className='not-found'>
      <div className='not-found__container'>
        <p className='not-found__text'>Página no encontrada :c</p>
        <Button mode='red' onClick={clickHandler}>
          Ir a home
        </Button>
      </div>
    </div>
  );
};
