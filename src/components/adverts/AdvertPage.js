import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useEffect, useState } from 'react';
import { deleteAdvert, getAdvert } from './service';

function AdvertsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const advertDetail = await getAdvert(params.advertId);
        setAdvert(advertDetail);
      } catch (error) {
        if (error.status === 404) {
          return navigate('/404');
        }
      }
    }
    getData();
  }, []);
  const handleDelete = async () => {
    if (window.confirm('¿Está seguro de eliminar el anuncio?')) {
      try {
        await deleteAdvert(params.advertId);
        navigate('/adverts');
      } catch (error) {
        navigate('/404');
      }
    }
  };
  return (
    <Layout>
      <h1>AdvertPage</h1>
      <h5>{advert.name}</h5>
      <img src={advert.photo} alt='Imagen del anuncio' />
      <p>{advert.price}€</p>
      <button onClick={handleDelete}> Pulse para eliminar el anuncio</button>
    </Layout>
  );
}

export default AdvertsPage;
