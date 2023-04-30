import './Advert.css';

const Advert = ({ price, name, sale, tags }) => {
  return (
    <div className='advert'>
      <p>{name}</p>
      <p>{price} € </p>
      <p>{sale ? 'Se vende' : 'Se compra'}</p>
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
    </div>
  );
};

export default Advert;
