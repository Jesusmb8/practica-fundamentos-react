import Layout from '../layout/Layout';

const Advert = ({ id, price, name }) => {
  return (
    <>
      <p>{id}</p>
      <p>{price}</p>
      <p>{name}</p>
    </>
  );
};

export default Advert;
