import type { FormEventHandler } from 'react';
import heroMobile from '/hero_mobile.png';
import heroDesk from '/hero_desk.png';
import './App.scss';
import { Header } from './components/Header/Header';

function App() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
  };

  return (
    <>
      <Header />
      <div className='hero'>
        <div className='hero__left'>
          <img className='hero__image hero__image--desktop' src={heroDesk} alt='Hero image' />
        </div>
        <div className='hero__right'>
          <div className='product'>
            <div className='product__container'>
              <div className='product__content'>
                <h1 className='product__title'>Seguro Salud Flexible</h1>
                <p className='product__description'>Creado para ti y tu familia</p>
              </div>
              <div className='product__image'>
                <img
                  className='hero__image hero__image--mobile'
                  src={heroMobile}
                  alt='Hero image'
                />
              </div>
            </div>
          </div>
          <p className='form__description'>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100%
            online.
          </p>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form__group'>
              <div className='form__select'>
                <select className='form__select-field' name='typeDoc' id='typeDoc'>
                  <option value=''>DNI</option>
                  <option value=''>CE</option>
                </select>
              </div>
              <div className='form__input'>
                <input
                  className='form__input-field form__input-field--select'
                  type='text'
                  name='nroDoc'
                  id='nroDoc'
                />
                <label className='form__input-label' htmlFor='nroDoc'>
                  Tipo de documento
                </label>
              </div>
            </div>
            <div className='form__input'>
              <input className='form__input-field' type='tel' name='phone' id='phone' />
              <label className='form__input-label' htmlFor='phone'>
                Celular
              </label>
            </div>
            <div className='checkbox'>
              <input className='checkbox__input' type='checkbox' id='privacyPolicy' />
              <label className='checkbox__label' htmlFor='privacyPolicy'></label>
              <span className='checkbox__text'>Acepto la Política de Privacidad</span>
            </div>
            <div className='checkbox'>
              <input className='checkbox__input' type='checkbox' id='commercialPolicy' />
              <label className='checkbox__label' htmlFor='commercialPolicy'></label>
              <span className='checkbox__text'>Acepto la Política Comunicaciones Comerciales</span>
            </div>
            <span className='form__terms'>Aplican Términos y Condiciones.</span>
            <button type='submit' className='button'>
              Cotiza aquí
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
