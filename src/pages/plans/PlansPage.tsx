import { useState } from 'react';
import { GridContainer } from '../../components/GridContainer/GridContainer';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeUser } from '../../store/slices/userSlice';
import { actions } from '../../api/action';
import { PlanCard } from '../../components/PlanCard/PlanCard';
import { setSelectedPlan } from '../../store/slices/planSlice';
import { SummaryCard } from '../../components/SummaryCard/SummaryCard';
import { getAgeFromDateOfBirthday } from '../../utils/ageFromDateOfBirthday';
import type { PersonType } from '../../domain/person-type.type';
import type { Plan } from '../../domain/plan.interface';

import line from '/line.png';
import icon_back_neutral from '/ic_arrow_back_neutral.svg';
import icon_back_blue from '/ic_arrow_back_blue.svg';
import ic_protection_light from '/ic_protection_light.svg';
import ic_add_user_light from '/ic_add_user_light.svg';
import ic_check from '/ic_check.svg';

import './PlansPage.scss';

export const PlansPage = () => {
  const dispatch = useAppDispatch();
  const { plans, selectedPlan } = useAppSelector((state) => state.plan);
  const user = useAppSelector((state) => state.user.user);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPerson, setSelectedPerson] = useState<PersonType | null>(null);

  const isDiscounted = selectedPerson === 'someone';

  if (!user) {
    return null;
  }

  const finalPlans = plans
    .filter((plan) => {
      return plan.age > getAgeFromDateOfBirthday(user.birthDay);
    })
    .map((plan) => {
      const discountedPrice = isDiscounted ? +(plan.price * 0.95).toFixed(2) : plan.price;

      return { ...plan, price: discountedPrice };
    });

  const goBack = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
      return;
    }
    dispatch(removeUser());
  };

  const handleSelectPerson = async (option: PersonType) => {
    await actions.getPlans(dispatch);
    setSelectedPerson(option);
  };

  const handleSelectPlan = (plan: Plan) => {
    dispatch(setSelectedPlan(plan));
    setCurrentStep(2);
  };

  return (
    <>
      <Header />
      <div className='steps'>
        <div className='steps__content steps__content--mobile'>
          <img src={icon_back_neutral} alt='icon_back' onClick={goBack} />
          <div>Paso {currentStep} de 2</div>
          <div className='steps__bar'>
            <div className='steps__bar-fill'></div>
          </div>
        </div>
        <div className='steps__content steps__content--desktop'>
          <div className='steps__item'>
            <div className={`steps__number ${currentStep === 1 ? 'steps__number--active' : ''}`}>
              1
            </div>
            <div className={`steps__label ${currentStep === 1 ? 'steps__label--active' : ''}`}>
              Planes y coberturas
            </div>
          </div>

          <img src={line} alt='decoracion' />

          <div className='steps__item'>
            <div className={`steps__number ${currentStep === 2 ? 'steps__number--active' : ''}`}>
              2
            </div>
            <div className={`steps__label ${currentStep === 2 ? 'steps__label--active' : ''}`}>
              Resumen
            </div>
          </div>
        </div>
      </div>
      <GridContainer>
        <div className='back'>
          <button className='back-button' onClick={goBack}>
            <img src={icon_back_blue} alt='icono para regresar' />
            <span className='back-text'>Volver</span>
          </button>
        </div>
        {currentStep === 1 && (
          <>
            <div className='person'>
              <div className='person__title'>Rocío ¿Para quién deseas cotizar?</div>
              <div className='person__description'>
                Selecciona la opción que se ajuste más a tus necesidades.
              </div>

              <div className='person__cards'>
                <div
                  className={`person__card ${selectedPerson === 'me' ? 'person__card--active' : ''}`}
                  onClick={() => handleSelectPerson('me')}
                >
                  <div
                    className={`person__circle ${selectedPerson === 'me' ? 'person__circle--checked' : ''}`}
                  >
                    {selectedPerson === 'me' && <img src={ic_check} alt='check' />}
                  </div>
                  <img src={ic_protection_light} alt='protección' />
                  <div className='person__card-title'>Para mí</div>
                  <span className='person__card-description'>
                    Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                  </span>
                </div>

                <div
                  className={`person__card ${selectedPerson === 'someone' ? 'person__card--active' : ''}`}
                  onClick={() => handleSelectPerson('someone')}
                >
                  <div
                    className={`person__circle ${selectedPerson === 'someone' ? 'person__circle--checked' : ''}`}
                  >
                    {selectedPerson === 'someone' && <img src={ic_check} alt='check' />}
                  </div>
                  <img src={ic_add_user_light} alt='protección' />
                  <div className='person__card-title'>Para alguien más</div>
                  <span className='person__card-description'>
                    Puedes cotizar para tus padres, hijos u otros familiares.
                  </span>
                </div>
              </div>
            </div>

            {selectedPerson && (
              <div className='plan__list'>
                {finalPlans.map((plan) => (
                  <PlanCard key={plan.name} {...plan} onClick={() => handleSelectPlan(plan)} />
                ))}
              </div>
            )}
          </>
        )}
        {currentStep === 2 && (
          <div className='summary'>
            <div className='summary__title'>Resumen del seguro </div>
            <SummaryCard {...user} plan={selectedPlan!} />
          </div>
        )}
      </GridContainer>
    </>
  );
};
