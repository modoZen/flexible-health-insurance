import { Button } from '../Button/Button';
import ic_home_light from '/ic_home_light.svg';
import ic_hospital_light from '/ic_hospital_light.svg';
import './PlanCard.scss';

interface Props {
  name: string;
  price: number;
  description: string[];
  onClick: () => void;
}

export const PlanCard = ({ name, price, description, onClick }: Props) => {
  const imageMain = name.includes('Clínica') ? ic_hospital_light : ic_home_light;

  return (
    <div className='plan__card'>
      <div className='plan__card-main'>
        <div className='plan__card-information'>
          <div className='plan__card-name'>{name}</div>
          <span className='plan__card-price'>
            <div className='plan__card-price-text'>Costo del plan</div>
            <div className='plan__card-price-number'>${price} al mes</div>
          </span>
        </div>
        <img src={imageMain} alt='protección' />
      </div>
      <ul className='plan__card-descriptions'>
        {description.map((text) => (
          <li key={text} className='plan__card-description'>
            {text}
          </li>
        ))}
      </ul>
      <div className='plan__card-button'>
        <Button mode='red' onClick={onClick}>
          Seleccionar Plan
        </Button>
      </div>
    </div>
  );
};
