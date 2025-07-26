import { GridContainer } from '../GridContainer/GridContainer';
import footerLogoMobile from '/footer_logo_mobile.svg';
import footerLogoDesk from '/footer_logo_desk.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <GridContainer>
        <div className='footer__content'>
          <div className='footer__left'>
            <picture>
              <source media='(min-width:1024px)' srcSet={footerLogoDesk} />
              <img src={footerLogoMobile} alt='Logo Rimac Footer' />
            </picture>
          </div>
          <div className='footer__right'>
            <span className='footer__text'>© 2023 RIMAC Seguros y Reaseguros.</span>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};
