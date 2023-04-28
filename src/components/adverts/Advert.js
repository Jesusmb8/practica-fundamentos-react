import Layout from '../layout/Layout';
import './Advert.css';

const Advert = ({ price, name, sale, tags }) => {
  return (
    <div className='advert'>
      <p>{name}</p>
      <p>{price} € </p>
      <p>{sale ? 'Se vende' : 'Se compra'}</p>
      <p>{tags}</p>
    </div>
  );
};

export default Advert;
