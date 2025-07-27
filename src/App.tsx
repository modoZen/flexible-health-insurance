import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from './components/Header/Header';
import { GridContainer } from './components/GridContainer/GridContainer';
import { Footer } from './components/Footer/Footer';
import { loginSchema } from './schema/login.schema';
import type { LoginFormData } from './domain/login-form-data.type';
import { documentTypeOptions } from './constants/document-types.const';

import heroMobile from '/hero_mobile.png';
import heroDesk from '/hero_desk.png';
import './App.scss';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (!isValid) {
      return;
    }

    console.log(data);
  };

  return (
    <>
      <Header />
      <div className='hero'>
        <GridContainer>
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
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className='form__group'>
                  <div className='form__select'>
                    <select {...register('documentType')} className='form__select-field'>
                      {documentTypeOptions.map(({ text, value }) => (
                        <option key={value} value={value}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='form__input'>
                    <input
                      id='documentNumber'
                      placeholder=' '
                      {...register('documentNumber')}
                      className={`form__input-field form__input-field--select ${errors.documentNumber && 'form__input-field--error'}`}
                      type='text'
                    />
                    <label className='form__input-label' htmlFor='documentNumber'>
                      Tipo de documento
                    </label>
                  </div>
                </div>
                {errors.documentNumber && (
                  <div className='form__error'>{errors.documentNumber.message}</div>
                )}
              </div>
              <div>
                <div className='form__input'>
                  <input
                    id='phone'
                    placeholder=' '
                    {...register('phone')}
                    className={`form__input-field ${errors.phone && 'form__input-field--error'}`}
                    type='tel'
                  />
                  <label className='form__input-label' htmlFor='phone'>
                    Celular
                  </label>
                </div>
                {errors.phone && <div className='form__error'>{errors.phone.message}</div>}
              </div>
              <div>
                <div className='checkbox'>
                  <input
                    {...register('privacyPolicy')}
                    className='checkbox__input'
                    type='checkbox'
                    id='privacyPolicy'
                  />
                  <label className='checkbox__label' htmlFor='privacyPolicy'></label>
                  <span className='checkbox__text'>Acepto la Política de Privacidad</span>
                </div>
                {errors.privacyPolicy && (
                  <div className='form__error'>{errors.privacyPolicy.message}</div>
                )}
              </div>
              <div className='checkbox'>
                <input
                  {...register('commercialPolicy')}
                  className='checkbox__input'
                  type='checkbox'
                  id='commercialPolicy'
                />
                <label className='checkbox__label' htmlFor='commercialPolicy'></label>
                <span className='checkbox__text'>
                  Acepto la Política Comunicaciones Comerciales
                </span>
              </div>
              <span className='form__terms'>Aplican Términos y Condiciones.</span>
              <button type='submit' className='button'>
                Cotiza aquí
              </button>
            </form>
          </div>
        </GridContainer>
      </div>
      <Footer />
    </>
  );
}

export default App;
