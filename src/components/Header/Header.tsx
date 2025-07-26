import ic_phone from '/ic_phone_solid.svg';
import rimac_logo from '/rimac_logo.svg';
import { GridContainer } from '../GridContainer/GridContainer';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <GridContainer>
        <div className='header__content'>
          <div className='header__left'>
            <img src={rimac_logo} alt='Rimac logo' />
          </div>
          <div className='header__right'>
            <span className='header__text'>¡Compra por este medio!</span>
            <div className='header__phone'>
              <img className='header__phone-icon' src={ic_phone} alt='Phone icon' />
              <span className='header__phone-number'>(01) 411 6001</span>
            </div>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};
