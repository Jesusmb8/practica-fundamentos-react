import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

function AdvertsPage() {
  const params = useParams();

  return (
    <Layout>
      <h1>AdvertPage: {params.advertId}</h1>
    </Layout>
  );
}

export default AdvertsPage;
