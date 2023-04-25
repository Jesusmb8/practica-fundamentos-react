import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { getAdverts } from './service';

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const advertsResponse = await getAdverts();
      console.log('adverts', advertsResponse);
      setAdverts(advertsResponse);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <h1>ADVERTS PAGE 2</h1>
    </Layout>
  );
};

export default AdvertsPage;
