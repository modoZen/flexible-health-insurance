import type { Plan } from '../../domain/plan.interface';
import ic_family from '/ic_family.svg';
import './SummaryCard.scss';

interface Props {
  name: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  plan: Plan;
  phone: string;
}

export const SummaryCard = ({
  name,
  lastName,
  plan,
  documentNumber,
  documentType,
  phone,
}: Props) => {
  return (
    <div className='summary__card'>
      <div className='summary__card-main'>
        <div className='summary__card-message'>Precios calculados para:</div>
        <div className='summary__card-user'>
          <img src={ic_family} alt='protección' />
          <div className='summary__card-name'>
            {name} {lastName}
          </div>
        </div>
      </div>
      <div className='summary__card-block'>
        <div className='summary__card-block-title'>Responsable de pago</div>
        <div className='summary__card-block-detail'>
          {documentType}: {documentNumber}
        </div>
        <div className='summary__card-block-detail'>Celular: {phone}</div>
      </div>
      <div className='summary__card-block'>
        <div className='summary__card-block-title'>Plan elegido</div>
        <div className='summary__card-block-detail'>{plan.name}</div>
        <div className='summary__card-block-detail'>Costo del Plan: ${plan.price} al mes</div>
      </div>
    </div>
  );
};
