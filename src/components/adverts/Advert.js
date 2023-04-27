import Layout from '../layout/Layout';

const Advert = ({ id, price, name, sale, photo }) => {
  return (
    <>
      <p>{id}</p>
      <p>{price}</p>
      <p>{name}</p>
      <p>Tipo:{sale.toString()}</p>
      <p>Photo:{photo}</p>
      <img src={photo} />
    </>
  );
};

export default Advert;
